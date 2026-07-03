import {z} from 'zod';
import {publicProcedure, router} from '../trpc';

const demoSolveInputSchema = z.object({
	demo_session_id: z.string(),
	raw_time: z.number().nullish(),
	cube_type: z.string().nullish(),
	scramble: z.string().nullish(),
	started_at: z.number().int().nullish(),
	ended_at: z.number().int().nullish(),
});

export const demoSolveRouter = router({
	create: publicProcedure.input(demoSolveInputSchema).mutation(async ({ctx, input}) => {
		const demoSolve = await ctx.prisma.demoSolve.create({
			data: {
				...input,
				ip_address: ctx.ipAddress,
			},
		});

		return {
			...demoSolve,
			started_at: demoSolve.started_at === null ? null : Number(demoSolve.started_at),
			ended_at: demoSolve.ended_at === null ? null : Number(demoSolve.ended_at),
		};
	}),
});
