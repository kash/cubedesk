import type {AdminMetricsDay, AdminMetricsSnapshot, SolveCategory} from '@/types/admin-metrics';
import {Prisma} from '@/generated/prisma/client';
import {getPrisma} from '@/server/database';

const DAY_MS = 86_400_000;
export const METRICS_HISTORY_DAYS = 90;

export function metricsWindow(cutoff: Date) {
	const today = new Date(cutoff);
	today.setUTCHours(0, 0, 0, 0);
	return {
		today,
		week: new Date(today.getTime() - 6 * DAY_MS),
		month: new Date(today.getTime() - 29 * DAY_MS),
		start: new Date(today.getTime() - (METRICS_HISTORY_DAYS - 1) * DAY_MS),
	};
}

// Kept separate so the exact production queries can also be EXPLAINed locally.
export function adminMetricsQueries(cutoff: Date) {
	const {today, week, month, start} = metricsWindow(cutoff);
	return {
		solveTotals: Prisma.sql`SELECT count(*) FILTER (WHERE NOT bulk) AS registered,
			count(*) FILTER (WHERE bulk) AS imported FROM solve WHERE created_at < ${cutoff}`,
		demoTotal: Prisma.sql`SELECT count(*) AS count FROM demo_solve WHERE created_at < ${cutoff}`,
		accountTotal: Prisma.sql`SELECT count(*) AS count FROM user_account WHERE created_at < ${cutoff}`,
		solveDays: Prisma.sql`SELECT to_char(created_at, 'YYYY-MM-DD') AS date,
			count(*) FILTER (WHERE NOT bulk) AS solves, count(*) FILTER (WHERE bulk) AS imports,
			count(DISTINCT user_id) FILTER (WHERE NOT bulk) AS active
			FROM solve WHERE created_at >= ${start} AND created_at < ${cutoff}
			GROUP BY 1 ORDER BY 1`,
		demoDays: Prisma.sql`SELECT to_char(created_at, 'YYYY-MM-DD') AS date,
			count(*) AS solves, count(DISTINCT NULLIF(demo_session_id, '')) AS sessions
			FROM demo_solve WHERE created_at >= ${start} AND created_at < ${cutoff}
			GROUP BY 1 ORDER BY 1`,
		signupDays: Prisma.sql`SELECT to_char(created_at, 'YYYY-MM-DD') AS date, count(*) AS count
			FROM user_account WHERE created_at >= ${start} AND created_at < ${cutoff}
			GROUP BY 1 ORDER BY 1`,
		activeUsers: Prisma.sql`SELECT count(DISTINCT user_id) FILTER (WHERE created_at >= ${today}) AS daily,
			count(DISTINCT user_id) FILTER (WHERE created_at >= ${week}) AS weekly,
			count(DISTINCT user_id) AS monthly
			FROM solve WHERE NOT bulk AND created_at >= ${month} AND created_at < ${cutoff}`,
		breakdown: Prisma.sql`SELECT cube_type AS "cubeType", CASE
			WHEN match_id IS NOT NULL THEN '1v1'
			WHEN NULLIF(trainer_name, '') IS NOT NULL THEN 'trainer'
			WHEN from_timer THEN 'timer' ELSE 'other' END AS category, count(*) AS solves
			FROM solve WHERE NOT bulk AND created_at >= ${start} AND created_at < ${cutoff}
			GROUP BY 1, 2 ORDER BY 3 DESC, 1, 2`,
	};
}

function count(value: bigint): number {
	const result = Number(value);
	if (!Number.isSafeInteger(result)) throw new Error('Metrics count exceeds safe integer range');
	return result;
}

/** Rebuildable solely from existing records. No cache access or database writes. */
export async function buildAdminMetrics(
	cutoff = new Date(),
	db = getPrisma(),
	assertActive: () => void = () => {},
): Promise<AdminMetricsSnapshot> {
	const queries = adminMetricsQueries(cutoff);
	async function query<T>(sql: Prisma.Sql): Promise<T[]> {
		assertActive();
		// Short, read-only transactions bound each query without changing pooled connection settings.
		return db.$transaction(
			async (tx) => {
				await tx.$executeRaw`SET TRANSACTION READ ONLY`;
				await tx.$executeRaw`SET LOCAL statement_timeout = '30s'`;
				await tx.$executeRaw`SET LOCAL max_parallel_workers_per_gather = 0`;
				await tx.$executeRaw`SET LOCAL TIME ZONE 'UTC'`;
				return tx.$queryRaw<T[]>(sql);
			},
			{timeout: 35_000, maxWait: 5_000},
		);
	}
	// Sequential by design: one analytics query at a time, including lifetime scans.
	const [solves] = await query<{registered: bigint; imported: bigint}>(queries.solveTotals);
	const [demo] = await query<{count: bigint}>(queries.demoTotal);
	const [accounts] = await query<{count: bigint}>(queries.accountTotal);
	const solveDays = await query<{date: string; solves: bigint; imports: bigint; active: bigint}>(
		queries.solveDays,
	);
	const demoDays = await query<{date: string; solves: bigint; sessions: bigint}>(
		queries.demoDays,
	);
	const signupDays = await query<{date: string; count: bigint}>(queries.signupDays);
	const [active] = await query<{daily: bigint; weekly: bigint; monthly: bigint}>(
		queries.activeUsers,
	);
	const breakdown = await query<{
		cubeType: string | null;
		category: SolveCategory;
		solves: bigint;
	}>(queries.breakdown);
	const days = new Map<string, AdminMetricsDay>();
	const {start} = metricsWindow(cutoff);
	for (let i = 0; i < METRICS_HISTORY_DAYS; i++) {
		const date = new Date(start.getTime() + i * DAY_MS).toISOString().slice(0, 10);
		days.set(date, {
			date,
			solves: 0,
			imports: 0,
			activeUsers: 0,
			demoSolves: 0,
			demoSessions: 0,
			signups: 0,
		});
	}
	for (const row of solveDays) {
		Object.assign(days.get(row.date)!, {
			solves: count(row.solves),
			imports: count(row.imports),
			activeUsers: count(row.active),
		});
	}
	for (const row of demoDays) {
		Object.assign(days.get(row.date)!, {
			demoSolves: count(row.solves),
			demoSessions: count(row.sessions),
		});
	}
	for (const row of signupDays) days.get(row.date)!.signups = count(row.count);
	assertActive();
	return {
		version: 1,
		cutoff: cutoff.toISOString(),
		completedAt: new Date().toISOString(),
		totals: {
			registeredSolves: count(solves.registered),
			importedSolves: count(solves.imported),
			demoSolves: count(demo.count),
			accounts: count(accounts.count),
		},
		activeUsers: {
			daily: count(active.daily),
			weekly: count(active.weekly),
			monthly: count(active.monthly),
		},
		days: [...days.values()],
		breakdown: breakdown.map((row) => ({...row, solves: count(row.solves)})),
	};
}
