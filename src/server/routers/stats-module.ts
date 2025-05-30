import {createTRPCRouter, userProcedure} from '@/server/trpc';
import {z} from 'zod';
import {getPrismaClient} from '@/server/services/database';

export const statsModuleRouter = createTRPCRouter({
	get: userProcedure
		.output(
			z
				.object({
					blocks: z.array(
						z.object({
							statType: z.enum(['average', 'single']),
							sortBy: z.enum(['best', 'worst', 'current']),
							session: z.boolean(),
							colorName: z.string(), // ColorName from shared/colors
							averageCount: z.number().min(0).max(10000),
						}),
					),
				})
				.nullable(),
		)
		.query(async ({ctx}) => {
			const {me} = ctx;

			async function getSettingsByUserId(userId: string) {
				const prisma = getPrismaClient();
				return prisma.setting.findUnique({
					where: {user_id: userId},
				});
			}

			async function getStatsModulesByUserId(userId: string) {
				const settings = await getSettingsByUserId(userId);

				let statsModule = null;
				if (settings?.stats_module_json) {
					statsModule = JSON.parse(settings.stats_module_json);
				}

				return statsModule;
			}

			return getStatsModulesByUserId(me.id);
		}),

	update: userProcedure
		.input(
			z.object({
				blocks: z.array(
					z.object({
						statType: z.enum(['average', 'single']),
						sortBy: z.enum(['best', 'worst', 'current']),
						session: z.boolean(),
						colorName: z.string(), // ColorName from shared/colors
						averageCount: z.number().min(0).max(10000),
					}),
				),
			}),
		)
		.output(
			z
				.object({
					blocks: z.array(
						z.object({
							statType: z.enum(['average', 'single']),
							sortBy: z.enum(['best', 'worst', 'current']),
							session: z.boolean(),
							colorName: z.string(), // ColorName from shared/colors
							averageCount: z.number().min(0).max(10000),
						}),
					),
				})
				.nullable(),
		)
		.mutation(async ({ctx, input}) => {
			const {me} = ctx;

			async function getSettingsByUserId(userId: string) {
				const prisma = getPrismaClient();
				return prisma.setting.findUnique({
					where: {user_id: userId},
				});
			}

			async function setSetting(userId: string, key: string, value: any) {
				const prisma = getPrismaClient();
				return prisma.setting.upsert({
					where: {
						user_id: userId,
					},
					create: {
						user_id: userId,
						[key]: value,
					},
					update: {
						[key]: value,
					},
				});
			}

			async function getStatsModulesByUserId(userId: string) {
				const settings = await getSettingsByUserId(userId);

				let statsModule = null;
				if (settings?.stats_module_json) {
					statsModule = JSON.parse(settings.stats_module_json);
				}

				return statsModule;
			}

			async function updateStatsModuleBlocks(userId: string, blocks: any[]) {
				const statsModule = await getStatsModulesByUserId(userId);
				let updateStatsModule;
				if (!statsModule) {
					updateStatsModule = {
						blocks,
					};
				} else {
					updateStatsModule = statsModule;
					updateStatsModule.blocks = blocks;
				}

				const statsModuleJson = JSON.stringify(updateStatsModule);
				await setSetting(userId, 'stats_module_json', statsModuleJson);
				return getStatsModulesByUserId(userId);
			}

			return updateStatsModuleBlocks(me.id, input.blocks);
		}),
});
