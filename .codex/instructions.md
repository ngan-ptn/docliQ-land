# Codex Instructions for docliQ-land

## Repository Overview

This is a versioned collection of docliQ applications with shared resources.

```
docliQ-land/
├── fixtures/         # Shared fixture data
├── guidelines/       # Visual & compliance guidelines
├── knowledge/        # Iterative knowledge system
├── versions/         # Independent app versions (v1, v2, ...)
```

## Available Commands

When user types these commands, follow the linked prompt:

| Command | Prompt File |
|---------|-------------|
| `/commit` | See [commit prompt](#commit) |
| `/resolve-conflict` | See [resolve-conflict prompt](#resolve-conflict) |
| `/knowledge:during` | See [knowledge-during prompt](#knowledge-during) |
| `/knowledge:weekly` | See [knowledge-weekly prompt](#knowledge-weekly) |
| `/knowledge:after` | See [knowledge-after prompt](#knowledge-after) |

---

## commit

**Trigger:** User types `/commit`

**Purpose:** Auto-generate commit message and commit changes.

**Steps:**

1. Run `git status` and `git diff` to understand changes

2. Generate commit message (MAX 100 CHARACTERS):

   Format: `type(scope): description`

   Types:
   - `feat` - New feature
   - `fix` - Bug fix
   - `docs` - Documentation
   - `style` - Formatting
   - `refactor` - Code restructure
   - `test` - Tests
   - `chore` - Build/tooling

   Rules:
   - Max 100 characters total
   - Lowercase, no period at end
   - Focus on WHAT changed

3. Show user:
   ```
   📝 Proposed commit:
   ─────────────────────────
   [message]
   ─────────────────────────
   Files: [list]
   ```

4. Ask: "Commit with this message? (y/n/edit)"

5. If confirmed:
   ```bash
   git add [specific files]
   git commit -m "[message]"
   ```

6. Ask: "Push to remote? (y/n)" - ONLY push if confirmed

**Rules:**
- NEVER push without asking
- NEVER use `git add .` - add specific files
- NEVER commit .env or credentials

---

## resolve-conflict

**Trigger:** User types `/resolve-conflict`

**Purpose:** Safely resolve git merge/rebase conflicts.

**Prime Directive:** Resolve conflicts, not decide behaviour. If you cannot explain why a line exists, STOP.

**One-Line Law:** Resolve by composing intent with minimal change; never guess, never refactor, never weaken behaviour.

**Steps:**

1. Run `git status` to find conflicted files

2. For each file, analyze both sides:
   - What does `main` intend?
   - What does feature branch intend?
   - Can both coexist?

3. Apply resolution following rules below

4. Output THREE sections (MANDATORY):
   ```
   ## Resolved Code
   [merged code]

   ## Decision Summary
   - Kept from main: [what]
   - Kept from feature: [what]
   - Removed: [what and WHY]

   ## Risk Notes
   - [what needs manual review]
   ```

5. Apply resolution, then `git add [file]`

**General Rules:**
- Preserve ALL behaviour from both sides
- Prefer composition over replacement
- Smallest possible diff
- NEVER refactor unrelated code
- NEVER delete logic silently

**Branch Semantics:**
- `main` = production truth (wins on breaking changes)
- Feature = layered intent (must adapt to main)

**File-Type Rules:**

| Type | Rule |
|------|------|
| Frontend | Combine validation/guards, preserve accessibility |
| Backend | NEVER weaken auth/security, preserve logging |
| Tests | NEVER delete tests, keep stricter assertions |
| Config | Prefer additive, prefer main values |

**FORBIDDEN:**
- Choose "ours"/"theirs" blindly
- Refactor or clean up
- Simplify logic
- Apply "best practices"

**STOP and ask human if:**
- Both sides change behaviour incompatibly
- Touches auth, security, payments, data models
- Would delete >20% of file
- Cannot explain final behaviour

---

## knowledge-during

**Trigger:** User types `/knowledge:during`

**Purpose:** Capture learnings during development.

**Steps:**

1. Ask what type of learning they want to capture:
   - **Decision** - Made a tech choice (library, approach, architecture)
   - **Pattern** - Found a reusable solution
   - **Lesson** - Made a mistake worth remembering
   - **Knowledge shift** - Assumption proved wrong

2. Based on their answer, help them fill out the template:

**For Decisions** → Edit `/knowledge/decision-log.md`
```markdown
## DEC-W###: [Decision Title] [Adopted]

**Date:** [today's date]
**Status:** Adopted
**Versions Affected:** [All or specific]
**Source Version:** [v1, v2, etc.]

**Decision:**
[What was decided - one clear sentence]

**Rationale:**
- [Why this decision was made]

**Trade-offs:**
- ✅ [Benefits]
- ❌ [Costs/limitations]
```

**For Patterns** → Edit `/knowledge/pattern-library.md`
```markdown
## Pattern: [Name] [Experiment]

**Date:** [today's date]
**Source Version:** [v1, v2, etc.]
**Tags:** [Source: vX] [Experiment]

### Problem
[What problem does this solve]

### Solution
[How it solves the problem]

### When to Use
✅ Use when: [scenarios]

### When NOT to Use
❌ Avoid when: [anti-patterns]
```

**For Lessons** → Edit `/knowledge/lessons-learned.md`
```markdown
## LESS-W###: [Lesson Title] [Adopted]

**Date:** [today's date]
**Source:** [Version/Context]

**What We Learned:**
[Key insight - 1-2 sentences]

**Why This Matters:**
[Impact of ignoring this lesson]

**Action Taken:**
[What changed as a result]
```

**For Knowledge Shifts** → Edit `/knowledge/knowledge-log.md`
```markdown
## KL-W###: [Topic] [Adopted]

**Date:** [today's date]
**Source Version:** [v1, v2, etc.]

**Initial Assumption:**
[What you thought was true]

**Reality Discovered:**
[What actually turned out to be true]

**Lesson Learned:**
[The takeaway for future work]
```

3. Add the entry to the appropriate file (insert after the header, before existing entries).
4. Confirm the entry was added.

---

## knowledge-weekly

**Trigger:** User types `/knowledge:weekly`

**Purpose:** Weekly knowledge sync.

**Steps:**

1. Read and report stats from knowledge files:
   ```
   📊 Knowledge Stats:
   ─────────────────────────
   Decisions:  [count from decision-log.md]
   Patterns:   [count from pattern-library.md]
   Knowledge:  [count from knowledge-log.md]
   Lessons:    [count from lessons-learned.md]
   Last sync:  [date from sum-changed.md]
   ─────────────────────────
   ```

2. Find any `[Experiment]` tags and ask if they should be:
   - Promoted to `[Reusable]`
   - Marked `[Deprecated]`
   - Kept as `[Experiment]`

3. Update `/knowledge/sum-changed.md`:
   - Update `**Last Updated:**` to today
   - Ask what to add to "Recent Work"
   - Update metrics table

4. Confirm completion.

---

## knowledge-after

**Trigger:** User types `/knowledge:after`

**Purpose:** Post-iteration comprehensive review.

**Steps:**

1. Ask:
   - Which version? (v1, v2, etc.)
   - What was the milestone about?

2. Ask these reflection questions:
   - "What major decisions did you make?"
   - "What patterns could be reused?"
   - "What would you do differently?"
   - "What assumptions proved wrong?"

3. For each answer, help document using templates above.

4. Apply correct tags:
   - `[Experiment]` - new unvalidated
   - `[Reusable]` - validated in this version
   - `[Source: vX]` - origin version

5. Check existing `[Reusable]` entries for promotion to `[Adopted]` (if validated in 2+ versions).

6. Update `/knowledge/sum-changed.md` with milestone.

7. Confirm with checklist:
   ```
   ✅ Post-iteration review complete:
   □ Decisions documented
   □ Patterns extracted
   □ Lessons captured
   □ Tags applied
   □ sum-changed.md updated
   ```

---

## Knowledge System Reference

### Files

| File | Purpose |
|------|---------|
| `decision-log.md` | Why we chose X over Y |
| `pattern-library.md` | Reusable patterns |
| `knowledge-log.md` | Assumption → reality shifts |
| `lessons-learned.md` | Strategic insights |
| `sum-changed.md` | Progress tracker |

### Tags

| Tag | Meaning |
|-----|---------|
| `[Experiment]` | New, unvalidated |
| `[Reusable]` | Ready for 2nd validation |
| `[Adopted]` | Validated in 2+ versions |
| `[Deprecated]` | No longer use |
| `[Source: vX]` | Origin version |
