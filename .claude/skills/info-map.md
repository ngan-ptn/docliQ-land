# Info Map Skill

**Trigger:** User types `/info-map`

**Purpose:** Generate an Information Architecture (IA) Map for the current app/feature.

## Context Sources

Analyze the current implemented app using these sources:

1. **Frontend Routes:** `versions/v1/apps/web/src/routes/` - Screen structure
2. **Database Schema:** `versions/v1/packages/db/src/schema/index.ts` - Status fields
3. **Fixture Data:** `/fixtures/*.json` - Status values and relationships
4. **Components:** `versions/v1/apps/web/src/components/` - UI structure

## Steps

1. **Analyze the codebase:**
   - Read route files to identify all screens and navigation paths
   - Identify route hierarchy and groupings
   - Find status fields in schema for lifecycle diagrams

2. **Document Structure:**
   - **Sections:** Group screens by feature/domain (auth, booking, settings, etc.)
   - **Hierarchy:** Create tree structure of all screens
   - **Routes:** Map URL paths to screen components

3. **Generate Outputs:**
   - High-level structure (ASCII tree)
   - Master IA diagram (Mermaid flowchart)
   - Navigation paths table
   - Status lifecycle diagrams (if applicable)
   - Route structure tables
   - Screen inventory

4. **Output location:**
   - Save to `docs/ia/[feature-name]-ia-map.md`
   - Or display in conversation if user prefers

## Output Template

Use the template at `/workflows/info-map.md`

## Example Prompt

When triggered, say:

```
I'll analyze the current app and generate an Information Architecture Map.

Analyzing:
- Routes at versions/v1/apps/web/src/routes/
- Schema at versions/v1/packages/db/src/schema/
- Components structure

[Then proceed with analysis and output]
```

## Rules

- Base analysis on ACTUAL route files, not assumptions
- Include ALL routes found in the codebase
- Group screens logically by feature domain
- Document status lifecycles if status fields exist in schema
- Use consistent Mermaid styling for diagrams
