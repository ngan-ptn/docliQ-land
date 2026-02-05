# Cross-Cutting Knowledge Guide for docliQ-land

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    CROSS-CUTTING KNOWLEDGE SYSTEM                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   ┌─────────────────────────────────────────────────────────────────┐   │
│   │  WORKSPACE LEVEL (Shared)                                      │   │
│   │  /knowledge/                                                    │   │
│   │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐            │   │
│   │  │decision-log  │ │pattern-lib   │ │lessons-learn │            │   │
│   │  │[Adopted]     │ │[Adopted]     │ │[Adopted]     │            │   │
│   │  └──────────────┘ └──────────────┘ └──────────────┘            │   │
│   └─────────────────────────────────────────────────────────────────┘   │
│                              ▲                                          │
│                              │ PROMOTE (after 2+ versions validate)     │
│                              │                                          │
│   ┌─────────────────────────────────────────────────────────────────┐   │
│   │  VERSION LEVEL                                                  │   │
│   │  /versions/v*/docs/cross-cutting/                               │   │
│   │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐            │   │
│   │  │decision-log  │ │pattern-lib   │ │lessons-learn │            │   │
│   │  │[Reusable]    │ │[Experiment]  │ │[Version-spec]│            │   │
│   │  └──────────────┘ └──────────────┘ └──────────────┘            │   │
│   └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Tag Lifecycle

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         TAG LIFECYCLE                                   │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  VERSION LEVEL                                                          │
│  ════════════                                                           │
│                                                                         │
│  [Experiment] ──────► [Reusable] ──────► [Promoted]                    │
│       │                    │                  │                         │
│       │ (if fails)         │ (2nd version)    │ (reference only)        │
│       ▼                    ▼                  ▼                         │
│  [Deprecated]         WORKSPACE          "See /knowledge/"              │
│                                                                         │
│  ─────────────────────────────────────────────────────────────────────  │
│                                                                         │
│  WORKSPACE LEVEL                                                        │
│  ═══════════════                                                        │
│                                                                         │
│  [Adopted] ◄────────── Promotion from 2+ versions                      │
│       │                                                                 │
│       │ (if obsolete)                                                   │
│       ▼                                                                 │
│  [Deprecated]                                                           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Knowledge Flow

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        KNOWLEDGE FLOW                                   │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  Version v1                            Version v2                       │
│  ┌──────────────┐                       ┌──────────────┐               │
│  │              │                       │              │               │
│  │ 1. Learn     │                       │ 1. Learn     │               │
│  │    ↓         │                       │    ↓         │               │
│  │ 2. Document  │                       │ 2. Validate  │◄── Check v1's │
│  │    ↓         │                       │    ↓         │    [Reusable] │
│  │ 3. Tag       │                       │ 3. Confirm   │               │
│  │   [Reusable] │───────────────────────│   works here │               │
│  │              │                       │              │               │
│  └──────────────┘                       └──────────────┘               │
│         │                                      │                        │
│         └──────────────┬───────────────────────┘                        │
│                        ▼                                                │
│              ┌──────────────────┐                                       │
│              │    WORKSPACE     │                                       │
│              │    [Adopted]     │                                       │
│              │                  │                                       │
│              │  Now applies to  │                                       │
│              │  ALL versions    │                                       │
│              └──────────────────┘                                       │
│                        │                                                │
│         ┌──────────────┼──────────────┐                                │
│         ▼              ▼              ▼                                 │
│    Version v1     Version v2     Version v3                            │
│    (origin)       (validator)    (inherits)                            │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Where to Write?

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    WHERE TO WRITE? (Decision Tree)                      │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                        New Knowledge                                    │
│                             │                                           │
│                             ▼                                           │
│                   ┌─────────────────┐                                  │
│                   │ Affects ALL     │                                  │
│                   │ versions?       │                                  │
│                   └────────┬────────┘                                  │
│                      YES   │   NO                                       │
│              ┌─────────────┴─────────────┐                             │
│              ▼                           ▼                              │
│     ┌─────────────┐            ┌─────────────────┐                     │
│     │ WORKSPACE   │            │ Validated in    │                     │
│     │ /knowledge/ │            │ 2+ versions?    │                     │
│     │             │            └────────┬────────┘                     │
│     │ Examples:   │               YES   │   NO                         │
│     │ • Stack     │       ┌─────────────┴─────────────┐                │
│     │ • Fixtures  │       ▼                           ▼                 │
│     │ • Guidelines│  ┌─────────────┐         ┌─────────────┐           │
│     └─────────────┘  │ WORKSPACE   │         │ VERSION     │           │
│                      │ [Adopted]   │         │             │           │
│                      │             │         │ Tag:        │           │
│                      │ + [Source:  │         │ [Experiment]│           │
│                      │   v1]       │         │ [Reusable]  │           │
│                      └─────────────┘         │ [Ver-spec]  │           │
│                                              └─────────────┘           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Sync Schedule

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        SYNC SCHEDULE                                    │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  WEEKLY                                                                 │
│  ══════                                                                 │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  □ Update sum-changed.md with progress                          │   │
│  │  □ Review [Experiment] entries - validate or remove             │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  AFTER MILESTONE                                                        │
│  ═══════════════                                                        │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  □ Document decisions in decision-log.md                        │   │
│  │  □ Extract patterns to pattern-library.md                       │   │
│  │  □ Tag entries appropriately                                    │   │
│  │  □ Check [Reusable] candidates for promotion                    │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  BEFORE NEW VERSION                                                     │
│  ═════════════════                                                      │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  □ Read workspace pattern-library.md - apply [Adopted]          │   │
│  │  □ Read workspace lessons-learned.md - avoid mistakes           │   │
│  │  □ Check other versions' [Reusable] - validation opportunities  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Quick Reference

### File Locations

| Level | Path | Contains |
|-------|------|----------|
| Workspace | `/knowledge/` | Cross-version standards |
| Version | `/versions/v*/docs/cross-cutting/` | Version-specific |

### Files

| File | Purpose |
|------|---------|
| `decision-log.md` | Why we chose X over Y |
| `knowledge-log.md` | What we learned |
| `sum-changed.md` | Progress tracking |
| `pattern-library.md` | Reusable patterns |
| `lessons-learned.md` | Strategic insights |

### Tags

| Tag | Level | Meaning |
|-----|-------|---------|
| `[Experiment]` | Version | Unvalidated, testing |
| `[Reusable]` | Version | Ready for 2nd validation |
| `[Version-specific]` | Version | Never promote |
| `[Promoted]` | Version | Now in workspace |
| `[Adopted]` | Workspace | Standard across versions |
| `[Deprecated]` | Both | No longer use |
| `[Source: vX]` | Workspace | Origin version |

### Anti-Patterns

```
┌─────────────────────────────────────────────────────────────────────────┐
│  ❌ DON'T                              ✅ DO                            │
├─────────────────────────────────────────────────────────────────────────┤
│  Promote after 1 version               Wait for 2+ versions            │
│  Duplicate content both levels         Reference workspace from version│
│  Skip tagging                          Tag every entry                  │
│  Forget source tracking                Add [Source: vX] when promoting │
│  Write directly to workspace           Start at version level          │
└─────────────────────────────────────────────────────────────────────────┘
```
