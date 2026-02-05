---
name: commit
description: Auto-generate commit message and commit changes (max 100 chars)
user-invocable: true
---

# Commit Changes

Auto-generate a commit message and commit staged/unstaged changes.

## Steps

1. **Check git status** - Run `git status` to see changes

2. **Check git diff** - Run `git diff` and `git diff --staged` to understand what changed

3. **Generate commit message** (max 100 characters):

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
   - Lowercase
   - No period at end
   - Focus on WHAT changed, not HOW
   - Be specific but concise

   Examples:
   - `feat(api): add doctor search endpoint`
   - `fix(auth): resolve token refresh race condition`
   - `refactor(db): simplify appointment query logic`

4. **Show the user**:
   ```
   📝 Proposed commit:
   ─────────────────────────
   [generated message]
   ─────────────────────────

   Files to commit:
   - [list of files]
   ```

5. **Ask for confirmation** - "Commit with this message? (y/n/edit)"

6. **If confirmed**, run:
   ```bash
   git add [specific files]
   git commit -m "[message]"
   ```

7. **After commit**, show result and ask: "Push to remote? (y/n)"

8. **Only push if user confirms**

## Rules

- NEVER push without asking
- NEVER use `git add .` or `git add -A` - add specific files
- NEVER commit sensitive files (.env, credentials)
- If too many changes, suggest breaking into multiple commits
- Always show what will be committed before committing
