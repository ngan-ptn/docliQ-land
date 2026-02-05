---
name: resolve-conflict
description: Safely resolve git merge/rebase conflicts with strict rules
user-invocable: true
---

# Resolve Merge Conflict

**Prime Directive:** AI resolves conflicts, not decides behaviour. If you cannot explain why a line exists after resolution, STOP.

## One-Line Law

> Resolve conflicts by composing intent with minimal change; never guess, never refactor, never weaken behaviour.

## Steps

1. **Identify conflicts** - Run `git status` to find conflicted files

2. **For each conflicted file**, read it and identify conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)

3. **Analyze both sides**:
   - What does `main` (HEAD) intend?
   - What does the feature branch intend?
   - Can both intents coexist?

4. **Apply resolution rules** (see below)

5. **Output three sections** (MANDATORY):

   ```
   ## Resolved Code
   [the merged code]

   ## Decision Summary
   - Kept from main: [what]
   - Kept from feature: [what]
   - Removed: [what and WHY]

   ## Risk Notes
   - [anything needing manual review/testing]
   ```

6. **Apply the resolution** using Edit tool

7. **Mark resolved**: `git add [file]`

8. **After all conflicts resolved**, ask if user wants to continue merge/rebase

---

## General Rules (ALL files)

- Preserve ALL observable behaviour from both sides
- Prefer **composition over replacement**
- Make the **smallest possible diff**
- NEVER refactor, rename, or reformat unrelated code
- NEVER invent new logic, abstractions, or defaults
- NEVER delete logic silently

---

## Branch Semantics

- `main` = current production truth
- Feature branch = layered intent on top

Rules:
- Breaking/structural changes in `main` take precedence
- Feature logic must adapt to `main`, not overwrite it

---

## File-Type Rules

### Frontend (UI, components, client logic)
- Combine validation, guards, and UI states
- Preserve accessibility and error handling
- Do NOT change layout, hierarchy, or state shape
- Validation may only become stricter or equal

### Backend (API, domain, data)
- Preserve invariants, guards, logging, metrics
- NEVER weaken auth, permissions, or security
- Data models/schemas are human-owned → STOP on conflict
- Observability must never decrease

### Tests
- NEVER delete tests to resolve conflicts
- Keep stricter assertions
- Flag behavioural ambiguity, don't guess

### Config & Lockfiles
- Prefer additive merges
- Prefer `main` values on conflict
- NEVER hand-edit dependency graphs
- Flag if regeneration required

---

## FORBIDDEN Actions (instant failure)

You must NOT:
- Choose "ours" or "theirs" blindly
- Refactor or "clean up" code
- Simplify logic
- Apply "best practices"
- Modernise syntax
- Change APIs or data contracts

**Conflict resolution ≠ code improvement**

---

## MANDATORY Stop Conditions

STOP and ask human if:
- Both sides change behaviour incompatibly
- Business rules, auth, validation, or security differ
- Resolution would delete >20% of a file
- Conflict spans multiple architectural layers
- You cannot explain the final behaviour confidently
- Conflict touches security, auth, payments, or data models

---

## Anti-Patterns to REJECT

Never say:
- "Choose the cleaner version"
- "Simplify logic"
- "Modernise syntax"
- "Apply best practices"
- "Improve readability"

These are design decisions, not merge decisions.

---

## Final Safety Check

Before completing, ask yourself:
> "Could this resolution subtly change behaviour without anyone noticing?"

If yes → STOP and ask for clarification.
