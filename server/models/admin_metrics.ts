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

// Keep the exact production SQL available for EXPLAIN and integration tests.
export function adminMetricsQueries(cutoff: Date) {
	const {start} = metricsWindow(cutoff);
	return {
		// The old created_at predicate required visiting the heap for every solve:
		// neither existing index covers both created_at and bulk. Count using the
		// narrow bulk index, then subtract the small indexed range past the cutoff.
		// Both counts share one statement snapshot, including concurrent inserts.
		solveTotals: Prisma.sql`SELECT totals.registered - excluded.registered AS registered,
			totals.imported - excluded.imported AS imported
			FROM (SELECT count(*) FILTER (WHERE NOT bulk) AS registered,
				count(*) FILTER (WHERE bulk) AS imported FROM solve) totals
			CROSS JOIN (SELECT count(*) FILTER (WHERE NOT bulk) AS registered,
				count(*) FILTER (WHERE bulk) AS imported FROM solve WHERE created_at >= ${cutoff}) excluded`,
		demoTotal: Prisma.sql`SELECT count(*) AS count FROM demo_solve WHERE created_at < ${cutoff}`,
		accountTotal: Prisma.sql`SELECT count(*) AS count FROM user_account WHERE created_at < ${cutoff}`,
		signupDays: Prisma.sql`SELECT created_at::date::text AS date, count(*) AS count
			FROM user_account WHERE created_at >= ${start} AND created_at < ${cutoff}
			GROUP BY 1 ORDER BY 1`,
	};
}

export function adminMetricsRangeQueries(start: Date, end: Date) {
	return {
		solveTotals: Prisma.sql`SELECT count(*) FILTER (WHERE NOT bulk) AS registered,
			count(*) FILTER (WHERE bulk) AS imported FROM solve
			WHERE created_at >= ${start} AND created_at < ${end}`,
		demoTotal: Prisma.sql`SELECT count(*) AS count FROM demo_solve
			WHERE created_at >= ${start} AND created_at < ${end}`,
		accountTotal: Prisma.sql`SELECT count(*) AS count FROM user_account
			WHERE created_at >= ${start} AND created_at < ${end}`,
		// Reduce solves to user/puzzle/activity groups once. The same rows supply
		// volume, DAU/WAU/MAU and the breakdown, without three overlapping scans
		// or DISTINCT sorts over 90 days of raw solves. Imports need only one group.
		solves: Prisma.sql`SELECT bulk,
			CASE WHEN NOT bulk THEN user_id END AS "userId",
			CASE WHEN NOT bulk THEN cube_type END AS "cubeType",
			CASE WHEN bulk THEN NULL
				WHEN match_id IS NOT NULL THEN '1v1'
				WHEN NULLIF(trainer_name, '') IS NOT NULL THEN 'trainer'
				WHEN from_timer THEN 'timer' ELSE 'other' END AS category,
			count(*) AS solves
			FROM solve WHERE created_at >= ${start} AND created_at < ${end}
			GROUP BY 1, 2, 3, 4`,
		demos: Prisma.sql`SELECT NULLIF(demo_session_id, '') AS session, count(*) AS solves
			FROM demo_solve WHERE created_at >= ${start} AND created_at < ${end}
			GROUP BY 1`,
	};
}

function count(value: bigint | number): number {
	const result = Number(value);
	if (!Number.isSafeInteger(result)) throw new Error('Metrics count exceeds safe integer range');
	return result;
}

function isQueryTimeout(error: unknown): boolean {
	if (!(error instanceof Error)) return false;
	return (
		/statement timeout|transaction[\s\S]*expired/i.test(error.message) ||
		isQueryTimeout(error.cause)
	);
}

type SolveGroup = {
	bulk: boolean;
	userId: string | null;
	cubeType: string | null;
	category: SolveCategory | null;
	solves: bigint;
};

type Totals = {registered: bigint; imported: bigint; count: bigint};

