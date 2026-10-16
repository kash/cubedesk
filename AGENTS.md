# AGENTS.md

CubeDesk is a speedcubing timer, stats, trainer and 1v1 app. One Node 24 process (`server/app.ts`, Express) serves tRPC at `/trpc`, Socket.io for live 1v1, and the React 19 client through Vite middleware. Data lives in Postgres (Prisma 7) and Redis.

Before running the app, the DB integration tests, or anything that needs Postgres or Redis, run `bash scripts/dev-setup.sh` only when the app is not already up. If `node_modules` exists and `curl -sf localhost:3000/health` succeeds, skip it. The script exits immediately in that case. If dependencies are installed but Postgres or Redis is down, run `bash scripts/dev-setup.sh start`. For the seeded test accounts and how to hit the API, use the `dev-environment` skill (`.agents/skills/dev-environment/SKILL.md`).

## Rules

- When using cn(), prefer using an object with the string as the key and a boolean value as the value to enable/disable a style rather than using a boolean && 'style' format.
- Run the literal "pnpm prisma" when you need to migrate the local database schema. This alias exists in package.json and works.
- Once you're done with a task, make sure you didn't introduce any new TypeScript errors. Go back and fix them if you introduced any new TypeScript errors after making changes.
- Branch names should start with the initials of the person making the changes (kg for kash, who is the author).
    - Prefer git add -A rather than referencing each file individually
- Before creating a PR, fetch `origin/main` and check whether the branch is behind it. If it is, merge `main` into the branch and resolve any conflicts before opening the PR.
- Whenever support for a new connected device (smart cube, smart timer, etc.) is added, update the supported devices docs page (client/components/docs/pages/SupportedDevices.tsx) to list it, and drop its "coming soon" flag if it had one.
- Never hand-edit `prisma/migrations` or change the database schema with SQL; change `prisma/schema.prisma` and run `pnpm prisma`.
- Fix TypeScript errors at their root (correct the types or declarations) instead of casting to `any` or adding `@ts-ignore`.
- Don't add new unit tests unless asked. Run `pnpm test -- path/to/file.test.ts` for tests that cover code you changed. Skip the full suite for a small UI or API change.
- Commit messages are short and plain, without `Co-Authored-By` or other trailers.
- Don't add comments to code. Existing comments can stay; just don't write new ones.
- Keep PR descriptions short and to the point. A long explanation is fine when the change is big enough to need one.
- Never credit an AI agent or tool (Claude, Cursor, Codex, Copilot or any other) anywhere: no `Co-Authored-By` lines, "Generated with" footers, emoji badges or mentions in commits, PR titles or descriptions, code or docs.

## Checks

```sh
npx tsc --noEmit                    # type check; there is no typecheck script
npx eslint <files you changed>      # check-only; `pnpm lint` runs eslint --fix over the whole repo
pnpm test                           # jest; one file: pnpm test -- path/to/file.test.ts -t "name"
```

CI runs none of these (it only builds and deploys on push to `main`), so run `tsc` and eslint yourself. Run `pnpm test` for the files you changed, not the whole suite, unless the change is wide or the user asked. Formatting follows `.prettierrc` (tabs, single quotes, no bracket spacing, width 100); ESLint enforces sorted imports, exhaustive hook deps and no unused imports.

## Verifying

For a UI or API change, one scripted pass is the whole check. Log in as `agent@cubedesk.test` / `cubedesk` with curl against `/trpc`, or a short Puppeteer script against `http://localhost:3000`, and assert the behavior you changed. Save one screenshot when the change is visual.

Do not open a computer-use browser session, record the screen, or send that recording to a video review unless the user asked for a demo. Do not debug pre-existing behavior you did not change, including hover-only controls and DevTools device mode. Headless Chrome reports `hover: none`, so hover styles will not show there.

## Codebase map

- `client/components/<area>/`: feature UI. Primitives are in `client/components/ui/`. Routes are in `client/components/layout/Routes.ts`; every route requires login unless its 5th `route()` argument is `false`.
- `client/util/api.tsx`: `api.<router>.<proc>.useQuery()` / `useMutation()` in React components. Outside React, use the raw client in `client/util/trpc.ts` (`trpc.<router>.<proc>.query()`).
- `client/db/`: Dexie (IndexedDB) cache of solves, sessions and settings. `client/reducers` and `client/actions` hold Redux state.
- `server/trpc/routers/*.ts`: tRPC procedures (`publicProcedure`, `protectedProcedure`, `adminProcedure`). Register new routers in `server/trpc/router.ts`. Data access lives in `server/models/`.
- `server/match/`: Socket.io matchmaking and live 1v1. Event types are in `shared/match/socketio.types.ts`.
- `shared/`, `client/shared/`, `types/`: code and types used by both client and server.
- Path aliases: `@/server/*`, `@/shared/*`, `@/client/shared/*`, `@/types/*`, `@/generated/*`, and `@/*` → `client/*`.
- Styling: Tailwind v4 via `cn()` (`client/util/cn.ts`). Docs pages live in `client/components/docs/pages/` and are registered in `client/components/docs/doc-pages.ts`.
- Scripts: `scripts/dev-setup.sh` (environment), `scripts/seed-dev*.ts` (seed data).
