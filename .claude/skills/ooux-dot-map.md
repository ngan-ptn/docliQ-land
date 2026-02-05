# OOUX Dot Map Skill

**Trigger:** User types `/ooux-dot-map`

**Purpose:** Generate an Entity Relationship diagram using OOUX (Object-Oriented UX) technique for the current app/feature.

## Context Sources

Analyze the current implemented app using these sources:

1. **Database Schema:** `versions/v1/packages/db/src/schema/index.ts`
2. **Fixture Data:** `/fixtures/*.json`
3. **API Routes:** `versions/v1/apps/server/src/` (if available)
4. **Frontend Routes:** `versions/v1/apps/web/src/routes/` (if available)

## Steps

1. **Analyze the codebase:**
   - Read the database schema to identify entities and relationships
   - Read fixtures to understand data structure and examples
   - Identify which entities are core vs supporting

2. **Identify Objects:**
   - **Core Objects:** Main entities users interact with directly
   - **Supporting Objects:** Entities that support core objects

3. **For each object, extract:**
   - **Attributes:** All properties/columns from schema
   - **Actions:** CRUD operations + domain-specific actions (from API/routes)
   - **Relationships:** Foreign keys, cardinality (1:1, 1:M, M:M)

4. **Generate output following template:**
   - Mermaid diagram showing objects and relationships
   - Object descriptions with attributes and actions
   - Relationship table with cardinality
   - (Optional) User flows if routes suggest them
   - (Optional) State lifecycle if status fields exist

5. **Output location:**
   - Save to `docs/ooux/[feature-name]-dot-map.md`
   - Or display in conversation if user prefers

## Output Template

Use the template at `/workflows/ooux-dot-map.md`

## Example Prompt

When triggered, say:

```
I'll analyze the current app and generate an OOUX Dot Map.

Analyzing:
- Database schema at versions/v1/packages/db/src/schema/
- Fixture data at /fixtures/

[Then proceed with analysis and output]
```

## Rules

- Base analysis on ACTUAL code, not assumptions
- Include ALL entities from schema
- Mark relationships with correct cardinality
- Keep descriptions concise but complete
- Use consistent styling in Mermaid diagram
