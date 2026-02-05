# Vercel Deployment Guide

## Overview

Each version can be deployed to Vercel as a separate project:
- **Frontend (web)**: Static site served from Vercel CDN
- **Backend (server)**: Edge functions via Hono adapter

## Prerequisites

1. [Vercel CLI](https://vercel.com/docs/cli) installed:
   ```bash
   npm i -g vercel
   ```

2. Vercel account linked:
   ```bash
   vercel login
   ```

3. Database setup (choose one):
   - **Turso** (recommended for SQLite): https://turso.tech
   - **Vercel Postgres**: https://vercel.com/storage/postgres
   - **PlanetScale**: https://planetscale.com

## Deployment Steps

### 1. Navigate to Version

```bash
cd ~/docliQ-land/versions/v1
```

### 2. Set Up Database (Turso Example)

```bash
# Install Turso CLI
brew install tursodatabase/tap/turso

# Login
turso auth login

# Create database
turso db create docliq-v1

# Get connection URL
turso db show docliq-v1 --url

# Create auth token
turso db tokens create docliq-v1
```

### 3. Configure Environment Variables

Create `.env.production` or set in Vercel dashboard:

```env
DATABASE_URL=libsql://your-db.turso.io
DATABASE_AUTH_TOKEN=your-token
CORS_ORIGIN=https://your-app.vercel.app
NODE_ENV=production
```

### 4. Deploy to Vercel

```bash
# First deployment (will prompt for settings)
vercel

# Production deployment
vercel --prod
```

Or connect via Vercel Dashboard:
1. Go to https://vercel.com/new
2. Import your Git repository
3. Set root directory to `versions/v1`
4. Add environment variables
5. Deploy

### 5. Push Database Schema

After deployment, push your schema:

```bash
# Set production DATABASE_URL
export DATABASE_URL="libsql://your-db.turso.io?authToken=your-token"

# Push schema
bun run db:push

# Seed data (optional)
bun run db:seed
```

## Project Structure for Vercel

```
versions/v1/
├── vercel.json           # Vercel configuration
├── apps/
│   ├── web/              # Frontend → Static files
│   │   └── dist/         # Build output
│   └── server/
│       ├── src/          # Server source
│       └── api/
│           └── index.ts  # Vercel Edge Function entry
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | Database connection URL | `libsql://db.turso.io` |
| `DATABASE_AUTH_TOKEN` | Database auth token | `eyJ...` |
| `CORS_ORIGIN` | Frontend URL for CORS | `https://app.vercel.app` |
| `NODE_ENV` | Environment | `production` |

## Multiple Versions

To deploy multiple versions:

1. Each version = separate Vercel project
2. Use different project names:
   - `docliq-v1`
   - `docliq-v2`
3. Each has its own database and env vars

## Troubleshooting

### Build Fails

```bash
# Test build locally
bun run build

# Check for TypeScript errors
bun run check-types
```

### API Not Working

1. Check CORS_ORIGIN matches your frontend URL
2. Verify DATABASE_URL is accessible from Vercel Edge
3. Check function logs in Vercel dashboard

### Database Connection Issues

- Turso requires `?authToken=` in URL for remote connections
- Ensure your database allows connections from Vercel IPs

## Useful Commands

```bash
# View deployment logs
vercel logs

# List deployments
vercel ls

# Remove deployment
vercel rm <deployment-url>

# Pull env vars from Vercel
vercel env pull
```

## Cost Considerations

- **Vercel Hobby (Free)**: Good for development
  - 100GB bandwidth
  - Serverless function limits

- **Turso Free Tier**:
  - 9GB storage
  - 500 databases
  - Unlimited reads

For production, consider Vercel Pro + Turso Scaler plans.
