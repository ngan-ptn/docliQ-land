---
name: knowledge:during
description: Capture learnings during development - decisions, patterns, lessons, knowledge shifts
user-invocable: true
---

# Knowledge During Development

You are helping the user document something they just learned. Guide them through capturing it in the appropriate knowledge file.

## Steps

1. Ask what type of learning they want to capture:
   - **Decision** - Made a tech choice (library, approach, architecture)
   - **Pattern** - Found a reusable solution
   - **Lesson** - Made a mistake worth remembering
   - **Knowledge shift** - Assumption proved wrong

2. Based on their answer, help them fill out the template:

### For Decisions → `/knowledge/decision-log.md`
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

### For Patterns → `/knowledge/pattern-library.md`
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

### For Lessons → `/knowledge/lessons-learned.md`
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

### For Knowledge Shifts → `/knowledge/knowledge-log.md`
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

3. After they provide the content, use the Edit tool to add the entry to the appropriate file (insert after the header section, before existing entries).

4. Confirm the entry was added.
