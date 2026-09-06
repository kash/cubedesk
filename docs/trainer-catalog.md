# Trainer catalog

Built-in trainer algorithms are managed at `/admin/trainer`. Only accounts with
the existing admin flag can import or edit the catalog. Every published algorithm
is available to all signed-in users; no paid restriction applies.

## First deployment

1. Deploy the additive `add_trainer_catalog` migration before the new application.
   The existing deployment workflow runs `prisma migrate deploy` before switching
   the application. For local schema development, use `pnpm prisma`.
2. Open **Admin → Trainer → Upload CSV**. The upload opens a dialog.
3. Select `trainer-data.csv`, preview the changes, then confirm the import.
4. Verify **740 records / 740 published** and **PostgreSQL** on the catalog page.
   The two exported cases missing solutions and scrambles are warnings, not errors;
   they remain published and their training controls remain enabled.
5. Open the trainer again to fetch the new catalog. An ongoing training session
   is not refreshed underneath the timer.

Until the first successful import, the server reads `cd:trainerdata#` from Redis.
It never writes that key or contacts Airtable. The old code set no TTL on this
key: 24 hours was a refresh interval, not an expiration. Redis eviction, a restart
without persistence, or old app instances refreshing it can still remove or
overwrite the cached catalog. A missing cache shows an empty trainer; a cache
connection/format error shows a retryable error. Admin import remains available.

The first import saves every algorithm and initializes the catalog in one
transaction. Failed imports do not switch sources. After initialization, even an
empty published catalog or a PostgreSQL failure never reactivates Redis fallback.
Remove the transitional Redis reader in a follow-up once production is verified.

The application and deployment workflows no longer reference
`AIRTABLE_BEARER_TOKEN`. The old external secret can be removed separately after
the rollout is complete. Do not clear shared Redis or reset catalog initialization
to roll back an individual algorithm edit; correct it in the admin editor or CSV.

## CSV format and updates

- UTF-8 CSV, optionally with a BOM; 5 MiB maximum and 10,000 records maximum.
- Quoted commas, escaped quotes, multiline fields, LF, and CRLF are supported.
- Required headers: `id`, `name`, `cube_type`, `algo_type`. Header order is free.
- Optional headers: `active`, `solution`, `scrambles`, `group_name`, `img_link`,
  `colors`, `rotate`. The exported `pro_only` and `algo_type_id` columns are ignored.
- Omitted optional fields default to empty strings, `active=true`, and `rotate=0`.
  These defaults also apply to updated rows; use a full export when preserving all
  fields. Supplied blank text fields explicitly clear their previous values.
- `active`: `checked`, `true`, or `1` means published; blank, `unchecked`, `false`,
  or `0` means unpublished. Rotation is an integer; `0.0` is accepted.
- IDs use letters, numbers, underscores, and hyphens. Existing IDs are immutable
  in the editor because favorites, overrides, and solve history refer to them.
- IDs are merged: matching records update, new records are added, and records
  missing from a file remain unchanged. Reimporting the same content is a no-op.
- Missing solutions/scrambles produce warnings. Structural errors, duplicate IDs,
  invalid values, or unsupported headers block the whole import.
- Every confirmation revalidates the file and checks its preview against the
  current catalog revision. If another edit happened, preview again.

Use **New algorithm** or **Edit** after initialization for individual changes.
The editor supports cube colors, rotation, and a live cube preview. Unpublish an
algorithm to remove it from the public catalog while retaining its stable ID;
there is no permanent-delete action.

## Checks

```sh
pnpm exec jest server/models/trainer/__tests__ --runInBand
TRAINER_DB_TESTS=1 pnpm exec jest server/models/trainer/__tests__/catalog.integration.test.ts --runInBand
pnpm exec tsc --noEmit --incremental false
pnpm run build
```

Integration tests use `DATABASE_URL` from `.env`, create a uniquely named isolated
PostgreSQL schema, and remove it afterward. They do not import into the application
catalog. They cover full import, idempotency, stale previews, merges, and rollback.
