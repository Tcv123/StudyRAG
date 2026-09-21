#!/bin/bash
# SessionStart hook for StudyRAG.
# Clears any stale auto-push flag for this session (default = OFF / confirm before
# pushing), then asks Claude to put the choice to the user before it edits anything.
INPUT=$(cat)
SID=$(printf '%s' "$INPUT" | sed -n 's/.*"session_id"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p')
FLAGDIR="$HOME/.claude/autopush"
mkdir -p "$FLAGDIR"
[ -n "$SID" ] && rm -f "$FLAGDIR/$SID.on"
# Forget flags from sessions that ended more than a week ago.
find "$FLAGDIR" -name '*.on' -mtime +7 -delete 2>/dev/null

MSG="StudyRAG auto-push is OFF for this session (the safe default). Before you make \
the first file edit in this repo, ask the user which they want for this conversation: \
(a) auto-push -- every turn's changes are committed and pushed to the public repo \
Tcv123/StudyRAG automatically, or (b) confirm first -- changes stay local until they \
ask you to push. Ask once, early, and do not ask again this session. If they choose \
auto-push, turn it on by running: touch \"$FLAGDIR/$SID.on\" -- if they choose confirm \
first, do nothing (the flag's absence is what holds the push). They can switch at any \
point: creating that file enables it, 'rm -f' on it disables it. Note that when \
auto-push is on the commit uses 'git add -A', so it sweeps in every uncommitted change \
in the tree, including work from other sessions."

# JSON-escape the message, then emit the hook result.
printf '%s' "$MSG" | python3 -c 'import json,sys; print(json.dumps({"hookSpecificOutput":{"hookEventName":"SessionStart","additionalContext":sys.stdin.read()},"suppressOutput":True}))'
