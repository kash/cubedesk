import {Prisma} from '@/generated/prisma/client';
import {getPrisma} from '@/server/database';
import {buildAdminMetrics} from '@/server/models/admin_metrics';

const cutoff = new Date('2026-09-07T12:00:00Z');
const today = new Date('2026-09-07T00:00:00Z');
const zero = BigInt(0);

function database(run: (sql: Prisma.Sql) => unknown) {
	const query = jest.fn(run);
	const settings = jest.fn();
	const transaction = jest.fn(async (callback, _options: {timeout: number; maxWait: number}) =>
		callback({$executeRaw: settings, $queryRaw: query}),
	);
	return {
		db: {$transaction: transaction} as unknown as ReturnType<typeof getPrisma>,
		query,
		settings,
		transaction,
	};
}

function empty(sql: Prisma.Sql) {
	if (sql.text.includes('AS registered')) return [{registered: zero, imported: zero}];
	if (sql.text.startsWith('SELECT count(*) AS count')) return [{count: zero}];
	return [];
}

it('keeps empty UTC days and runs only one bounded, read-only query at a time', async () => {
	let running = false;
	const {db, settings, transaction} = database(async (sql) => {
		expect(running).toBe(false);
		running = true;
		await Promise.resolve();
		running = false;
		return empty(sql);
	});
	const snapshot = await buildAdminMetrics(cutoff, db);
	expect(snapshot.days).toHaveLength(90);
	expect(snapshot.days[0].date).toBe('2026-06-10');
	expect(snapshot.days[89]).toEqual({
		date: '2026-09-07',
		solves: 0,
		imports: 0,
		importsSucceeded: 0,
		importsFailed: 0,
		importsPending: 0,
		activeUsers: 0,
		demoSolves: 0,
		demoSessions: 0,
		signups: 0,
	});
	expect(snapshot.activeUsers).toEqual({daily: 0, weekly: 0, monthly: 0});
	expect(snapshot.breakdown).toEqual([]);
	for (const [, options] of transaction.mock.calls) {
		expect(options).toEqual({timeout: 35000, maxWait: 5000});
	}
	expect(settings.mock.calls.map(([sql]) => sql[0])).toContain('SET TRANSACTION READ ONLY');
	expect(settings.mock.calls.map(([sql]) => sql[0])).toContain(
		'SET LOCAL max_parallel_workers_per_gather = 0',
	);
});

it('splits timeouts into disjoint ranges and deduplicates users/sessions across the split', async () => {
	const ranges: [Date, Date][] = [];
	const {db} = database((sql) => {
		if (!sql.text.includes('GROUP BY')) return empty(sql);
		const [start, end] = sql.values as Date[];
		if (start < today) return [];
		if (sql.text.startsWith('SELECT bulk,')) {
			ranges.push([start, end]);
			if (end.getTime() - start.getTime() > 6 * 60 * 60 * 1000) {
				throw new Error('canceling statement due to statement timeout');
			}
			return [
				{
					bulk: false,
					userId: 'same-user',
					cubeType: '333',
					category: 'timer',
					solves: BigInt(2),
				},
				{
					bulk: false,
					userId: 'same-user',
					cubeType: '222',
					category: 'trainer',
					solves: BigInt(1),
				},
				{bulk: true, userId: null, cubeType: null, category: null, solves: BigInt(5)},
			];
		}
		if (sql.text.includes('demo_session_id')) {
			if (end.getTime() - start.getTime() > 6 * 60 * 60 * 1000) {
				throw new Error('canceling statement due to statement timeout');
			}
			return [
				{session: 'same-session', solves: BigInt(2)},
				{session: null, solves: BigInt(1)},
			];
		}
		return [];
	});
	const snapshot = await buildAdminMetrics(cutoff, db);
	expect(ranges).toEqual([
		[today, cutoff],
		[today, new Date('2026-09-07T06:00:00Z')],
		[new Date('2026-09-07T06:00:00Z'), cutoff],
	]);
	expect(snapshot.days[89]).toMatchObject({
		solves: 6,
		imports: 10,
		activeUsers: 1,
		demoSolves: 6,
		demoSessions: 1,
	});
	expect(snapshot.activeUsers).toEqual({daily: 1, weekly: 1, monthly: 1});
	expect(snapshot.breakdown).toEqual([
		{cubeType: '333', category: 'timer', solves: 4},
		{cubeType: '222', category: 'trainer', solves: 2},
	]);
});

it('falls back from a lifetime timeout to exact indexed date ranges', async () => {
	const ranges: [Date, Date][] = [];
	const first = new Date('2026-08-28T00:00:00Z');
	const {db} = database((sql) => {
		if (sql.text.includes('CROSS JOIN'))
			throw new Error('canceling statement due to statement timeout');
		if (sql.text.includes('min(created_at)')) return [{first}];
		if (sql.text.includes('AS registered')) {
			ranges.push(sql.values as [Date, Date]);
			return [{registered: BigInt(10), imported: BigInt(5)}];
		}
		return empty(sql);
	});
	const snapshot = await buildAdminMetrics(cutoff, db);
	expect(snapshot.totals).toMatchObject({registeredSolves: 20, importedSolves: 10});
	expect(ranges).toEqual([
		[first, new Date('2026-09-04T00:00:00Z')],
		[new Date('2026-09-04T00:00:00Z'), cutoff],
	]);
});

it('stops immediately when the refresh loses ownership', async () => {
	const {db, query} = database(empty);
	await expect(
		buildAdminMetrics(cutoff, db, () => {
			throw new Error('lost lock');
		}),
	).rejects.toThrow('lost lock');
	expect(query).not.toHaveBeenCalled();
});

it('does not split or retry connection failures and reports the failing query', async () => {
	const {db, query} = database(() => {
		throw new Error('connection refused');
	});
	await expect(buildAdminMetrics(cutoff, db)).rejects.toThrow(
		'query solveTotals failed: Error: connection refused',
	);
	expect(query).toHaveBeenCalledTimes(1);
});

it('counts import operations separately from imported solves, grouped by start day', async () => {
	const {db} = database((sql) => {
		if (sql.text.includes('FROM import_attempt'))
			return [
				{date: '2026-09-06', succeeded: BigInt(2), failed: BigInt(1), pending: BigInt(3)},
			];
		return empty(sql);
	});
	const snapshot = await buildAdminMetrics(cutoff, db);
	expect(snapshot.version).toBe(2);
	expect(snapshot.days.find((day) => day.date === '2026-09-06')).toMatchObject({
		imports: 0,
		importsSucceeded: 2,
		importsFailed: 1,
		importsPending: 3,
	});
	expect(snapshot.days[89]).toMatchObject({
		importsSucceeded: 0,
		importsFailed: 0,
		importsPending: 0,
	});
});
