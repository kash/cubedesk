import {
	CATALOG_ID,
	importCatalog,
	previewCatalogImport,
	saveCatalogAlgorithm,
} from '@/server/models/trainer/catalog';
import {adminProcedure, router} from '@/server/trpc/trpc';
import {MAX_CSV_BYTES, trainerAlgorithmSchema} from '@/shared/trainer/catalog';
import {z} from 'zod';

const csvInput = z
	.string()
	.max(MAX_CSV_BYTES)
	.refine(
		(csv) => Buffer.byteLength(csv, 'utf8') <= MAX_CSV_BYTES,
		'CSV must be 5 MiB or smaller',
	);

export const adminTrainerRouter = router({
	list: adminProcedure
		.input(
			z.object({
				query: z.string().max(250).default(''),
				cubeType: z.string().default(''),
				algoType: z.string().default(''),
				status: z.enum(['all', 'published', 'unpublished']).default('all'),
				page: z.number().int().min(0).default(0),
			}),
		)
		.query(async ({ctx, input}) => {
			const where = {
				...(input.query
					? {
							OR: [
								{id: {contains: input.query, mode: 'insensitive' as const}},
								{name: {contains: input.query, mode: 'insensitive' as const}},
							],
						}
					: {}),
				...(input.cubeType ? {cube_type: input.cubeType} : {}),
				...(input.algoType ? {algo_type: input.algoType} : {}),
				...(input.status !== 'all' ? {active: input.status === 'published'} : {}),
			};
			// One snapshot keeps editor revisions consistent with the displayed records.
			return ctx.prisma.$transaction(
				async (tx) => {
					const state = await tx.trainerCatalogState.findUnique({
						where: {id: CATALOG_ID},
					});
					const [items, total, catalogTotal, published, sets] = await Promise.all([
						tx.trainerAlgorithm.findMany({
							where,
							orderBy: {id: 'asc'},
							take: 25,
							skip: input.page * 25,
						}),
						tx.trainerAlgorithm.count({where}),
						tx.trainerAlgorithm.count(),
						tx.trainerAlgorithm.count({where: {active: true}}),
						tx.trainerAlgorithm.findMany({
							select: {cube_type: true, algo_type: true},
							distinct: ['cube_type', 'algo_type'],
						}),
					]);
					return {
						items,
						total,
						catalogTotal,
						published,
						sets,
						initialized: !!state?.initialized_at,
						revision: state?.revision ?? 0,
					};
				},
				{isolationLevel: 'RepeatableRead'},
			);
		}),
	save: adminProcedure
		.input(
			z.object({
				algorithm: trainerAlgorithmSchema,
				revision: z.number().int().min(0),
				creating: z.boolean(),
			}),
		)
		.mutation(({ctx, input}) => saveCatalogAlgorithm(ctx.prisma, input)),
	previewImport: adminProcedure
		.input(z.object({csv: csvInput}))
		.mutation(({ctx, input}) =>
			ctx.prisma.$transaction((tx) => previewCatalogImport(tx, input.csv), {
				isolationLevel: 'RepeatableRead',
			}),
		),
	confirmImport: adminProcedure
		.input(z.object({csv: csvInput, fingerprint: z.string().length(64)}))
		.mutation(({ctx, input}) => importCatalog(ctx.prisma, input.csv, input.fingerprint)),
});
