import type {PrismaClient} from '@/generated/prisma/client';
import {demoImportInput, importDemoSolves} from './demo_import';
import {demoSolveRouter} from '@/server/trpc/routers/demo_solve';
import type {TRPCContext} from '@/server/trpc/context';
import {getSolveSteps} from '@/server/util/solve/solve_method';
import {createSolveMethodSteps} from '@/server/models/solve_method_step';

jest.mock('@/server/util/solve/solve_method', () => ({getSolveSteps: jest.fn(() => ({}))}));
jest.mock('@/server/models/solve_method_step', () => ({createSolveMethodSteps: jest.fn()}));

const solve = {
	id: '8f16a418-475a-4a30-a95a-5a283eea2242',
	raw_time: 12.5,
	cube_type: '333',
	scramble: "R U R'",
	started_at: 1000,
	ended_at: 13500,
	dnf: false,
	plus_two: true,
	notes: 'First demo solve',
	inspection_time: 3,
	is_smart_cube: false,
	smart_turns: null,
	smart_turn_count: null,
	smart_put_down_time: null,
};
const input = () =>
	demoImportInput.parse({solves: [solve], destination: {kind: 'new', name: 'Demo 3x3 Session'}});
function setup() {
	const tx = {
		userAccount: {update: jest.fn().mockResolvedValue({})},
		solve: {
			findMany: jest.fn().mockResolvedValue([]),
			createMany: jest.fn().mockResolvedValue({count: 1}),
			update: jest.fn(),
		},
		session: {
			findFirst: jest.fn().mockResolvedValue({id: 'owned-session'}),
			create: jest.fn().mockResolvedValue({id: 'new-session'}),
			updateMany: jest.fn(),
		},
		setting: {update: jest.fn()},
	};
	const db = {$transaction: jest.fn(async (work) => work(tx))} as unknown as PrismaClient;
	return {tx, db};
}

beforeEach(() => jest.clearAllMocks());

it('creates a destination and preserves solve data while deriving penalties and ownership', async () => {
	const {db, tx} = setup();
	const data = demoImportInput.parse({
		solves: [{...solve, user_id: 'attacker', session_id: 'foreign', time: 1, demo_mode: true}],
		destination: {kind: 'new', name: ' Demo 3x3 Session '},
	});
	await expect(importDemoSolves(db, 'user', data)).resolves.toEqual({
		sessionId: 'new-session',
		count: 1,
	});
	expect(tx.userAccount.update).toHaveBeenCalledWith({
		where: {id: 'user'},
		data: {last_solve_at: expect.any(Date), offline_hash: expect.any(String)},
	});
	expect(tx.session.create).toHaveBeenCalledWith({
		data: {user_id: 'user', name: 'Demo 3x3 Session', order: 0},
	});
	expect(tx.solve.createMany).toHaveBeenCalledWith({
		data: [
			{
				...solve,
				user_id: 'user',
				session_id: 'new-session',
				time: 14.5,
				from_timer: true,
				bulk: false,
			},
		],
	});
	expect(tx.setting.update).toHaveBeenCalledWith({
		where: {user_id: 'user'},
		data: {session_id: 'new-session'},
	});
});

it('imports mixed puzzle types into one existing owned session, with DNF taking precedence', async () => {
	const {db, tx} = setup();
	const data = input();
	data.destination = {kind: 'existing', sessionId: 'owned-session'};
	data.solves.push({
		...solve,
		id: '58968353-932e-4940-9e7c-d8f4a90df19e',
		cube_type: '222',
		dnf: true,
	});
	await importDemoSolves(db, 'user', data);
	expect(tx.session.findFirst).toHaveBeenCalledWith({
		where: {id: 'owned-session', user_id: 'user'},
	});
	expect(tx.session.create).not.toHaveBeenCalled();
	expect(tx.solve.createMany.mock.calls[0][0].data.map((row) => row.time)).toEqual([14.5, -1]);
});

it('rejects a foreign or deleted session before creating solves', async () => {
	const {db, tx} = setup();
	tx.session.findFirst.mockResolvedValue(null);
	await expect(
		importDemoSolves(db, 'user', {
			...input(),
			destination: {kind: 'existing', sessionId: 'foreign'},
		}),
	).rejects.toMatchObject({code: 'NOT_FOUND'});
	expect(tx.solve.createMany).not.toHaveBeenCalled();
});

it('returns the original destination on a retry without recreating anything', async () => {
	const {db, tx} = setup();
	tx.solve.findMany.mockResolvedValue([
		{id: solve.id, user_id: 'user', session_id: 'original-session'},
	]);
	await expect(importDemoSolves(db, 'user', input())).resolves.toEqual({
		sessionId: 'original-session',
		count: 1,
	});
	expect(tx.session.create).not.toHaveBeenCalled();
	expect(tx.solve.createMany).not.toHaveBeenCalled();
});

it('rejects another account’s solve IDs', async () => {
	const {db, tx} = setup();
	tx.solve.findMany.mockResolvedValue([
		{id: solve.id, user_id: 'foreign', session_id: 'foreign-session'},
	]);
	await expect(importDemoSolves(db, 'user', input())).rejects.toMatchObject({code: 'CONFLICT'});
	expect(tx.session.create).not.toHaveBeenCalled();
});

it('propagates write failures out of the transaction instead of reporting success', async () => {
	const {db, tx} = setup();
	tx.solve.createMany.mockRejectedValue(new Error('database unavailable'));
	await expect(importDemoSolves(db, 'user', input())).rejects.toThrow('database unavailable');
	expect(tx.setting.update).not.toHaveBeenCalled();
});

it('reconstructs smart-cube steps in the same transaction', async () => {
	const {db, tx} = setup();
	const data = input();
	data.solves[0] = {...solve, is_smart_cube: true, smart_turns: '[]'};
	await importDemoSolves(db, 'user', data);
	expect(getSolveSteps).toHaveBeenCalledWith([]);
	expect(createSolveMethodSteps).toHaveBeenCalledWith(data.solves[0], {}, tx);
});

it('keeps the solve when smart-cube reconstruction fails', async () => {
	const {db, tx} = setup();
	const data = input();
	data.solves[0] = {...solve, is_smart_cube: true, smart_turns: 'invalid'};
	await importDemoSolves(db, 'user', data);
	expect(tx.solve.update).toHaveBeenCalledWith({
		where: {id: solve.id},
		data: {is_smart_cube: false},
	});
});

it('requires authentication', async () => {
	const {db} = setup();
	const caller = demoSolveRouter.createCaller({user: null, prisma: db} as TRPCContext);
	await expect(caller.import(input())).rejects.toMatchObject({code: 'UNAUTHORIZED'});
	expect(db.$transaction).not.toHaveBeenCalled();
});

it('rejects empty batches, duplicate IDs, invalid times and empty destination names', () => {
	for (const invalid of [
		{...input(), solves: []},
		{...input(), solves: [solve, solve]},
		{...input(), solves: [{...solve, raw_time: -1}]},
		{...input(), destination: {kind: 'new', name: ' '}},
	])
		expect(demoImportInput.safeParse(invalid).success).toBe(false);
});
