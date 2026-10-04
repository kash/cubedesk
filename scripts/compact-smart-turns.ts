import 'dotenv/config';
import {decodeSmartTurns, encodeSmartTurns} from '../shared/smart_turns';

// Re-encodes legacy JSON smart_turns into the compact format. Runs after each production deploy until the cleanup
// PR removes it. Safe to stop and re-run: only rows that still hold JSON are touched.
//
// Usage: pnpm backfill:smart-turns [--dry-run] [--batch-size 1000]

async function main() {
	const connectionString = process.env.DATABASE_URL;
	if (!connectionString) throw new Error('DATABASE_URL is not set');

	const args = process.argv.slice(2).filter((arg) => arg !== '--');
	const dryRun = args.includes('--dry-run');
	const batchSizeIndex = args.indexOf('--batch-size');
	const batchSize = batchSizeIndex === -1 ? 1000 : Number(args[batchSizeIndex + 1]);

	const {PrismaClient} = await import('../generated/prisma/client');
	const {PrismaPg} = await import('@prisma/adapter-pg');
	const prisma = new PrismaClient({adapter: new PrismaPg({connectionString})});

	let converted = 0;
	let failed = 0;
	let bytesBefore = 0;
	let bytesAfter = 0;

	try {
		// Smart solves are a small share of all solves, so one pass to find them beats paging through every row
		const pending = await prisma.$queryRaw<{id: string}[]>`
			SELECT id FROM solve WHERE smart_turns LIKE '[%'
		`;
		console.log(`${pending.length} solves to convert`);

		for (let start = 0; start < pending.length; start += batchSize) {
			const batchIds = pending.slice(start, start + batchSize).map((row) => row.id);
			const rows = await prisma.$queryRaw<{id: string; smart_turns: string}[]>`
				SELECT id, smart_turns FROM solve WHERE id = ANY(${batchIds}::text[]) AND smart_turns LIKE '[%'
			`;

			const ids: string[] = [];
			const encoded: string[] = [];
			for (const row of rows) {
				try {
					const compact = encodeSmartTurns(decodeSmartTurns(row.smart_turns));
					ids.push(row.id);
					encoded.push(compact);
					bytesBefore += row.smart_turns.length;
					bytesAfter += compact.length;
				} catch (e) {
					failed += 1;
					console.warn(`Skipping ${row.id}: ${e instanceof Error ? e.message : e}`);
				}
			}

			// The LIKE guard leaves rows alone if they were rewritten since being read
			if (!dryRun && ids.length) {
				await prisma.$executeRaw`
					UPDATE solve SET smart_turns = v.smart_turns
					FROM unnest(${ids}::text[], ${encoded}::text[]) AS v(id, smart_turns)
					WHERE solve.id = v.id AND solve.smart_turns LIKE '[%'
				`;
			}

			converted += ids.length;
			console.log(`${converted} converted, ${failed} skipped`);
		}
	} finally {
		await prisma.$disconnect();
	}

	const saved = bytesBefore ? Math.round((1 - bytesAfter / bytesBefore) * 100) : 0;
	console.log(
		`${dryRun ? '[dry run] ' : ''}Done: ${converted} converted, ${failed} skipped. ` +
			`Raw size ${bytesBefore} -> ${bytesAfter} bytes (${saved}% smaller)`,
	);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
