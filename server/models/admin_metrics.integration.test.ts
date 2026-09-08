import 'dotenv/config';
import {PrismaClient} from '@/generated/prisma/client';
import {buildAdminMetrics} from '@/server/models/admin_metrics';
import {PrismaPg} from '@prisma/adapter-pg';

// Opt in against local PostgreSQL; fixtures live in an isolated, disposable schema.
const suite = process.env.METRICS_DB_TESTS === '1' ? describe : describe.skip;
suite('admin metrics PostgreSQL integration', () => {
	const schema = `admin_metrics_test_${process.pid}_${Date.now()}`;
	const cutoff = new Date('2026-09-07T12:00:00Z');
	let setupDb: PrismaClient;
	let db: PrismaClient;
	beforeAll(async () => {
		const connectionString = process.env.DATABASE_URL!;
		if (!['localhost', '127.0.0.1', '[::1]'].includes(new URL(connectionString).hostname)) {
			throw new Error('Metrics integration tests require local PostgreSQL');
		}
		setupDb = new PrismaClient({adapter: new PrismaPg({connectionString})});
		await setupDb.$executeRawUnsafe(`CREATE SCHEMA "${schema}"`);
		db = new PrismaClient({
			adapter: new PrismaPg(
				{connectionString, options: `-c search_path=${schema} -c timezone=UTC`},
				{schema},
			),
		});
		await db.$executeRawUnsafe(`CREATE TABLE solve (
			id text PRIMARY KEY, user_id text NOT NULL, created_at timestamp(3) NOT NULL,
			bulk boolean NOT NULL DEFAULT false, cube_type text, match_id text,
			trainer_name text, from_timer boolean NOT NULL DEFAULT true
		)`);
		await db.$executeRawUnsafe(`CREATE TABLE import_attempt (
			id text PRIMARY KEY, status text NOT NULL, started_at timestamp(3) NOT NULL, completed_at timestamp(3)
		)`);
		await db.$executeRawUnsafe('CREATE INDEX ON import_attempt (started_at)');
		await db.$executeRawUnsafe('CREATE INDEX ON solve (created_at)');
		await db.$executeRawUnsafe('CREATE INDEX ON solve (bulk)');
		await db.$executeRawUnsafe(`CREATE TABLE demo_solve (
			id text PRIMARY KEY, created_at timestamp(3) NOT NULL, demo_session_id text NOT NULL
		)`);
		await db.$executeRawUnsafe('CREATE INDEX ON demo_solve (created_at)');
		await db.$executeRawUnsafe(
			'CREATE TABLE user_account (id text PRIMARY KEY, created_at timestamp(3) NOT NULL)',
		);
		// Boundaries: before history, first history day, just before MAU/WAU,
		// first MAU/WAU day, yesterday, today, exact cutoff and after cutoff.
		await db.$executeRawUnsafe(`INSERT INTO solve
			SELECT i::text, 'user-' || (i % 4)::text, created_at,
				i % 5 = 0, CASE WHEN i % 7 = 0 THEN NULL WHEN i % 3 = 0 THEN '222' ELSE '333' END,
				CASE WHEN i % 11 = 0 THEN 'match' END,
				CASE WHEN i % 3 = 0 THEN 'OLL' ELSE '' END,
				i % 2 = 0
			FROM generate_series(1, 300) i CROSS JOIN LATERAL (
				SELECT (ARRAY[
					'2020-01-01', '2026-06-09 23:59:59.999', '2026-06-10',
					'2026-08-08 23:59:59.999', '2026-08-09',
					'2026-08-31 23:59:59.999', '2026-09-01',
					'2026-09-06 23:59:59.999', '2026-09-07',
					'2026-09-07 11:59:59.999', '2026-09-07 12:00', '2026-09-08'
				]::timestamp[])[1 + (i % 12)] AS created_at
			) dates`);
		await db.$executeRawUnsafe(`INSERT INTO demo_solve SELECT id, created_at,
			CASE WHEN id::int % 3 = 0 THEN '' ELSE 'session-' || (id::int % 5)::text END FROM solve`);
		await db.$executeRawUnsafe('INSERT INTO user_account SELECT id, created_at FROM solve');
	}, 30000);

	afterAll(async () => {
		await db?.$disconnect();
		if (setupDb) {
			await setupDb.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`);
			await setupDb.$disconnect();
		}
	});

	it('matches the original exact SQL for totals, daily activity, rolling users and categories', async () => {
		const snapshot = await buildAdminMetrics(cutoff, db);
		const [totals] = await db.$queryRaw<
			{
				registered: bigint;
				imported: bigint;
				demos: bigint;
				accounts: bigint;
			}[]
		>`SELECT count(*) FILTER (WHERE NOT bulk) AS registered,
			count(*) FILTER (WHERE bulk) AS imported,
			(SELECT count(*) FROM demo_solve WHERE created_at < ${cutoff}) AS demos,
			(SELECT count(*) FROM user_account WHERE created_at < ${cutoff}) AS accounts
			FROM solve WHERE created_at < ${cutoff}`;
		expect(snapshot.totals).toEqual({
			registeredSolves: Number(totals.registered),
			importedSolves: Number(totals.imported),
			demoSolves: Number(totals.demos),
			accounts: Number(totals.accounts),
		});
		const [active] = await db.$queryRaw<{daily: bigint; weekly: bigint; monthly: bigint}[]>`
			SELECT count(DISTINCT user_id) FILTER (WHERE created_at >= timestamp '2026-09-07') AS daily,
			count(DISTINCT user_id) FILTER (WHERE created_at >= timestamp '2026-09-01') AS weekly,
			count(DISTINCT user_id) AS monthly FROM solve WHERE NOT bulk
			AND created_at >= timestamp '2026-08-09' AND created_at < ${cutoff}`;
		expect(snapshot.activeUsers).toEqual({
			daily: Number(active.daily),
			weekly: Number(active.weekly),
			monthly: Number(active.monthly),
		});
		const dailySolves = await db.$queryRaw<
			{date: string; solves: bigint; imports: bigint; active: bigint}[]
		>`
			SELECT to_char(created_at, 'YYYY-MM-DD') AS date,
			count(*) FILTER (WHERE NOT bulk) AS solves, count(*) FILTER (WHERE bulk) AS imports,
			count(DISTINCT user_id) FILTER (WHERE NOT bulk) AS active FROM solve
			WHERE created_at >= timestamp '2026-06-10' AND created_at < ${cutoff} GROUP BY 1`;
		const dailyDemos = await db.$queryRaw<{date: string; solves: bigint; sessions: bigint}[]>`
			SELECT to_char(created_at, 'YYYY-MM-DD') AS date, count(*) AS solves,
			count(DISTINCT NULLIF(demo_session_id, '')) AS sessions FROM demo_solve
			WHERE created_at >= timestamp '2026-06-10' AND created_at < ${cutoff} GROUP BY 1`;
		const signups = await db.$queryRaw<{date: string; count: bigint}[]>`
			SELECT to_char(created_at, 'YYYY-MM-DD') AS date, count(*) AS count FROM user_account
			WHERE created_at >= timestamp '2026-06-10' AND created_at < ${cutoff} GROUP BY 1`;
		for (const day of snapshot.days) {
			const solves = dailySolves.find((row) => row.date === day.date);
			const demos = dailyDemos.find((row) => row.date === day.date);
			expect(day).toEqual({
				date: day.date,
				solves: Number(solves?.solves ?? 0),
				imports: Number(solves?.imports ?? 0),
				importsSucceeded: 0,
				importsFailed: 0,
				importsPending: 0,
				activeUsers: Number(solves?.active ?? 0),
				demoSolves: Number(demos?.solves ?? 0),
				demoSessions: Number(demos?.sessions ?? 0),
				signups: Number(signups.find((row) => row.date === day.date)?.count ?? 0),
			});
		}
		const breakdown = await db.$queryRaw<
			{cubeType: string | null; category: string; solves: bigint}[]
		>`
			SELECT cube_type AS "cubeType", CASE WHEN match_id IS NOT NULL THEN '1v1'
			WHEN NULLIF(trainer_name, '') IS NOT NULL THEN 'trainer'
			WHEN from_timer THEN 'timer' ELSE 'other' END AS category, count(*) AS solves
			FROM solve WHERE NOT bulk AND created_at >= timestamp '2026-06-10'
			AND created_at < ${cutoff} GROUP BY 1, 2`;
		expect(snapshot.breakdown).toHaveLength(breakdown.length);
		expect(snapshot.breakdown).toEqual(
			expect.arrayContaining(breakdown.map((row) => ({...row, solves: Number(row.solves)}))),
		);
	}, 30000);

	it('handles midnight cutoffs and reflects deletions and edits on the next refresh', async () => {
		await db.$executeRaw`DELETE FROM solve WHERE created_at < timestamp '2026-06-10'`;
		await db.$executeRaw`UPDATE solve SET bulk = true WHERE user_id = 'user-1'`;
		const midnight = new Date('2026-09-07T00:00:00Z');
		const snapshot = await buildAdminMetrics(midnight, db);
		expect(snapshot.days[89]).toMatchObject({
			solves: 0,
			imports: 0,
			activeUsers: 0,
			demoSolves: 0,
			demoSessions: 0,
			signups: 0,
		});
		expect(snapshot.activeUsers.daily).toBe(0);
		const [totals] = await db.$queryRaw<{registered: bigint; imported: bigint}[]>`
			SELECT count(*) FILTER (WHERE NOT bulk) AS registered, count(*) FILTER (WHERE bulk) AS imported
			FROM solve WHERE created_at < ${midnight}`;
		expect(snapshot.totals.registeredSolves).toBe(Number(totals.registered));
		expect(snapshot.totals.importedSolves).toBe(Number(totals.imported));
	}, 30000);
	it('uses UTC start dates, excludes the cutoff, and leaves unfinished outcomes pending', async () => {
		await db.$executeRawUnsafe(`INSERT INTO import_attempt VALUES
			('success', 'succeeded', '2026-09-06 23:59:59.999', '2026-09-07 01:00'),
			('failed', 'failed', '2026-09-07 00:00', '2026-09-07 00:01'),
			('pending', 'pending', '2026-09-07 02:00', NULL),
			('later-success', 'succeeded', '2026-09-07 03:00', '2026-09-07 12:01'),
			('cutoff', 'failed', '2026-09-07 12:00', '2026-09-07 12:00'),
			('before-history', 'succeeded', '2026-06-09 23:59', '2026-06-10 00:01')`);
		const snapshot = await buildAdminMetrics(cutoff, db);
		expect(snapshot.days[88]).toMatchObject({
			importsSucceeded: 1,
			importsFailed: 0,
			importsPending: 0,
		});
		expect(snapshot.days[89]).toMatchObject({
			importsSucceeded: 0,
			importsFailed: 1,
			importsPending: 2,
		});
		expect(snapshot.days.slice(-7).reduce((sum, day) => sum + day.importsSucceeded, 0)).toBe(1);
	}, 30000);
});
