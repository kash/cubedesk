import 'dotenv/config';
import {PrismaClient} from '@/generated/prisma/client';
import {PrismaPg} from '@prisma/adapter-pg';
import {readFileSync, readdirSync} from 'node:fs';
import {resolve} from 'node:path';
import {
	CATALOG_ID,
	importCatalog,
	previewCatalogImport,
	saveCatalogAlgorithm,
} from '@/server/models/trainer/catalog';

// Opt-in: real PostgreSQL transactions in an isolated schema, never the app catalog.
const suite = process.env.TRAINER_DB_TESTS === '1' ? describe : describe.skip;
suite('trainer catalog PostgreSQL integration', () => {
	const schema = `trainer_catalog_test_${process.pid}_${Date.now()}`;
	let setupDb: PrismaClient;
	let db: PrismaClient;
	const csv = readFileSync(resolve('trainer-data.csv'), 'utf8');
	beforeAll(async () => {
		setupDb = new PrismaClient({
			adapter: new PrismaPg({connectionString: process.env.DATABASE_URL}),
		});
		await setupDb.$executeRawUnsafe(`CREATE SCHEMA "${schema}"`);
		db = new PrismaClient({
			adapter: new PrismaPg(
				{connectionString: process.env.DATABASE_URL, options: `-c search_path=${schema}`},
				{schema},
			),
		});
		const migration = readdirSync(resolve('prisma/migrations')).find((name) =>
			name.endsWith('_add_trainer_catalog'),
		)!;
		for (const statement of readFileSync(
			resolve('prisma/migrations', migration, 'migration.sql'),
			'utf8',
		)
			.split(';')
			.filter((part) => part.trim())) {
			await db.$executeRawUnsafe(statement);
		}
	}, 30000);
	afterAll(async () => {
		await db?.$disconnect();
		if (setupDb) {
			await setupDb.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`);
			await setupDb.$disconnect();
		}
	});

	test('imports 740 rows atomically, then reimports without changing timestamps or revision', async () => {
		const preview = await previewCatalogImport(db, csv);
		expect(preview.errors).toEqual([]);
		expect(preview.created).toBe(740);
		await expect(importCatalog(db, csv, preview.fingerprint)).resolves.toMatchObject({
			created: 740,
			total: 740,
		});
		expect(await db.trainerAlgorithm.count({where: {active: true}})).toBe(740);
		const before = await db.trainerAlgorithm.findMany({orderBy: {id: 'asc'}});
		const state = await db.trainerCatalogState.findUniqueOrThrow({where: {id: CATALOG_ID}});
		expect(state.initialized_at).not.toBeNull();
		const repeat = await previewCatalogImport(db, csv);
		await expect(importCatalog(db, csv, repeat.fingerprint)).resolves.toMatchObject({
			created: 0,
			updated: 0,
			unchanged: 740,
		});
		expect(await db.trainerAlgorithm.findMany({orderBy: {id: 'asc'}})).toEqual(before);
		expect(await db.trainerCatalogState.findUnique({where: {id: CATALOG_ID}})).toEqual(state);
	}, 120000);

	test('rejects stale previews and merges without removing absent rows', async () => {
		const upload = 'id,name,cube_type,algo_type\nnew_case,New,333,OLL';
		const stale = await previewCatalogImport(db, upload);
		const state = await db.trainerCatalogState.findUniqueOrThrow({where: {id: CATALOG_ID}});
		const algorithm = await db.trainerAlgorithm.findFirstOrThrow();
		await saveCatalogAlgorithm(db, {
			algorithm: {...algorithm, active: false},
			revision: state.revision,
			creating: false,
		});
		await expect(importCatalog(db, upload, stale.fingerprint)).rejects.toMatchObject({
			code: 'CONFLICT',
		});
		const fresh = await previewCatalogImport(db, upload);
		await importCatalog(db, upload, fresh.fingerprint);
		expect(await db.trainerAlgorithm.count()).toBe(741);
		expect(await db.trainerAlgorithm.findUnique({where: {id: algorithm.id}})).toMatchObject({
			active: false,
		});
	});

	test('database failure rolls back every row and catalog revision', async () => {
		const before = await db.trainerCatalogState.findUnique({where: {id: CATALOG_ID}});
		const upload =
			'id,name,cube_type,algo_type\nrollback_ok,Okay,333,OLL\nrollback_fail,Fail,333,OLL';
		await db.$executeRawUnsafe(
			`ALTER TABLE "${schema}".trainer_algorithm ADD CONSTRAINT test_reject CHECK (id <> 'rollback_fail')`,
		);
		const preview = await previewCatalogImport(db, upload);
		await expect(importCatalog(db, upload, preview.fingerprint)).rejects.toThrow();
		expect(await db.trainerAlgorithm.count({where: {id: {startsWith: 'rollback_'}}})).toBe(0);
		expect(await db.trainerCatalogState.findUnique({where: {id: CATALOG_ID}})).toEqual(before);
	});

	test('invalid uploads cannot change the catalog', async () => {
		const before = await db.trainerAlgorithm.count();
		const bad = 'id,name,cube_type,algo_type\nbad,Bad,nope,OLL';
		const preview = await previewCatalogImport(db, bad);
		await expect(importCatalog(db, bad, preview.fingerprint)).rejects.toMatchObject({
			code: 'BAD_REQUEST',
		});
		expect(await db.trainerAlgorithm.count()).toBe(before);
	});
});
