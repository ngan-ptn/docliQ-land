# Workspace Decision Log

**Purpose:** Track decisions affecting all versions: tech stack, tooling, standards.

**Scope:** Decisions that apply across multiple versions. Version-specific decisions go in version-level decision-log.

**Order:** Reverse chronological (newest first)

---

## DEC-W001: Folder-based Versioning [Adopted]

**Date:** 2026-02-05
**Status:** Adopted
**Versions Affected:** All
**Source Version:** v1

**Decision:**
Each app version lives in its own independent folder (`/versions/v1`, `/versions/v2`, etc.) with no shared code between versions.

**Rationale:**
- Clean experimentation without breaking existing versions
- Easy comparison between different implementations
- Simple rollback by switching to a previous version folder
- Each version can evolve independently

**Implementation:**
- All versions in `/versions/` directory
- Each version is a complete Better T Stack app
- Shared resources (fixtures, guidelines) at root level

**Trade-offs:**
- ✅ Complete isolation between versions
- ✅ Easy to compare implementations
- ❌ Some duplication of boilerplate code

---

## DEC-W002: Tailwind CSS v3 Standard [Adopted]

**Date:** 2026-02-05
**Status:** Adopted
**Versions Affected:** All
**Source Version:** v1

**Decision:**
All versions use Tailwind CSS v3 (not v4) with traditional `tailwind.config.js` configuration.

**Rationale:**
- v3 has broader ecosystem support
- Config-based approach is well-documented
- Easier to maintain consistent styling across versions

**Implementation:**
- Downgrade from v4 if scaffolded with newer version
- Use `tailwind.config.js` (not CSS-based config)
- Include `tailwindcss-animate` for animations

**Trade-offs:**
- ✅ Stable, well-documented
- ✅ Broad plugin ecosystem
- ❌ Not using latest Tailwind features

---

<!-- New decisions go here (above this comment) -->

---

## Adding New Decisions

**Template:**

```markdown
## DEC-W###: [Decision Title] [Status Tag]

**Date:** YYYY-MM-DD
**Status:** [Proposed/Accepted/Adopted/Deprecated]
**Versions Affected:** [All/List specific versions]
**Source Version:** [Origin version or N/A]

**Decision:**
[What was decided - one clear sentence]

**Rationale:**
- [Why this decision was made]
- [Evidence or reasoning]

**Implementation:**
- [How it's implemented]
- [Files/locations affected]

**Trade-offs:**
- ✅ [Benefits]
- ❌ [Costs/limitations]
```

**Status Definitions:**
- **Proposed:** Under consideration
- **Accepted:** Approved but not yet implemented
- **Adopted:** Implemented and validated (standard)
- **Deprecated:** No longer recommended
