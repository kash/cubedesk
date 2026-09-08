import type {ImportAttempt} from '@/generated/prisma/client';
import {type ImportInput, runImport} from '@/server/models/import_attempt';

jest.mock('@/server/services/logger', () => ({logger: {error: jest.fn()}}));

const userId = 'importing-user';
const input: ImportInput = {
	attemptId: 'attempt',
	source: 'cstimer',
	sessions: [{id: 'session', name: 'Imported'}],
	solves: [{time: 12, cube_type: '333', session_id: 'session'}],
};

function setup() {
	let record: ImportAttempt;
	const attempt = {
		create: jest.fn(async ({data}) => {
			if (record) throw Object.assign(new Error('Duplicate'), {code: 'P2002'});
			record = {
				...data,
				status: 'pending',
				saved_sessions: 0,
				saved_solves: 0,
				failure_code: null,
			};
			return record;
		}),
		findUniqueOrThrow: jest.fn(async () => record),
		update: jest.fn(async ({data}) => {
			record = {...record, ...data};
			return record;
		}),
		updateMany: jest.fn(async ({where, data}) => {
			if (record.status === where.status) record = {...record, ...data};
			return {count: 1};
		}),
	};
	const tx = {
		importAttempt: attempt,
		session: {
			count: jest.fn().mockResolvedValue(0),
			createMany: jest.fn().mockResolvedValue({count: 1}),
			findMany: jest.fn().mockResolvedValue([{id: 'session'}]),
			update: jest.fn(),
		},
		solve: {createMany: jest.fn().mockResolvedValue({count: 1})},
		userFeatureState: {upsert: jest.fn().mockResolvedValue({})},
	};
	const db = {importAttempt: attempt, $transaction: jest.fn(async (work) => work(tx))};
	return {db: db as unknown as Parameters<typeof runImport>[2], tx, transaction: db.$transaction};
}

it.each(['cstimer', 'cubedesk'] as const)(
	'records successful %s imports and dismisses the prompt transactionally',
	async (source) => {
		const {db, tx} = setup();
		await expect(runImport(userId, {...input, source}, db)).resolves.toMatchObject({
			status: 'succeeded',
			savedSessions: 1,
			savedSolves: 1,
		});
		expect(tx.solve.createMany).toHaveBeenCalledWith({
			data: [
				expect.objectContaining({
					bulk: true,
					user_id: userId,
					started_at: null,
					ended_at: null,
				}),
			],
		});
		expect(tx.userFeatureState.upsert).toHaveBeenCalledWith({
			where: {user_id: userId},
			create: {user_id: userId, import_prompt_hidden: true},
			update: {import_prompt_hidden: true},
		});
	},
);

it('does not dismiss the prompt for a sessions-only import', async () => {
	const {db, tx} = setup();
	tx.solve.createMany.mockResolvedValue({count: 0});
	await runImport(userId, {...input, solves: []}, db);
	expect(tx.userFeatureState.upsert).not.toHaveBeenCalled();
});

it('records failures with zero saved counts and leaves the prompt alone', async () => {
	const {db, tx} = setup();
	tx.solve.createMany.mockRejectedValue(new Error('Private database details'));
	await expect(runImport(userId, input, db)).resolves.toMatchObject({
		status: 'failed',
		failureCode: 'IMPORT_FAILED',
		savedSessions: 0,
		savedSolves: 0,
	});
	expect(tx.userFeatureState.upsert).not.toHaveBeenCalled();
});

it('rejects references to sessions the user does not own', async () => {
	const {db, tx} = setup();
	await expect(runImport(userId, {...input, sessions: []}, db)).resolves.toMatchObject({
		status: 'failed',
		failureCode: 'INVALID_SESSION_REFERENCE',
	});
	expect(tx.session.createMany).not.toHaveBeenCalled();
	expect(tx.solve.createMany).not.toHaveBeenCalled();
});

it('returns the existing success without importing twice', async () => {
	const {db, transaction} = setup();
	const first = await runImport(userId, input, db);
	await expect(runImport(userId, input, db)).resolves.toEqual(first);
	expect(transaction).toHaveBeenCalledTimes(1);
});

it('does not execute concurrent submissions of the same attempt twice', async () => {
	const {db, tx, transaction} = setup();
	let finish!: (value: {count: number}) => void;
	tx.solve.createMany.mockImplementation(
		() =>
			new Promise((resolve) => {
				finish = resolve;
			}),
	);
	const first = runImport(userId, input, db);
	await new Promise<void>((resolve) => setImmediate(resolve));
	await expect(runImport(userId, input, db)).resolves.toMatchObject({status: 'pending'});
	finish({count: 1});
	await first;
	expect(transaction).toHaveBeenCalledTimes(1);
});

it('prevents reuse of an attempt by another user or with another payload', async () => {
	const {db, transaction} = setup();
	await runImport(userId, input, db);
	await expect(runImport('another-user', input, db)).rejects.toMatchObject({code: 'CONFLICT'});
	await expect(runImport(userId, {...input, source: 'cubedesk'}, db)).rejects.toMatchObject({
		code: 'CONFLICT',
	});
	expect(transaction).toHaveBeenCalledTimes(1);
});

it('preserves a committed success if the transaction response is lost', async () => {
	const {db, tx, transaction} = setup();
	transaction.mockImplementation(async (work) => {
		await work(tx);
		throw new Error('Connection lost after commit');
	});
	await expect(runImport(userId, input, db)).resolves.toMatchObject({status: 'succeeded'});
});
