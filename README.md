# FikrahTech v2 — School Command Center

Fresh rebuild of the v1 school-management SaaS (React SPA + Express + Sequelize) as a **single Next.js 14 repo**: same mission, entirely new command-center interface.

## Stack

Next.js 14 (App Router, TypeScript) · Tailwind CSS 3 · Prisma 6 (PostgreSQL) · Supabase (Postgres + Auth) · lucide-react

## What's inside

- **Landing (`/`)** — dark hero, console preview, feature grid
- **Mission control (`/dashboard`)** — KPI sparklines, schools radar, live activity
- **Schools (`/schools`)** — instant search, status filters, action row (demo data)
- **Command palette (`⌘K`)** — jump anywhere; dark/light theme toggle
- **Stubs** — `/sessions /revenue /subscriptions /staff /settings` ready to wire
- **Prisma schema** — User, School, Section, Staff, Class, Student, AcademicSession/Term, SubscriptionPlan, SchoolSubscription, Payment

## Getting started

```bash
npm install
cp .env.example .env   # fill Supabase URLs + DATABASE_URL / DIRECT_URL
npm run db:push        # create tables (prototype) — or npm run db:migrate
npm run dev            # http://localhost:3000
```

## Scripts

```bash
npm run dev | build | start | lint
npm run db:generate | db:push | db:migrate | db:studio
```

## Roadmap

1. Supabase Auth + middleware session refresh + role gates
2. Replace `src/data/demo.ts` with Prisma queries (schools first)
3. Server Actions for block/unblock, password reset, renewals
4. Expiry cron + email reminders; deploy to Vercel + connect Supabase
