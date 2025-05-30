import {z} from 'zod';
import {createTRPCRouter, userProcedure} from '@/server/trpc';
import {TRPCError} from '@trpc/server';
import {getPrismaClient} from '@/server/services/database';
import {Setting} from '@prisma/client';
import {SettingSchema} from '@/generated/zod';

export const settingRouter = createTRPCRouter({
	settings: userProcedure.output(SettingSchema.nullable()).query(async ({ctx}) => {
		async function getSettingsByUserId(userId: string) {
			return getPrismaClient().setting.findUnique({
				where: {
					user_id: userId,
				},
				include: {
					custom_cube_types: true,
				},
			});
		}

		return getSettingsByUserId(ctx.me.id) as any;
	}),

	setSetting: userProcedure
		.input(
			z.object({
				focus_mode: z.boolean().optional(),
				freeze_time: z.number().optional(),
				inspection: z.boolean().optional(),
				manual_entry: z.boolean().optional(),
				inspection_delay: z.number().optional(),
				inverse_time_list: z.boolean().optional(),
				hide_time_when_solving: z.boolean().optional(),
				nav_collapsed: z.boolean().optional(),
				pb_confetti: z.boolean().optional(),
				play_inspection_sound: z.boolean().optional(),
				zero_out_time_after_solve: z.boolean().optional(),
				confirm_delete_solve: z.boolean().optional(),
				require_period_in_manual_time_entry: z.boolean().optional(),
				use_space_with_smart_cube: z.boolean().optional(),
				timer_decimal_points: z.number().optional(),
				cube_type: z.string().optional(),
				session_id: z.string().optional(),
				beta_tester: z.boolean().optional(),
			}),
		)
		.output(SettingSchema.nullable())
		.mutation(async ({ctx, input}) => {
			function setSetting<T extends keyof Setting>(userId: string, key: T, value: any) {
				return getPrismaClient().setting.update({
					where: {
						user_id: userId,
					},
					data: {
						[key]: value,
					},
				});
			}

			const {me: user} = ctx;

			const keys = Object.keys(input || {}) as (keyof typeof input)[];

			if (!input || !keys.length) {
				throw new TRPCError({
					code: 'BAD_REQUEST',
					message: 'Please provide a key and a value',
				});
			}

			let setting;

			for (const key of keys) {
				// Need to check for Pro settings
				if (key === 'beta_tester' && !user.is_pro) {
					continue;
				}

				setting = await setSetting(user.id, key as keyof Setting, input[key]);
			}

			return setting as any;
		}),

	reset: userProcedure.output(SettingSchema.nullable()).mutation(async ({ctx}) => {
		const prisma = getPrismaClient();
		
		// Delete the user's settings to reset to defaults
		await prisma.setting.delete({
			where: {
				user_id: ctx.me.id,
			},
		});

		// Create new default settings
		const newSettings = await prisma.setting.create({
			data: {
				user_id: ctx.me.id,
			},
			include: {
				custom_cube_types: true,
			},
		});

		return newSettings as any;
	}),
});
