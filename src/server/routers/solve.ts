import {z} from 'zod';
import {createTRPCRouter, userProcedure} from '@/server/trpc';
import {TRPCError} from '@trpc/server';
import {getPrismaClient} from '@/server/services/database';
import {createSolve, updateSolve} from '@/server/models/solve';
import {getMatchById} from '@/server/models/match';
import {getSolveSteps} from '@/server/utils/solve/solve_method';
import {createSolveMethodSteps} from '@/server/models/solve_method_step';
import {logger} from '@/server/services/logger';
import {updateUserAccountWithParams} from '@/server/models/user_account';
import {Solve} from '@/generated/zod';

// Input schema for creating a solve (based on the GraphQL SolveInput)
const SolveInputSchema = z.object({
	id: z.string().optional(),
	time: z.number().optional(),
	raw_time: z.number().optional(),
	cube_type: z.string().optional(),
	scramble: z.string().optional(),
	game_session_id: z.string().optional(),
	session_id: z.string().optional(),
	started_at: z.bigint().optional(),
	ended_at: z.bigint().optional(),
	dnf: z.boolean().optional(),
	plus_two: z.boolean().optional(),
	bulk: z.boolean().optional(),
	notes: z.string().optional(),
	from_timer: z.boolean(),
	trainer_name: z.string().optional(),
	is_smart_cube: z.boolean().optional(),
	training_session_id: z.string().optional(),
	smart_device_id: z.string().optional(),
	match_id: z.string().optional(),
	match_participant_id: z.string().optional(),
	smart_turn_count: z.number().int().optional(),
	smart_turns: z.string().optional(),
	smart_put_down_time: z.number().optional(),
	inspection_time: z.number().optional(),
});

type SolveInput = z.infer<typeof SolveInputSchema>;

async function getSolvesByUserId(userId: string) {
	const prisma = getPrismaClient();

	return prisma.solve.findMany({
		where: {
			user_id: userId,
			game_session_id: null,
		},
	});
}

export const solveRouter = createTRPCRouter({
	solves: userProcedure
		.output(z.array(Solve))
		.query(async ({ctx}) => {
			return getSolvesByUserId(ctx.me.id);
		}),

	createSolve: userProcedure
		.input(SolveInputSchema)
		.output(Solve)
		.mutation(async ({ctx, input}) => {
			const {me: user} = ctx;

			if (input.match_id) {
				const match = await getMatchById(input.match_id);
				for (const part of match.participants) {
					if (part.user_id === user.id) {
						input.match_participant_id = part.id;
						break;
					}
				}
			}

			input.bulk = false;
			const createdSolve = await createSolve(user, input);

			if (input.is_smart_cube) {
				try {
					const turns = JSON.parse(input.smart_turns);
					const steps = getSolveSteps(turns);
					await createSolveMethodSteps(createdSolve, steps);
				} catch (e) {
					logger.warn('Failed to create solve method steps', {
						error: e,
					});
					await updateSolve(createdSolve.id, {
						is_smart_cube: false,
					});
				}
			}

			await updateUserAccountWithParams(user.id, {
				last_solve_at: new Date(),
			});

			return createdSolve as any;
		}),
});