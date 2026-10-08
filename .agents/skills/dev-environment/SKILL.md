---
name: dev-environment
description: Set up, run, seed and test CubeDesk locally or on a cloud VM. Covers installing Node/pnpm/Postgres/Redis, starting the dev server, the seeded test accounts and password, logging in through the browser or curl, exercising the timer, trainer, 1v1, friends and admin pages, resetting the database, and known local gotchas (email, BASE_URI, IndexedDB cache). Use when you need to run the app, verify a change in the browser or API, seed or reset data, or debug environment problems.
---

# CubeDesk dev environment

## Setup

On a fresh Linux machine or cloud VM, one script sets everything up:

```sh
bash scripts/dev-setup.sh          # install + start
bash scripts/dev-setup.sh install  # Node 24, pnpm, Postgres/Redis packages, .env, node_modules
bash scripts/dev-setup.sh start    # start Postgres + Redis, apply migrations, seed dummy data
```

It's idempotent, so rerun `start` whenever Postgres or Redis isn't running (after a VM resume, or when you see connection errors). Services already listening on 5432/6379 are reused. Otherwise it installs them with apt and runs them natively, or falls back to `docker compose` (`DEV_SETUP_SERVICES=docker|native` forces one).

What it needs and why:

- **Node 24 and pnpm** at the version in `package.json` `packageManager` (enabled through corepack). Only pnpm works (`preinstall` enforces it).
- **Postgres** with the `.default.env` credentials: `root:root@127.0.0.1/cubedesk`. The seed only runs against a localhost database named `cubedesk`, `cubedesk_dev` or `cubedesk_test` with `NODE_ENV=development`.
- **Redis 7+**. The Socket.io sharded adapter uses `SSUBSCRIBE`; Redis 6 crashes the server. Without Redis the server still serves pages, but 1v1, cron jobs and admin metrics don't work.
- **`.env`**, copied from `.default.env`. No secrets are needed. Missing on purpose: AWS (S3 uploads are no-ops in dev; SES email fails), `WCA_SECRET` / `DISCORD_SECRET` (account linking reports "not configured"), Sentry.

`generated/prisma` is committed, so no `prisma generate` is needed unless you change the schema (`pnpm prisma` regenerates it).

## Running

```sh
pnpm dev   # http://localhost:3000, one port for pages, /trpc, sockets and Vite HMR
```

- Wait for `curl -sf localhost:3000/health`. The first page load is slow (tens of seconds) while Vite pre-bundles dependencies, and it may reload once.
- `BASE_URI` must match the URL you browse. The server prefetches `/user/:username` and `/solve/:shareCode` over HTTP from `BASE_URI`, and the client sends tRPC there. With a mismatch those pages render blank. For another port, run `PORT=3100 BASE_URI=http://localhost:3100 pnpm dev`.
- Vite HMR uses a websocket on port 24678. If that port isn't reachable, ignore the `[vite] failed to connect to websocket` console error and reload manually.
- Console errors for Google Fonts, plausible.io, googletagmanager and `cdn.cubedesk.io` (fonts, uploaded images) are expected offline.
- In development, pages render client-side; only the logged-out `/` is server-rendered.

## Seeded data

`pnpm seed:dev` (run by the setup script) creates a small world with stable IDs. Rerunning skips rows that already exist. Every account uses the password **`cubedesk`** and the email `<username>@cubedesk.test`.

| Username | What to use it for |
| --- | --- |
| `agent` | **Main test account, admin.** 90 days of solves in 4 sessions (3x3, 2x2, 4x4, Pyraminx) plus a custom event ("Relay 2-4"), smart-cube solves, friends, pending requests both ways, unread notifications, 1v1 history, a solo elimination game, custom trainers, trainer favorites and history, published PBs |
| `alice` | Regular non-admin user, friends with agent, owns a liked public trainer. Use her to test non-admin behavior (admin APIs return FORBIDDEN) |
| `bob` | Friends with agent |
| `carol`, `erin` | Sent agent friend requests (Community → Friends → Received) |
| `dave` | Has a pending request from agent (Sent) |
| `heidi`, `frank` | Extra community members with profiles, ELO and PBs |
| `grace` | History imported from csTimer (`bulk` solves + an `import_attempt`) |
| `mallory` | Top of the ELO leaderboard, 3 open reports at `/admin/reports`, beat agent in a rated match. Banning her for "cheating in 1v1" exercises the ELO refund flow |
| `trent` | Banned forever, so logging in shows the banned screen and every tRPC call returns FORBIDDEN |
| `newbie` | Only the rows signup creates, so the timer shows onboarding and empty states |

