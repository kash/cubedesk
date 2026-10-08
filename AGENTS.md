# AGENTS.md

CubeDesk is a speedcubing timer, stats, trainer and 1v1 app. One Node 24 process (`server/app.ts`, Express) serves tRPC at `/trpc`, Socket.io for live 1v1, and the React 19 client through Vite middleware. Data lives in Postgres (Prisma 7) and Redis.

Before running the app, the DB integration tests or anything that needs Postgres or Redis, run `bash scripts/dev-setup.sh`. It installs everything on a fresh machine, starts the services, migrates and seeds test data, and is a quick no-op when everything is already up. For running the app, the seeded test accounts, and testing changes in the browser or API, use the `dev-environment` skill (`.agents/skills/dev-environment/SKILL.md`).

## Rules

- When using cn(), prefer using an object with the string as the key and a boolean value as the value to enable/disable a style rather than using a boolean && 'style' format.
- Run the literal "pnpm prisma" when you need to migrate the local database schema. This alias exists in package.json and works.
- Once you're done with a task, make sure you didn't introduce any new TypeScript errors. Go back and fix them if you introduced any new TypeScript errors after making changes.
- Branch names should start with the initials of the person making the changes (kg for kash, who is the author).
    - Prefer git add -A rather than referencing each file individually
- Whenever support for a new connected device (smart cube, smart timer, etc.) is added, update the supported devices docs page (client/components/docs/pages/SupportedDevices.tsx) to list it, and drop its "coming soon" flag if it had one.
- Never hand-edit `prisma/migrations` or change the database schema with SQL; change `prisma/schema.prisma` and run `pnpm prisma`.
- Fix TypeScript errors at their root (correct the types or declarations) instead of casting to `any` or adding `@ts-ignore`.
- Don't add new unit tests unless asked. Do run the existing ones.
- Commit messages are short and plain, without `Co-Authored-By` or other trailers.

## Checks

```sh
npx tsc --noEmit                    # type check; there is no typecheck script
npx eslint <files you changed>      # check-only; `pnpm lint` runs eslint --fix over the whole repo
pnpm test                           # jest; one file: pnpm test -- path/to/file.test.ts -t "name"
```

CI runs none of these (it only builds and deploys on push to `main`), so run them yourself. Formatting follows `.prettierrc` (tabs, single quotes, no bracket spacing, width 100); ESLint enforces sorted imports, exhaustive hook deps and no unused imports.

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
