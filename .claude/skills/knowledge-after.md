---
name: knowledge:after
description: Post-iteration review - extract patterns, document decisions, capture lessons
user-invocable: true
---

# Post-Iteration Knowledge Review

Guide the user through a comprehensive knowledge extraction after completing an iteration or milestone.

## Steps

1. **Ask context:**
   - Which version did they complete iteration on? (v1, v2, etc.)
   - What was the milestone/iteration about?

2. **Guided reflection** - Ask these questions one at a time:

   **Decisions:**
   > What major tech/architecture/UX choices did you make this iteration?

   **Patterns:**
   > What solutions could be reused in other versions?

   **Lessons:**
   > What would you do differently next time?

   **Knowledge Shifts:**
   > What assumptions proved wrong?

3. **For each "yes" answer**, help them document it:
   - Use the appropriate template from the knowledge files
   - Add proper tags:
     - `[Experiment]` for new unvalidated patterns
     - `[Reusable]` if validated in this iteration
     - `[Source: vX]` to track origin version

4. **Check for promotions:**
   - Read existing `[Reusable]` entries
   - Ask if any were validated in this iteration
   - If validated in 2+ versions → promote to `[Adopted]`

5. **Update sum-changed.md:**
   - Add milestone to "Recent Work"
   - Update metrics
   - Update "What's Next"

6. **Final checklist:**
   ```
   ✅ Post-iteration review complete:
   □ Decisions documented
   □ Patterns extracted
   □ Lessons captured
   □ Tags applied correctly
   □ Promotions checked
   □ sum-changed.md updated
   ```
