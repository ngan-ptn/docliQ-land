# AI Instructions for docliQ-land

## Repository Overview

This is a versioned collection of docliQ applications with shared resources.

```
docliQ-land/
├── fixtures/         # Shared fixture data
├── guidelines/       # Visual & compliance guidelines
├── knowledge/        # Iterative knowledge system
├── versions/         # Independent app versions (v1, v2, ...)
└── .claude/skills/   # Project-specific AI skills
```

## Available Skills

These slash commands are available in this repository:

| Command | When to Use |
|---------|-------------|
| `/knowledge:during` | During development - capture a learning immediately |
| `/knowledge:weekly` | Weekly - sync progress, review experiments |
| `/knowledge:after` | After iteration - comprehensive review |

## Knowledge System

The `/knowledge/` folder tracks learnings across versions:

- `decision-log.md` - Why we chose X over Y
- `pattern-library.md` - Reusable patterns
- `knowledge-log.md` - Assumption → reality shifts
- `lessons-learned.md` - Strategic insights
- `sum-changed.md` - Progress tracker

### Tagging

| Tag | Meaning |
|-----|---------|
| `[Experiment]` | New, unvalidated |
| `[Reusable]` | Ready for 2nd validation |
| `[Adopted]` | Validated in 2+ versions |
| `[Deprecated]` | No longer use |
| `[Source: vX]` | Origin version |

## Working with Versions

Each version in `/versions/` is fully independent. When working on a version:

1. Navigate to the version folder
2. Run `bun install` and `bun run dev`
3. Database: `bun run db:push` then `bun run db:seed`

## Shared Resources

- **Fixtures** (`/fixtures/`): Shared test data, imported by each version's seed script
- **Guidelines** (`/guidelines/`): Design and compliance docs
- **Knowledge** (`/knowledge/`): Cross-version learnings

## AI Behavior

When working in this repo:
- Always check which version you're working in
- Document learnings using `/knowledge:during`
- Don't share code between versions (except fixtures/guidelines)
- Refer to `/knowledge/` before making architectural decisions
