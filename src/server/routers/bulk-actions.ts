import {z} from 'zod';
import {createTRPCRouter, proProcedure} from '@/server/trpc';
import {TRPCError} from '@trpc/server';
import {Prisma} from '@prisma/client';
import {getPrismaClient} from '@/server/services/database';
import {ErrorCode} from '@/server/constants/errors';
import {getDefaultCubeTypes} from '@/lib/util/cubes/util';

export const bulkActionsRouter = createTRPCRouter({
	// Delete multiple solves
	deleteSolves: proProcedure
		.input(
			z.object({
				solveIds: z.array(z.string()),
			}),
		)
		.mutation(async ({ctx, input}) => {
			const prisma = getPrismaClient();
			const deleted = await prisma.solve.deleteMany({
				where: {
					user_id: ctx.me.id,
					id: {
						in: input.solveIds,
					},
				},
			});
			return deleted.count;
		}),

	// Move multiple solves to a session
	moveSolvesToSession: proProcedure
		.input(
			z.object({
				solveIds: z.array(z.string()),
				sessionId: z.string(),
			}),
		)
		.mutation(async ({ctx, input}) => {
			const prisma = getPrismaClient();

			// Check if session exists and belongs to the user
			const session = await prisma.session.findUnique({
				where: {
					id: input.sessionId,
				},
			});

			if (!session || session.user_id !== ctx.me.id) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'Could not find a session with that ID',
				});
			}

			const updated = await prisma.solve.updateMany({
				where: {
					user_id: ctx.me.id,
					id: {
						in: input.solveIds,
					},
				},
				data: {
					session_id: input.sessionId,
				},
			});
			return updated.count;
		}),

	// DNF multiple solves
	dnfSolves: proProcedure
		.input(
			z.object({
				solveIds: z.array(z.string()),
			}),
		)
		.mutation(async ({ctx, input}) => {
			const prisma = getPrismaClient();
			return prisma.$executeRaw`
				UPDATE
					solve
				SET dnf = TRUE, "time" = -1
				WHERE user_id = ${ctx.me.id} 
					AND id IN (${Prisma.join(input.solveIds)})
			`;
		}),

	// Plus Two multiple solves
	plusTwoSolves: proProcedure
		.input(
			z.object({
				solveIds: z.array(z.string()),
			}),
		)
		.mutation(async ({ctx, input}) => {
			const prisma = getPrismaClient();
			const plusTwoSolves = prisma.$executeRaw`
				UPDATE
					solve
				SET plus_two = TRUE, 
					"time" = raw_time + 2
				WHERE user_id = ${ctx.me.id} 
					AND id IN (${Prisma.join(input.solveIds)})
			`;
			const updateTime = prisma.$executeRaw`
				UPDATE
					solve
				SET "time" = raw_time + 2
				WHERE user_id = ${ctx.me.id} 
					AND id IN (${Prisma.join(input.solveIds)})
					AND dnf = FALSE
			`;

			const [updated] = await Promise.all([plusTwoSolves, updateTime]);
			return updated;
		}),

	// OK multiple solves (remove penalties)
	okSolves: proProcedure
		.input(
			z.object({
				solveIds: z.array(z.string()),
			}),
		)
		.mutation(async ({ctx, input}) => {
			const prisma = getPrismaClient();
			return prisma.$executeRaw`
				UPDATE
					solve
				SET "time" = raw_time,
					dnf = false,
					plus_two = false
				WHERE user_id = ${ctx.me.id} AND id IN (${Prisma.join(input.solveIds)})
			`;
		}),

	// Update cube type for multiple solves
	updateCubeType: proProcedure
		.input(
			z.object({
				solveIds: z.array(z.string()),
				cubeType: z.string(),
			}),
		)
		.mutation(async ({ctx, input}) => {
			const defaultCubeTypes = getDefaultCubeTypes();

			// TODO: After CustomCubeType is migrated to tRPC, we'll need to update this
			const customCubeTypes = await getCustomCubeTypesByUserId(
				{user: ctx.me, prisma: getPrismaClient()},
				ctx.me.id,
			);

			const validCubeType = [...defaultCubeTypes, ...customCubeTypes].some(
				(ct) => ct.id === input.cubeType,
			);

			if (!validCubeType) {
				throw new TRPCError({
					code: 'BAD_REQUEST',
					message: ErrorCode.BAD_INPUT,
				});
			}

			const prisma = getPrismaClient();
			const updated = await prisma.solve.updateMany({
				where: {
					user_id: ctx.me.id,
					id: {
						in: input.solveIds,
					},
				},
				data: {
					cube_type: input.cubeType,
				},
			});
			return updated.count;
		}),
});
