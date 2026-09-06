import {Prisma, PrismaClient} from '@/generated/prisma/client';
import {parseTrainerCsv} from '@/server/models/trainer/csv';
import {CatalogAlgorithm, catalogFields, trainerAlgorithmSchema} from '@/shared/trainer/catalog';
import {TRPCError} from '@trpc/server';
import {createHash} from 'node:crypto';

export const CATALOG_ID = 'default';
type Database = PrismaClient | Prisma.TransactionClient;

export function catalogChanges(algorithms: CatalogAlgorithm[], existing: CatalogAlgorithm[]) {
	const byId = new Map(existing.map((algorithm) => [algorithm.id, algorithm]));
	return algorithms.map((algorithm) => {
		const before = byId.get(algorithm.id);
		const fields = catalogFields.filter(
			(field) => !before || before[field] !== algorithm[field],
		);
		return {
			id: algorithm.id,
			kind: !before
				? ('new' as const)
				: fields.length
					? ('changed' as const)
					: ('unchanged' as const),
			fields: fields.map((field) => ({
				field,
				before: before?.[field] ?? null,
				after: algorithm[field],
			})),
		};
	});
}

export async function previewCatalogImport(db: Database, csv: string) {
	const parsed = parseTrainerCsv(csv);
	const state = await db.trainerCatalogState.findUnique({where: {id: CATALOG_ID}});
	const existing = parsed.errors.length ? [] : await db.trainerAlgorithm.findMany();
	const changes = parsed.errors.length ? [] : catalogChanges(parsed.algorithms, existing);
	const revision = state?.revision ?? 0;
	const fingerprint = createHash('sha256')
		.update(JSON.stringify({csv, revision, changes}))
		.digest('hex');
	return {
		fingerprint,
		errors: parsed.errors,
		warnings: parsed.warnings,
		changes,
		total: parsed.algorithms.length,
		created: changes.filter((change) => change.kind === 'new').length,
		updated: changes.filter((change) => change.kind === 'changed').length,
		unchanged: changes.filter((change) => change.kind === 'unchanged').length,
	};
}

// Every catalog writer takes this lock. The initial import and source switch are atomic.
async function lockCatalog(tx: Prisma.TransactionClient) {
	await tx.trainerCatalogState.upsert({
		where: {id: CATALOG_ID},
		create: {id: CATALOG_ID},
		update: {},
	});
	await tx.$queryRaw`SELECT id FROM trainer_catalog_state WHERE id = ${CATALOG_ID} FOR UPDATE`;
	return await tx.trainerCatalogState.findUniqueOrThrow({where: {id: CATALOG_ID}});
}

export async function importCatalog(db: PrismaClient, csv: string, fingerprint: string) {
	return db.$transaction(
		async (tx) => {
			const state = await lockCatalog(tx);
			const preview = await previewCatalogImport(tx, csv);
			if (preview.errors.length)
				throw new TRPCError({
					code: 'BAD_REQUEST',
					message: 'CSV contains errors. Review a new preview.',
				});
			if (preview.fingerprint !== fingerprint)
				throw new TRPCError({
					code: 'CONFLICT',
					message: 'The catalog or file changed. Preview the CSV again before importing.',
				});
			const algorithms = parseTrainerCsv(csv).algorithms;
			const changedIds = new Set(
				preview.changes
					.filter((change) => change.kind !== 'unchanged')
					.map((change) => change.id),
			);
			for (const algorithm of algorithms) {
				if (!changedIds.has(algorithm.id)) continue;
				await tx.trainerAlgorithm.upsert({
					where: {id: algorithm.id},
					create: algorithm,
					update: algorithm,
				});
			}
			if (changedIds.size || !state.initialized_at) {
				await tx.trainerCatalogState.update({
					where: {id: CATALOG_ID},
					data: {
						initialized_at: state.initialized_at ?? new Date(),
						revision: {increment: 1},
					},
				});
			}
			return {
				created: preview.created,
				updated: preview.updated,
				unchanged: preview.unchanged,
				total: await tx.trainerAlgorithm.count(),
			};
		},
		{timeout: 120000, maxWait: 15000},
	);
}

export async function saveCatalogAlgorithm(
	db: PrismaClient,
	input: {algorithm: CatalogAlgorithm; revision: number; creating: boolean},
) {
	return db.$transaction(async (tx) => {
		const state = await lockCatalog(tx);
		if (!state.initialized_at)
			throw new TRPCError({
				code: 'PRECONDITION_FAILED',
				message: 'Import your CSV to initialize the catalog first.',
			});
		if (state.revision !== input.revision)
			throw new TRPCError({
				code: 'CONFLICT',
				message: 'The catalog changed. Reload the editor before saving.',
			});
		const algorithm = trainerAlgorithmSchema.parse(input.algorithm);
		const existing = await tx.trainerAlgorithm.findUnique({where: {id: algorithm.id}});
		if (input.creating && existing)
			throw new TRPCError({code: 'CONFLICT', message: 'This algorithm ID already exists.'});
		if (!input.creating && !existing)
			throw new TRPCError({code: 'NOT_FOUND', message: 'Algorithm not found.'});
		if (existing && catalogChanges([algorithm], [existing])[0].kind === 'unchanged')
			return existing;
		const saved = input.creating
			? await tx.trainerAlgorithm.create({data: algorithm})
			: await tx.trainerAlgorithm.update({where: {id: algorithm.id}, data: algorithm});
		await tx.trainerCatalogState.update({
			where: {id: CATALOG_ID},
			data: {revision: {increment: 1}},
		});
		return saved;
	});
}
