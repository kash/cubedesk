import 'dotenv/config';
import {PrismaClient} from '@/generated/prisma/client';
import {type ImportInput, runImport} from '@/server/models/import_attempt';
import {PrismaPg} from '@prisma/adapter-pg';
import {randomUUID} from 'node:crypto';
import {readFileSync} from 'node:fs';

jest.mock('@/server/services/logger', () => ({logger: {error: jest.fn()}}));
const suite = process.env.IMPORT_DB_TESTS === '1' ? describe : describe.skip;

suite('import transactions in PostgreSQL', () => {
	const schema = `import_test_${process.pid}_${Date.now()}`;
	let setupDb: PrismaClient;
	let db: PrismaClient;
	const userId = 'import-user';
	beforeAll(async () => {
		const connectionString = process.env.DATABASE_URL!;
		if (!['localhost', '127.0.0.1', '[::1]'].includes(new URL(connectionString).hostname))
			throw new Error('Import integration tests require local PostgreSQL');
		setupDb = new PrismaClient({adapter: new PrismaPg({connectionString})});
		await setupDb.$executeRawUnsafe(`CREATE SCHEMA "${schema}"`);
		db = new PrismaClient({
			adapter: new PrismaPg(
				{connectionString, options: `-c search_path=${schema} -c timezone=UTC`},
				{schema},
			),
		});
		for (const table of ['user_account', 'session', 'solve', 'user_feature_state']) {
			await db.$executeRawUnsafe(
				`CREATE TABLE "${table}" (LIKE public."${table}" INCLUDING ALL)`,
			);
		}
		const migration = readFileSync(
			'prisma/migrations/20260908140000_track_import_attempts/migration.sql',
			'utf8',
		);
		for (const statement of migration.split(';').filter((sql) => sql.trim()))
			await db.$executeRawUnsafe(statement);
		// Real database constraints make a failure after session creation exercise rollback.
		await db.$executeRawUnsafe('ALTER TABLE solve ADD CHECK (time >= 0)');
		await db.$executeRawUnsafe(
			'ALTER TABLE solve ADD FOREIGN KEY (session_id) REFERENCES session(id)',
		);
		await db.userAccount.create({
			data: {
				id: userId,
				email: 'import-test@example.com',
				password: 'unused',
				join_ip: '127.0.0.1',
				join_country: 'US',
			},
		});
	}, 30000);

	afterAll(async () => {
		await db?.$disconnect();
		if (setupDb) {
			await setupDb.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`);
			await setupDb.$disconnect();
		}
	});

	function input(time = 12): ImportInput {
		const sessionId = randomUUID();
		return {
			attemptId: randomUUID(),
			source: 'cstimer',
			sessions: [{id: sessionId, name: 'Imported'}],
			solves: [
				{time, cube_type: '333', session_id: sessionId, started_at: 1000, ended_at: 13000},
			],
		};
	}

	it('commits one import for simultaneous duplicate submissions', async () => {
		const request = input();
		await Promise.all([runImport(userId, request, db), runImport(userId, request, db)]);
		expect(await runImport(userId, request, db)).toMatchObject({
			status: 'succeeded',
			savedSessions: 1,
			savedSolves: 1,
		});
		expect(await db.solve.count({where: {session_id: request.sessions[0].id}})).toBe(1);
		expect(
			await db.solve.findFirst({where: {session_id: request.sessions[0].id}}),
		).toMatchObject({bulk: true, user_id: userId});
		expect(await db.userFeatureState.findUnique({where: {user_id: userId}})).toMatchObject({
			import_prompt_hidden: true,
		});
	});

	it('rolls back created sessions and leaves a failed attempt when solve insertion fails', async () => {
		await db.userFeatureState.update({
			where: {user_id: userId},
			data: {import_prompt_hidden: false},
		});
		const request = input(-1);
		expect(await runImport(userId, request, db)).toMatchObject({
			status: 'failed',
			savedSessions: 0,
			savedSolves: 0,
		});
		expect(await db.session.count({where: {id: request.sessions[0].id}})).toBe(0);
		expect(await db.solve.count({where: {session_id: request.sessions[0].id}})).toBe(0);
		expect(await db.userFeatureState.findUnique({where: {user_id: userId}})).toMatchObject({
			import_prompt_hidden: false,
		});
		const record = await db.importAttempt.findUniqueOrThrow({where: {id: request.attemptId}});
		expect(record).toMatchObject({
			status: 'failed',
			requested_sessions: 1,
			requested_solves: 1,
			failure_code: 'IMPORT_FAILED',
		});
		expect(record.completed_at).toBeInstanceOf(Date);
	});

	it('permits a deliberate retry with a new ID after failure', async () => {
		const request = input(-1);
		await runImport(userId, request, db);
		const retry = {
			...request,
			attemptId: randomUUID(),
			source: 'cubedesk' as const,
			solves: request.solves.map((solve) => ({...solve, time: 12})),
		};
		expect(await runImport(userId, retry, db)).toMatchObject({status: 'succeeded'});
		expect(
			await db.importAttempt.count({where: {id: {in: [request.attemptId, retry.attemptId]}}}),
		).toBe(2);
	});
});
