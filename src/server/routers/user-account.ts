import {createTRPCRouter, userProcedure} from '@/server/trpc';
import {z} from 'zod';
import {getPrismaClient} from '@/server/services/database';

export const userAccountRouter = createTRPCRouter({
	updateOfflineHash: userProcedure
		.input(z.object({hash: z.string()}))
		.output(z.string())
		.mutation(async ({ctx, input}) => {
			const {me} = ctx;
			const {hash} = input;
			const prisma = getPrismaClient();

			await prisma.userAccount.update({
				where: {
					id: me.id,
				},
				data: {
					offline_hash: hash,
				},
			});

			return hash;
		}),
	delete: userProcedure.output(z.boolean()).mutation(async ({ctx}) => {
		const {me} = ctx;
		const prisma = getPrismaClient();

		await prisma.userAccount.delete({
			where: {
				id: me.id,
			},
		});

		return true;
	}),
});
