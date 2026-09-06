import {adminTrainerRouter} from '@/server/trpc/routers/admin_trainer';
import type {TRPCContext} from '@/server/trpc/context';

test.each([null, {id: 'ordinary-user', admin: false}])(
	'all catalog administration requires an admin account: %j',
	async (user) => {
		const caller = adminTrainerRouter.createCaller({
			user,
			prisma: {},
		} as unknown as TRPCContext);
		const code = user ? 'FORBIDDEN' : 'UNAUTHORIZED';
		await expect(caller.list({})).rejects.toMatchObject({code});
		await expect(caller.previewImport({csv: 'a'})).rejects.toMatchObject({code});
		await expect(
			caller.confirmImport({csv: 'a', fingerprint: '0'.repeat(64)}),
		).rejects.toMatchObject({code});
		await expect(
			caller.save({
				algorithm: {id: 'a', name: 'A', cube_type: '333', algo_type: 'OLL'},
				revision: 0,
				creating: true,
			}),
		).rejects.toMatchObject({code});
	},
);
