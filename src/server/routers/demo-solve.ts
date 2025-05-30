import {z} from 'zod';
import {createTRPCRouter, publicProcedure} from '@/server/trpc';
import {getPrismaClient} from '@/server/services/database';

export const demoSolveRouter = createTRPCRouter({
	// Create a new demo solve
	create: publicProcedure
		.input(
			z.object({
				demo_session_id: z.string(),
				raw_time: z.number(),
				cube_type: z.string(),
				scramble: z.string(),
				started_at: z.bigint().optional(),
				ended_at: z.bigint().optional(),
			}),
		)
		.mutation(async ({ctx, input}) => {
			const prisma = getPrismaClient();

			return prisma.demoSolve.create({
				data: {
					...input,
					ip_address:
						ctx.req.headers.get('x-forwarded-for') ||
						ctx.req.headers.get('x-real-ip') ||
						'unknown',
				},
			});
		}),
});
