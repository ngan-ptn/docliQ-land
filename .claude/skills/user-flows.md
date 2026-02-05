# User Flows Skill

**Trigger:** User types `/user-flows`

**Purpose:** Generate User Flow documentation for the current app/feature.

## Context Sources

Analyze the current implemented app using these sources:

1. **Frontend Routes:** `versions/v1/apps/web/src/routes/` - Screen flows
2. **Database Schema:** `versions/v1/packages/db/src/schema/index.ts` - Entity states
3. **Fixture Data:** `/fixtures/*.json` - Data relationships
4. **API Routes:** `versions/v1/apps/server/src/` - Actions/operations

## Steps

1. **Identify Jobs-to-be-Done:**
   - What are the main user goals? (booking, profile, history, etc.)
   - Map each goal to a Job ID (J1, J2, etc.)
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
   - Style START/END nodes consistently

4. **Define Metrics:**
   - Primary metric for each flow
   - Target values
   - Fallback metrics

5. **Output location:**
   - Save to `docs/flows/[feature-name]-user-flows.md`
   - Or display in conversation if user prefers

## Output Template

Use the template at `/workflows/user-flows.md`

## Example Prompt

When triggered, say:

```
I'll analyze the current app and generate User Flow documentation.

Analyzing:
- Routes to identify user journeys
- Schema to understand entity states
- Fixtures to understand data flow

[Then proceed with analysis and output]
```

## Rules

- Base flows on ACTUAL implemented routes and actions
- Include ALL major user journeys
- Document decision points for branching logic
- Use JTBD format for job statements
- Keep flow diagrams readable (max 15-20 nodes per diagram)
- Use consistent Mermaid styling:
  - START/END: `fill:#000000,color:#ffffff`
  - Errors: `fill:#ffebee,stroke:#c62828`
  - Warnings: `fill:#fff3e0,stroke:#ef6c00`
  - Info/Processing: `fill:#e3f2fd,stroke:#1565c0`
