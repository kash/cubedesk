import {TRPCError} from '@trpc/server';
import {z} from 'zod';
import {protectedProcedure, router} from '../trpc';
import {getSettingsByUserId, resetSetting, updateSettings} from '../../models/settings';

const settingInputSchema = z
	.object({
		focus_mode: z.boolean(),
		freeze_time: z.number(),
		inspection: z.boolean(),
		manual_entry: z.boolean(),
		inspection_delay: z.number().int(),
		inverse_time_list: z.boolean(),
		hide_time_when_solving: z.boolean(),
		nav_collapsed: z.boolean(),
		pb_confetti: z.boolean(),
		play_inspection_sound: z.boolean(),
		zero_out_time_after_solve: z.boolean(),
		confirm_delete_solve: z.boolean(),
		require_period_in_manual_time_entry: z.boolean(),
		use_space_with_smart_cube: z.boolean(),
		timer_decimal_points: z.number().int(),
		cube_type: z.string(),
		session_id: z.string(),
		beta_tester: z.boolean(),
	})
	.partial();

export const settingRouter = router({
	get: protectedProcedure.query(({ctx}) => getSettingsByUserId(ctx.user.id)),

	set: protectedProcedure.input(settingInputSchema).mutation(async ({ctx, input}) => {
		if (!Object.keys(input).length) {
			throw new TRPCError({
				code: 'BAD_REQUEST',
				message: 'Please provide a key and a value',
			});
		}

		return updateSettings(ctx.user.id, input);
	}),

	reset: protectedProcedure.mutation(({ctx}) => resetSetting(ctx.user.id)),
});
