#!/bin/bash
# Stop hook for StudyRAG.
# Commits and pushes the working tree, but ONLY if this session has opted in by
# creating ~/.claude/autopush/<session_id>.on. No flag, no push.
# Set AUTOPUSH_DRY_RUN=1 to print what it would do instead of doing it.
INPUT=$(cat)
SID=$(printf '%s' "$INPUT" | sed -n 's/.*"session_id"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p')
FLAG="$HOME/.claude/autopush/$SID.on"

if [ -z "$SID" ] || [ ! -f "$FLAG" ]; then
  exit 0
fi

BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null) || exit 0

# FETCH GUARD. Whether a push can succeed depends on where the remote is, and
# the only way to know that is to ask it. Without this the hook committed,
# failed the push as a non-fast-forward, discarded the error (the old code
# ended `2>/dev/null || true`) and printed "Auto-pushed" regardless. On
# 2026-09-21 seven Auto-push commits piled up locally over 45 minutes that way,
# every turn reporting success, because local main had been behind origin/main
# since before the session started. A failed push that announces success is
# worse than no push at all: the work looks published when it is not.
#
# A fetch failure (offline, auth) leaves BEHIND at 0 and falls through to the
# push, which then reports its own error truthfully — being unable to ask is
# not evidence that the remote moved.
git fetch --quiet origin "$BRANCH" 2>/dev/null
BEHIND=0
if git rev-parse --verify --quiet "refs/remotes/origin/$BRANCH" >/dev/null 2>&1; then
  BEHIND=$(git rev-list --count "HEAD..refs/remotes/origin/$BRANCH" 2>/dev/null || echo 0)
fi

if [ -n "$AUTOPUSH_DRY_RUN" ]; then
  echo "DRY RUN: flag present ($FLAG), branch $BRANCH"
  echo "DRY RUN: behind origin/$BRANCH by ${BEHIND:-0} commit(s)"
  if [ "${BEHIND:-0}" -gt 0 ]; then
    echo "DRY RUN: would commit but HOLD the push (non-fast-forward)"
  else
    echo "DRY RUN: would commit $(git status --porcelain | wc -l | tr -d ' ') changed path(s) and push to origin/$BRANCH"
  fi
  exit 0
fi

commit_if_dirty() {
  if [ -n "$(git status --porcelain)" ]; then
    git add -A && git commit -q -m "Auto-push: $(date +%Y-%m-%d\ %H:%M)"
  fi
}

# Behind the remote: still commit, so the turn's work is checkpointed and
# nothing is lost, but do not attempt a push that cannot succeed. Say so
# plainly and name the fix, rather than letting it accumulate unnoticed.
if [ "${BEHIND:-0}" -gt 0 ]; then
  commit_if_dirty 2>/dev/null
  printf '{"systemMessage":"Auto-push HELD: %s is %s commit(s) behind origin/%s, so a push would be rejected. Work is committed locally but NOT published. Reconcile first: git fetch origin && git rebase origin/%s && git push origin %s"}\n' \
    "$BRANCH" "$BEHIND" "$BRANCH" "$BRANCH" "$BRANCH"
  exit 0
fi

commit_if_dirty 2>/dev/null

# Report what actually happened. The push error is captured rather than
# discarded so that auth, network and hook-rejection failures surface too.
if PUSH_OUT=$(git push origin "$BRANCH" 2>&1); then
  echo "{\"systemMessage\":\"Auto-pushed to origin/$BRANCH\"}"
else
  DETAIL=$(printf '%s' "$PUSH_OUT" | tr -d '"\\' | tr '\n' ' ' | tail -c 200)
  printf '{"systemMessage":"Auto-push FAILED for origin/%s — work is committed locally but NOT published: %s"}\n' "$BRANCH" "$DETAIL"
fi
