import {runImport} from '@/server/models/import_attempt';
import {sessionInputSchema} from '@/server/trpc/routers/session';
import {solveInputSchema} from '@/server/trpc/routers/solve';
import {protectedProcedure, router} from '@/server/trpc/trpc';
import {z} from 'zod';

export const importInputSchema = z
	.object({
		attemptId: z.uuid(),
		source: z.enum(['cstimer', 'cubedesk']),
		sessions: z.array(sessionInputSchema).max(1000),
		// Imported historical data must not attach to another user's matches or devices.
		solves: z.array(
			solveInputSchema
				.omit({
					game_session_id: true,
					training_session_id: true,
					smart_device_id: true,
					match_id: true,
					match_participant_id: true,
				})
				.extend({time: z.number().nonnegative()}),
		),
	})
	.refine((input) => input.sessions.length > 0 || input.solves.length > 0, 'No data to import');

export const importsRouter = router({
	run: protectedProcedure
		.input(importInputSchema)
		.mutation(({ctx, input}) => runImport(ctx.user.id, input)),
});
