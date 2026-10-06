/**
 * Runs in CI before `prisma migrate deploy`. The first deploy of the event_type backfill outlived the CI runner, so
 * Prisma recorded the migration as failed even though Postgres kept running it to completion. Prisma refuses to deploy
 * anything while a migration is marked failed, so this finishes the backfill if needed and marks it applied.
 *
 * Does nothing once the migration is applied. Remove it along with cube_type in phase 2.
 */
import {execFileSync} from 'node:child_process';

const MIGRATION = '20261006120100_backfill_event_type';
const TABLES = [
	'setting',
	'game_options',
	'elo_log',
	'match_lobby',
	'top_solve',
	'top_average',
	'custom_trainer',
	'trainer_algorithm',
	'demo_solve',
	'solve',
];

async function main() {
	const {PrismaClient} = await import('../generated/prisma/client');
	const {PrismaPg} = await import('@prisma/adapter-pg');
	const prisma = new PrismaClient({adapter: new PrismaPg({connectionString: process.env.DATABASE_URL})});

	try {
		const failed = await prisma.$queryRaw<{id: string}[]>`
			SELECT id FROM _prisma_migrations
			WHERE migration_name = ${MIGRATION} AND finished_at IS NULL AND rolled_back_at IS NULL`;
		if (!failed.length) {
			console.log(`${MIGRATION} is not marked failed, nothing to resolve`);
			return;
		}

		// The original run keeps going after its CI runner dies, and holds Prisma's migration lock until it ends
		const running = await prisma.$queryRaw<{pid: number}[]>`
			SELECT pid FROM pg_stat_activity
			WHERE pid <> pg_backend_pid() AND state <> 'idle' AND query LIKE '%Copies cube_type into event_type%'`;
		if (running.length) {
			throw new Error(
				`${MIGRATION} is still running in Postgres (pid ${running.map((row) => row.pid).join(', ')}). ` +
					'Re-run this deploy after it finishes.',
			);
		}

		// Only rows the original run didn't reach are updated, which should be few or none
		for (const table of TABLES) {
			const updated = await prisma.$executeRawUnsafe(
				`UPDATE "${table}" SET event_type = cube_type WHERE event_type IS DISTINCT FROM cube_type`,
			);
			console.log(`${table}: backfilled ${updated} remaining rows`);
		}
	} finally {
		await prisma.$disconnect();
	}

	execFileSync('pnpm', ['exec', 'prisma', 'migrate', 'resolve', '--applied', MIGRATION], {stdio: 'inherit'});
}

main().catch((error: unknown) => {
	console.error(error);
	process.exit(1);
});