Handy fixed URLs:
- `/solve/seedsmart0` (also `seedsmart1`, `seedsmart2`): a smart-cube solve with CFOP step breakdown.
- `/play/head-to-head/seed-h2h-alice`: an ended match. Also `seed-h2h-bob`, `seed-h2h-mallory`, and `/play/elimination/seed-elim-friends`.
- `/user/alice`: a profile with bio, ELO and PBs.
- `/trainer/333/OLL`, `/trainer/333/PLL`, `/trainer/222/CLL`, `/trainer/222/OLL`: a 15-case sample of the built-in catalog (`scripts/seed-dev-trainer.ts`). It's only added while the catalog is empty, so CSV imports and edits at `/admin/trainer` survive reseeding.

To add solves to an account you created yourself: `pnpm seed:dev --username <name>`. To start over: `pnpm exec prisma migrate reset --force && pnpm seed:dev`.

## Logging in

- **Browser:** log in at `/login` with a seeded email and the password `cubedesk`. Use a fresh browser context per user. The client caches solves and sessions in IndexedDB and only refetches when the user's `offline_hash` changes. The seed bumps it, but after editing rows by hand, clear site data or use a new context.
- **API:** tRPC has no transformer, so requests and responses are plain JSON. Mutations are POSTs; queries are GETs with `?input=<url-encoded JSON>`. The session is an httpOnly `session` cookie (a JWT signed with `JWT_SECRET`).

```sh
curl -c /tmp/jar -H 'content-type: application/json' \
  -d '{"email":"agent@cubedesk.test","password":"cubedesk"}' localhost:3000/trpc/auth.logIn
curl -b /tmp/jar localhost:3000/trpc/user.me
curl -b /tmp/jar "localhost:3000/trpc/profile.get?input=$(node -p 'encodeURIComponent(JSON.stringify({username:"alice"}))')"
```

Procedure names are the router keys in `server/trpc/router.ts` plus the procedure names in `server/trpc/routers/*.ts` (e.g. `friendship.searchRequestsReceived`, `customTrainer.searchPublic`, `match.byLinkCode` with `{code}`).

## Exercising features

- **Timer** (`client/components/timer/key-watcher/KeyWatcher.tsx`): hold Space at least 0.2 s, release to start, and press any key to stop. Synthetic key events need `keyCode` 32 (Playwright's `keyboard.down('Space')` sets it). Keys are ignored while an input, button or dialog has focus. Turning on manual entry in `/settings/timer` lets you type times instead. Logged-out `/` is a demo timer that needs no account.
- **Smart cubes and timers** use Web Bluetooth, and there is no simulator. Test the UI around them with the seeded smart-cube solves; the driver code needs real hardware.
- **Live 1v1** needs Redis and two logged-in browser contexts (e.g. agent and alice) on `/play/head-to-head`. Pairing runs on a cron every 3 s. Seeded matches are already ended (the app auto-ends stale matches when they're read).
- **Admin pages** (`/admin/*`) render for any logged-in user; the server enforces `user_account.admin` on each `adminProcedure`. There is no Pro or paid tier.
- **Email is not configured locally** (SES without AWS credentials):
  - Forgot password (`/forgot`) crashes the dev server with an unhandled rejection. The code is saved in `forgot_password` if you need it.
  - Friend requests, accepts and ELO refunds only send email when the recipient's `notification_preference` allows it. Seeded users have email off. Accounts created through `/signup` have it on, so those actions fail for them until you turn it off.
- **Signup** works but calls `ifconfig.co` for the country, which can stall without internet. Prefer the seeded accounts.
- **Image uploads** (profile pictures, timer backgrounds) are no-ops in development and render as broken CDN links.
- **DB integration tests** are skipped unless you opt in, and they need the local Postgres: `METRICS_DB_TESTS=1`, `IMPORT_DB_TESTS=1`, `TRAINER_DB_TESTS=1`.
