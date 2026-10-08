# CubeDesk

[![Deploy CubeDesk to Production](https://github.com/kash/cubedesk/actions/workflows/deploy-prod.yaml/badge.svg?branch=main)](https://github.com/kash/cubedesk/actions/workflows/deploy-prod.yaml)

[CubeDesk](https://cubedesk.io) is a free, open-source application that allows [speedcubers](https://en.wikipedia.org/wiki/Speedcubing) to keep track of their times, visualize their stats, train hundreds of algorithms, and play with other cubers.

![Home page of cubedesk](https://cdn.cubedesk.io/static/images/landing/timer.png)

## Bugs & Feature Requests

Before creating a bug or asking for a new feature, it's worthwhile to bring up your request on the Discord Server, where you may be able to get your issue resolved. If you'd like to report a bug, though, please go to the [Issues page](https://github.com/kash/cubedesk/issues) and create a New Issue with the `bug` label.

If you'd like to request a new feature or make suggestions, please use the [Discussions page](https://github.com/kash/cubedesk/discussions).

## Development

If you'd like to contribute to CubeDesk, firstly, _thank you_; secondly, please follow the [Development Onboarding instructions on the Wiki](https://github.com/kash/cubedesk/wiki/Development-Onboarding). Getting set up should only take less than 10 minutes!

### Local setup and sample data

On a fresh Linux machine or cloud VM, `bash scripts/dev-setup.sh` installs Node, pnpm,
Postgres and Redis, creates `.env` from `.default.env`, applies migrations, and seeds
dummy data. Then run `pnpm dev`. `AGENTS.md` covers the details, the seeded accounts and
how to test each feature.

`pnpm seed:dev` seeds demo accounts (all with the password `cubedesk`, e.g.
`agent@cubedesk.test`, an admin), friends, notifications, 1v1 history, leaderboards,
reports, custom trainers and, when `scripts/trainer-catalog.csv` exists, the trainer
catalog. To add sample history to an account you signed up locally instead, run:

```sh
pnpm seed:dev --username YOUR_LOCAL_USERNAME
```

That adds roughly 4,000 solves over 90 days across 3x3, 2x2, 4x4, and Pyraminx, with
improving times, rest days, DNFs, and +2 penalties, in four `[Dev seed]` sessions.

Both modes preserve existing data: stable IDs make reruns skip records already inserted,
and they don't refresh dates. To start over, run
`pnpm exec prisma migrate reset --force && pnpm seed:dev`.

The seed is manual; it is not wired into app startup, builds, or migrations. It refuses
remote hosts, production/unset environments, alternate database secret settings, and URL
query parameters. Only `localhost`, `127.0.0.1`, or `::1` with a database named
`cubedesk`, `cubedesk_dev`, or `cubedesk_test` are accepted, and `NODE_ENV` must be
`development`. Use an actual local PostgreSQL instance; a localhost tunnel to a remote
database cannot be distinguished from a local database by its URL.

## Infrastructure

### Production builds and Sentry

`pnpm build` uses Vite to build the browser assets into `dist/` and the Node server
into `build/server/`. The server build bundles all of its dependencies, so the
Docker image only contains Node and `build/server/`. `pnpm start` runs the compiled
server; `pnpm dev` keeps the existing development server and Vite hot reload.

Production runs on ECS Fargate. Pushing to `main` builds on a CodeBuild-hosted
GitHub Actions runner, uploads `dist/` and `public/` to S3, runs migrations, and
deploys a new task definition revision with only the image changed. Runtime
environment variables (`ENV`, `DATABASE_URL`, `REDIS_URL`, ...) live in the ECS task
definition, not in the repo or the image.

Deployments use the GitHub Actions `SENTRY_AUTH_TOKEN` secret to upload source maps
to the `frontend` and `backend` projects in the `cubedesk` Sentry organization.
Both builds and the runtime use the same `RELEASE_NAME`. The token needs permission
to upload source maps and manage releases for both projects. It is only available
to the build step and never reaches the image.

Local builds without `SENTRY_AUTH_TOKEN` skip uploading. Maps are generated with
embedded source content and deleted after uploading, before publishing assets to the
CDN or packaging the server. Upload failures stop deployment.
`SENTRY_DSN` is the separate runtime setting that enables backend error reporting.

The visual below should give you a decent understanding of the infrastructure behind CubeDesk. For a full breakdown, checkout the [Infrasture page on the Wiki](https://github.com/kash/cubedesk/wiki/Infrastructure).

![CubeDesk's infrastructure](https://cdn.cubedesk.io/docs/infrastructure.jpg)

## License

This project is licensed under the GPL license (version 3 or later). This means that this library is free to use, although you must publish any code that uses it (e.g. also put it on GitHub). See the [full license](https://github.com/kash/cubedesk/blob/staging/LICENSE.md) for exact details.

I've selected this license in order to encourage the cubing community to work on software in a way so that everyone can contribute and extend each other's work.
