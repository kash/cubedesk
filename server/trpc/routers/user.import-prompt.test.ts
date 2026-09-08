import {userRouter} from './user';
import type {TRPCContext} from '@/server/trpc/context';

function setup(hidden = false, imported = false, signedIn = true) {
	const prisma = {
		userFeatureState: {
			findUnique: jest.fn().mockResolvedValue(hidden ? {import_prompt_hidden: true} : null),
			upsert: jest.fn().mockResolvedValue({}),
		},
		solve: {findFirst: jest.fn().mockResolvedValue(imported ? {id: 'solve'} : null)},
	};
	const caller = userRouter.createCaller({
		prisma,
		user: signedIn ? {id: 'current-user'} : null,
	} as unknown as TRPCContext);
	return {caller, prisma};
}

it('shows the prompt for an account with no imports or dismissal', async () => {
	const {caller, prisma} = setup();
	await expect(caller.importPrompt()).resolves.toEqual({visible: true});
	expect(prisma.solve.findFirst).toHaveBeenCalledWith({
		where: {user_id: 'current-user', bulk: true},
		select: {id: true},
	});
});

it('hides the prompt for existing importers', async () => {
	await expect(setup(false, true).caller.importPrompt()).resolves.toEqual({visible: false});
});

it('keeps the prompt hidden after dismissal or after imported solves are deleted', async () => {
	const {caller, prisma} = setup(true);
	await expect(caller.importPrompt()).resolves.toEqual({visible: false});
	expect(prisma.solve.findFirst).not.toHaveBeenCalled();
});

it('persists dismissal for the authenticated account', async () => {
	const {caller, prisma} = setup();
	await caller.dismissImportPrompt();
	expect(prisma.userFeatureState.upsert).toHaveBeenCalledWith({
		where: {user_id: 'current-user'},
		create: {user_id: 'current-user', import_prompt_hidden: true},
		update: {import_prompt_hidden: true},
	});
});

it('requires authentication for both prompt endpoints', async () => {
	const {caller, prisma} = setup(false, false, false);
	await expect(caller.importPrompt()).rejects.toMatchObject({code: 'UNAUTHORIZED'});
	await expect(caller.dismissImportPrompt()).rejects.toMatchObject({code: 'UNAUTHORIZED'});
	expect(prisma.userFeatureState.upsert).not.toHaveBeenCalled();
});
