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
| `/ooux-dot-map` | See [ooux-dot-map prompt](#ooux-dot-map) |
| `/info-map` | See [info-map prompt](#info-map) |
| `/user-flows` | See [user-flows prompt](#user-flows) |

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

## ooux-dot-map

**Trigger:** User types `/ooux-dot-map`

**Purpose:** Generate an Entity Relationship diagram using OOUX (Object-Oriented UX) technique for the current app/feature.

**Context Sources:**

1. **Database Schema:** `versions/v1/packages/db/src/schema/index.ts`
2. **Fixture Data:** `/fixtures/*.json`
3. **API Routes:** `versions/v1/apps/server/src/` (if available)
4. **Frontend Routes:** `versions/v1/apps/web/src/routes/` (if available)

**Steps:**

1. **Analyze the codebase:**
   - Read the database schema to identify entities and relationships
   - Read fixtures to understand data structure and examples
   - Identify which entities are core vs supporting

2. **Identify Objects:**
   - **Core Objects:** Main entities users interact with directly
   - **Supporting Objects:** Entities that support core objects

3. **For each object, extract:**
   - **Attributes:** All properties/columns from schema
   - **Actions:** CRUD operations + domain-specific actions
   - **Relationships:** Foreign keys, cardinality (1:1, 1:M, M:M)

4. **Generate output following template at `/workflows/ooux-dot-map.md`:**
   - Mermaid diagram showing objects and relationships
   - Object descriptions with attributes and actions
   - Relationship table with cardinality
   - (Optional) User flows if routes suggest them
   - (Optional) State lifecycle if status fields exist

5. **Output location:**
   - Save to `docs/ooux/[feature-name]-dot-map.md`
   - Or display in conversation if user prefers

**Rules:**
- Base analysis on ACTUAL code, not assumptions
- Include ALL entities from schema
- Mark relationships with correct cardinality
- Keep descriptions concise but complete

---

## info-map

**Trigger:** User types `/info-map`

**Purpose:** Generate an Information Architecture (IA) Map for the current app/feature.

**Context Sources:**

1. **Frontend Routes:** `versions/v1/apps/web/src/routes/`
2. **Database Schema:** `versions/v1/packages/db/src/schema/index.ts`
3. **Components:** `versions/v1/apps/web/src/components/`

**Steps:**

1. **Analyze the codebase:**
   - Read route files to identify all screens and navigation paths
   - Identify route hierarchy and groupings
   - Find status fields in schema for lifecycle diagrams

2. **Document Structure:**
   - **Sections:** Group screens by feature/domain
   - **Hierarchy:** Create tree structure of all screens
   - **Routes:** Map URL paths to screen components

3. **Generate Outputs following template at `/workflows/info-map.md`:**
   - High-level structure (ASCII tree)
   - Master IA diagram (Mermaid flowchart)
   - Navigation paths table
   - Status lifecycle diagrams (if applicable)
   - Route structure tables
   - Screen inventory

4. **Output location:**
   - Save to `docs/ia/[feature-name]-ia-map.md`
   - Or display in conversation if user prefers

**Rules:**
- Base analysis on ACTUAL route files
- Include ALL routes found in the codebase
- Group screens logically by feature domain
- Document status lifecycles if status fields exist

---

## user-flows

**Trigger:** User types `/user-flows`

**Purpose:** Generate User Flow documentation for the current app/feature.

**Context Sources:**

1. **Frontend Routes:** `versions/v1/apps/web/src/routes/`
2. **Database Schema:** `versions/v1/packages/db/src/schema/index.ts`
3. **Fixture Data:** `/fixtures/*.json`
4. **API Routes:** `versions/v1/apps/server/src/`

**Steps:**

1. **Identify Jobs-to-be-Done:**
   - Map main user goals to Job IDs (J1, J2, etc.)
   - Use format: "When I [situation], I want to [action] so that [outcome]"

2. **Document Each Flow:**
   - **Flow Steps:** Sequential user actions and system responses
   - **Decision Points:** Branching logic and conditions
   - **Objects Modified:** Which entities change state
   - **Success Criteria:** How to measure completion

3. **Create Flow Diagrams:**
   - Mermaid flowcharts for each major flow
   - Use subgraphs to group related steps
   - Mark decision points with diamond shapes

4. **Define Metrics:**
   - Primary metric, target values, fallback metrics

5. **Output location:**
   - Save to `docs/flows/[feature-name]-user-flows.md`
   - Or display in conversation if user prefers

**Template:** Use `/workflows/user-flows.md`

**Mermaid Styling:**
- START/END: `fill:#000000,color:#ffffff`
- Errors: `fill:#ffebee,stroke:#c62828`
- Warnings: `fill:#fff3e0,stroke:#ef6c00`
- Info/Processing: `fill:#e3f2fd,stroke:#1565c0`

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
