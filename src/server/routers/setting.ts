import {z} from 'zod';
import {createTRPCRouter, userProcedure} from '@/server/trpc';
import {TRPCError} from '@trpc/server';
import {v4 as uuid} from 'uuid';
import {getPrismaClient} from '@/server/services/database';
import {Setting} from '@prisma/client';

// Zod schemas matching the GraphQL types
const CustomCubeTypeSchema = z.object({
	id: z.string(),
	user_id: z.string(),
	name: z.string(),
	created_at: z.date(),
	scramble: z.string(),
	private: z.boolean(),
});

const SettingSchema = z.object({
	id: z.string(),
	user_id: z.string(),
	created_at: z.date(),
	focus_mode: z.boolean(),
	freeze_time: z.number(),
	inspection: z.boolean(),
	manual_entry: z.boolean(),
	inspection_delay: z.number(),
	inverse_time_list: z.boolean(),
	hide_time_when_solving: z.boolean(),
	nav_collapsed: z.boolean(),
	pb_confetti: z.boolean(),
	play_inspection_sound: z.boolean(),
	zero_out_time_after_solve: z.boolean(),
	confirm_delete_solve: z.boolean(),
	require_period_in_manual_time_entry: z.boolean(),
	use_space_with_smart_cube: z.boolean(),
	timer_decimal_points: z.number(),
	cube_type: z.string(),
	session_id: z.string(),
	beta_tester: z.boolean(),
	custom_cube_types: z.array(CustomCubeTypeSchema).optional(),
});

const SettingInputSchema = z.object({
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
});

export async function getSettingsByUserId(userId: string) {
	return getPrismaClient().setting.findUnique({
		where: {
			user_id: userId,
		},
		include: {
			custom_cube_types: true,
		},
	});
}

export function getSetting(userId: string) {
	const prisma = getPrismaClient();

	return prisma.setting.findUnique({
		where: {
			user_id: userId,
		},
	});
}

export function createSetting(userId: string) {
	const prisma = getPrismaClient();

	return prisma.setting.create({
		data: {
			id: uuid(),
			user_id: userId,
		},
	});
}

export function setSetting<T extends keyof Setting>(userId: string, key: T, value: any) {
	return getPrismaClient().setting.update({
		where: {
			user_id: userId,
		},
		data: {
			[key]: value,
		},
	});
}

export const settingRouter = createTRPCRouter({
	settings: userProcedure
		.output(SettingSchema.nullable())
		.query(async ({ctx}) => {
			return getSettingsByUserId(ctx.me.id) as any;
		}),

	setSetting: userProcedure
		.input(SettingInputSchema)
		.output(SettingSchema.nullable())
		.mutation(async ({ctx, input}) => {
			const {me: user} = ctx;

			const keys = Object.keys(input || {}) as [keyof Setting];

			if (!input || !keys.length) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'Please provide a key and a value'});
			}

			let setting;

			for (const key of keys) {
				// Need to check for Pro settings
				if (key === 'beta_tester' && !user.is_pro) {
					continue;
				}

				setting = await setSetting(user.id, key, input[key]);
			}

			return setting as any;
		}),

	resetSettings: userProcedure
		.output(SettingSchema.nullable())
		.mutation(async ({ctx}) => {
			return getSettingsByUserId(ctx.me.id) as any;
		}),
});