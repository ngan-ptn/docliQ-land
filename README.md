# docliQ-land

A versioned collection of independent web applications built with [Better T Stack](https://github.com/AmanVarshney01/create-better-t-stack) + Tailwind CSS v3.

## Stack

Each version is a fully independent application with:

- **Frontend:** React + TanStack Router
- **Backend:** Hono
- **Database:** SQLite + Drizzle ORM
- **API:** tRPC
- **Styling:** Tailwind CSS v3

## Project Structure

```
docliQ-land/
├── README.md
├── fixtures/         # Shared fixture data for all versions
│   ├── user.json
│   ├── doctor.json
│   ├── appointment.json
│   └── ...
└── versions/
    ├── v1/           # First version
    ├── v2/           # Second version (when created)
    └── ...
```

## Running a Version

```bash
# Navigate to the version
cd versions/v1

# Install dependencies
bun install

# Start local database (optional)
bun run db:local

# Start development servers
bun run dev
```

The app will be available at:
- Frontend: http://localhost:3001
- Backend API: http://localhost:3000

## Creating a New Version

To create a new version, run from the `versions/` directory:

```bash
cd versions

bunx create-better-t-stack@latest v2 \
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

**Note:** After scaffolding, you may need to downgrade Tailwind to v3 if the CLI installs v4 by default. See the v1 setup for reference.

## Database Commands

```bash
# Apply schema changes
bun run db:push

# Open database UI
bun run db:studio
```

## Versioning Philosophy

Each version is **fully independent** - no shared code between versions (except fixture data). This allows:

- Clean experimentation without breaking existing versions
- Easy comparison between different implementations
- Simple rollback by switching to a previous version folder
- Consistent test data across all versions via shared fixtures
