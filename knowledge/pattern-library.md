# Workspace Pattern Library

**Purpose:** Technical patterns validated across multiple versions and ready for reuse.

**Scope:** Patterns promoted from version-level after validation in 2+ versions.

**Order:** Reverse chronological (newest first)

**Criteria for Inclusion:**
- Validated in 2+ versions OR
- Documented for first version with [Experiment] tag, promoted to [Adopted] after 2nd validation

---

## Pattern: Better T Stack Scaffold [Adopted]

**Date:** 2026-02-05
**Status:** Adopted
**Source Version:** v1
**Validated In:** 1 version (awaiting v2 validation)
**Tags:** [Source: v1] [Adopted]

### Problem
Need a consistent, modern full-stack TypeScript setup for each version.

### Solution
Use Better T Stack CLI with specific configuration:
- Frontend: React + TanStack Router
- Backend: Hono
- Database: SQLite + Drizzle ORM
- API: tRPC
- Runtime: Bun

### When to Use
✅ Use when:
- Creating a new version
- Need full-stack TypeScript app
- Want type-safe API layer

### When NOT to Use
❌ Avoid when:
- Simple static site needed
- Different stack requirements specified

### Implementation
```bash
bunx create-better-t-stack@latest vX \
  --frontend tanstack-router \
  --backend hono \
  --database sqlite \
  --orm drizzle \
  --auth none \
  --package-manager bun \
  --runtime bun \
  --api trpc \
  --addons none \
  --examples none \
  --db-setup none \
  --web-deploy none \
  --server-deploy none \
  --no-git \
  --no-install
```

### Trade-offs
**Benefits:**
- ✅ Consistent structure across versions
- ✅ Type-safe end-to-end
- ✅ Modern tooling (Vite, Bun)

**Costs:**
- ❌ Requires Tailwind v3 downgrade
- ❌ Monorepo complexity

---

<!-- New patterns go here (above this comment) -->

---

## Adding New Patterns

**Template:**

```markdown
## Pattern: [Pattern Name] [Status Tag]

**Date:** YYYY-MM-DD
**Status:** [Experiment/Adopted/Deprecated]
**Source Version:** [Origin]
**Validated In:** [Number] versions
**Tags:** [Source: vX] [Status Tag]

### Problem
[What problem does this solve]

### Solution
[How it solves the problem]

### When to Use
✅ Use when:
- [Scenario 1]
- [Scenario 2]

### When NOT to Use
❌ Avoid when:
- [Anti-pattern 1]
- [Anti-pattern 2]

### Implementation
[Code location, key files, example]

### Trade-offs
**Benefits:**
- ✅ [Benefit 1]

**Costs:**
- ❌ [Cost 1]

### Lessons Learned
[What we learned implementing this]
```

**Promotion Criteria:**
1. Tag [Experiment] when created in first version
2. Document thoroughly with trade-offs
3. Validate in 2nd version → tag [Adopted]
4. If better approach found → tag [Deprecated], document replacement
