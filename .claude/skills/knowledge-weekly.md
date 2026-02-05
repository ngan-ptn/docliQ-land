---
name: knowledge:weekly
description: Weekly knowledge sync - track progress, review experiments, check promotions
user-invocable: true
---

# Weekly Knowledge Sync

Help the user with their weekly knowledge review.

## Steps

1. **Read current stats** from the knowledge files:
   - Count entries in each file
   - Find any `[Experiment]` tags that need review
   - Check `sum-changed.md` for last update date

2. **Report status:**
   ```
   📊 Knowledge Stats:
   ─────────────────────────
   Decisions:  [count]
   Patterns:   [count]
   Knowledge:  [count]
   Lessons:    [count]
   Last sync:  [date from sum-changed.md]
   ─────────────────────────
   ```

3. **Flag items needing attention:**
   - List any `[Experiment]` entries that should be reviewed
   - Ask if any should be promoted to `[Reusable]` or `[Deprecated]`

4. **Update sum-changed.md:**
   - Update `**Last Updated:**` to today's date
   - Ask user what progress to add to "Recent Work" section
   - Update "Current Focus" if needed
   - Update metrics table

5. **Checklist confirmation:**
   ```
   ✅ Weekly sync complete:
   □ Progress tracked in sum-changed.md
   □ [Experiment] entries reviewed
   □ Metrics updated
   ```