/** Rebuildable solely from existing records. No cache access or database writes. */
export async function buildAdminMetrics(
	cutoff = new Date(),
	db = getPrisma(),
	assertActive: () => void = () => {},
): Promise<AdminMetricsSnapshot> {
	const queries = adminMetricsQueries(cutoff);
	async function query<T>(name: string, sql: Prisma.Sql): Promise<T[]> {
		assertActive();
		try {
			// One read-only query at a time, with no parallel workers competing with
			// application traffic. Settings never escape this pooled transaction.
			return await db.$transaction(
				async (tx) => {
					await tx.$executeRaw`SET TRANSACTION READ ONLY`;
					await tx.$executeRaw`SET LOCAL statement_timeout = '30s'`;
					await tx.$executeRaw`SET LOCAL max_parallel_workers_per_gather = 0`;
					await tx.$executeRaw`SET LOCAL TIME ZONE 'UTC'`;
					return tx.$queryRaw<T[]>(sql);
				},
				{timeout: 35_000, maxWait: 5_000},
			);
		} catch (error) {
			throw new Error(`Admin metrics query ${name} failed: ${String(error)}`, {cause: error});
		}
	}

	async function* rangeQuery<T>(
		name: keyof ReturnType<typeof adminMetricsRangeQueries>,
		start: Date,
		end: Date,
	): AsyncGenerator<T[]> {
		if (end <= start) return;
		let rows: T[];
		try {
			rows = await query<T>(
				`${name} [${start.toISOString()}, ${end.toISOString()})`,
				adminMetricsRangeQueries(start, end)[name],
			);
		} catch (error) {
			// A busy day/import must not make every refresh fail at the same point.
			// Retry disjoint, smaller indexed ranges, never OFFSET or concurrent scans.
			const middle = new Date(Math.floor((start.getTime() + end.getTime()) / 2));
			if (!isQueryTimeout(error) || middle <= start || middle >= end) throw error;
			yield* rangeQuery<T>(name, start, middle);
			yield* rangeQuery<T>(name, middle, end);
			return;
		}
		yield rows;
	}

	async function total(name: 'solveTotals' | 'demoTotal' | 'accountTotal'): Promise<Totals> {
		try {
			const [result] = await query<Totals>(name, queries[name]);
			return result;
		} catch (error) {
			if (!isQueryTimeout(error)) throw error;
		}
		// Exact lifetime counts still require O(N) index entries. If even that
		// exceeds the deadline, walk date ranges rather than retrying the same
		// unbounded count forever. MIN uses the existing date indexes on solves.
		const table = {solveTotals: 'solve', demoTotal: 'demo_solve', accountTotal: 'user_account'}[
			name
		];
		const [{first}] = await query<{first: Date | null}>(
			`${name} first date`,
			Prisma.sql`SELECT min(created_at) AS first FROM ${Prisma.raw(table)} WHERE created_at < ${cutoff}`,
		);
		const result: Totals = {registered: BigInt(0), imported: BigInt(0), count: BigInt(0)};
		if (first) {
			for (let from = first.getTime(); from < cutoff.getTime(); from += 7 * DAY_MS) {
				const end = new Date(Math.min(from + 7 * DAY_MS, cutoff.getTime()));
				for await (const rows of rangeQuery<Totals>(name, new Date(from), end)) {
					for (const row of rows) {
						result.registered += row.registered ?? BigInt(0);
						result.imported += row.imported ?? BigInt(0);
						result.count += row.count ?? BigInt(0);
					}
				}
			}
		}
		return result;
	}

	const solves = await total('solveTotals');
	const demo = await total('demoTotal');
	const accounts = await total('accountTotal');
	const {start, week, month} = metricsWindow(cutoff);
	const weeklyUsers = new Set<string>();
	const monthlyUsers = new Set<string>();
	const breakdown = new Map<string, AdminMetricsSnapshot['breakdown'][number]>();
	const days: AdminMetricsDay[] = [];
	for (let i = 0; i < METRICS_HISTORY_DAYS; i++) {
		const from = new Date(start.getTime() + i * DAY_MS);
		const end = new Date(Math.min(from.getTime() + DAY_MS, cutoff.getTime()));
		const day: AdminMetricsDay = {
			date: from.toISOString().slice(0, 10),
			solves: 0,
			imports: 0,
			activeUsers: 0,
			demoSolves: 0,
			demoSessions: 0,
			signups: 0,
		};
		// Keep only one day's identities, plus distinct users for the rolling
		// windows. Dedupe across split batches, puzzles, and activities as well.
		const dailyUsers = new Set<string>();
		for await (const rows of rangeQuery<SolveGroup>('solves', from, end)) {
			for (const row of rows) {
				if (row.bulk) {
					day.imports = count(day.imports + count(row.solves));
					continue;
				}
				day.solves = count(day.solves + count(row.solves));
				if (row.userId !== null) {
					dailyUsers.add(row.userId);
					if (from >= week) weeklyUsers.add(row.userId);
					if (from >= month) monthlyUsers.add(row.userId);
				}
				const category = row.category!;
				const key = JSON.stringify([row.cubeType, category]);
				const group = breakdown.get(key) ?? {cubeType: row.cubeType, category, solves: 0};
				group.solves = count(group.solves + count(row.solves));
				breakdown.set(key, group);
			}
		}
		day.activeUsers = dailyUsers.size;
		const demoSessions = new Set<string>();
		for await (const rows of rangeQuery<{session: string | null; solves: bigint}>(
			'demos',
			from,
			end,
		)) {
			for (const row of rows) {
				day.demoSolves = count(day.demoSolves + count(row.solves));
				if (row.session !== null) demoSessions.add(row.session);
			}
		}
		day.demoSessions = demoSessions.size;
		days.push(day);
	}
	const signupDays = await query<{date: string; count: bigint}>('signupDays', queries.signupDays);
	const daysByDate = new Map(days.map((day) => [day.date, day]));
	for (const row of signupDays) daysByDate.get(row.date)!.signups = count(row.count);
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
			daily: days[days.length - 1].activeUsers,
			weekly: weeklyUsers.size,
			monthly: monthlyUsers.size,
		},
		days,
		breakdown: [...breakdown.values()].sort(
			(a, b) =>
				b.solves - a.solves ||
				(a.cubeType === b.cubeType
					? 0
					: a.cubeType === null
						? 1
						: b.cubeType === null
							? -1
							: a.cubeType.localeCompare(b.cubeType)) ||
				a.category.localeCompare(b.category),
		),
	};
}
