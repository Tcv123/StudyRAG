# Flashcard top-up (30 cards per topic)

Brings every topic in `flashcards-config.js` up to 30 system flashcards.

- `src/<deck>.txt` — the card source, one `front ~~ back` per line under `## <topic num>`.
- `<deck>.sql` — generated per-deck SQL (one guarded INSERT each).
- `paste/*.sql` — the same SQL grouped into five transactions for the Supabase SQL editor.

Each INSERT is safe whatever is already live: it skips fronts already in the topic,
never takes a topic past 30, and continues `card_order` after the topic's current max.
Running a file twice inserts nothing the second time.

```
node scripts/build-flashcard-topup.js status     # which decks are covered
node scripts/build-flashcard-topup.js build      # validate sources, regenerate <deck>.sql
node scripts/build-flashcard-topup.js bundle     # regenerate paste/*.sql
```

Check the result in Supabase after pasting:

```sql
select subject, exam_board, level, count(*) as topics, min(n) as min_cards, sum(n) as total
from (select subject, exam_board, level, topic_id, count(*) n from flashcards group by 1,2,3,4) t
group by 1,2,3 order by 1,2,3;
```
