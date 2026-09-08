import type {TRPCContext} from '@/server/trpc/context';
import {runImport} from '@/server/models/import_attempt';
import {importInputSchema, importsRouter} from '@/server/trpc/routers/imports';

jest.mock('@/server/models/import_attempt', () => ({runImport: jest.fn()}));
const input = {
	attemptId: '333a33d5-4328-4380-b42a-05131dbf069a',
	source: 'cubedesk' as const,
	sessions: [],
	solves: [{time: 12, trainer_name: 'OLL'}],
};

it('strips imported foreign relationships and untrusted ownership fields', () => {
	const result = importInputSchema.parse({
		...input,
		user_id: 'other-user',
		solves: [
			{
				...input.solves[0],
				user_id: 'other-user',
				match_id: 'other-match',
				match_participant_id: 'other-participant',
				smart_device_id: 'other-device',
				game_session_id: 'other-game',
				training_session_id: 'other-training',
			},
		],
	});
	expect(result.solves[0]).toEqual({time: 12, trainer_name: 'OLL'});
	expect(result).not.toHaveProperty('user_id');
});

it('rejects empty imports and invalid times before recording an attempt', () => {
	expect(importInputSchema.safeParse({...input, solves: []}).success).toBe(false);
	for (const time of [null, undefined, -1, Infinity]) {
		expect(importInputSchema.safeParse({...input, solves: [{time}]}).success).toBe(false);
	}
});

it('requires an authenticated user', async () => {
	const caller = importsRouter.createCaller({user: null} as TRPCContext);
	await expect(caller.run(input)).rejects.toMatchObject({code: 'UNAUTHORIZED'});
	expect(runImport).not.toHaveBeenCalled();
});

it('uses the authenticated user rather than a caller-supplied user ID', async () => {
	const caller = importsRouter.createCaller({user: {id: 'signed-in-user'}} as TRPCContext);
	await caller.run(input);
	expect(runImport).toHaveBeenCalledWith('signed-in-user', input);
});
