import 'dotenv/config';
import {buildSeedData, validateSeedEnvironment} from './seed-dev-data';

const USAGE = `Usage:
  pnpm seed:dev                          Seed demo accounts, community data and the trainer catalog
  pnpm seed:dev --username YOUR_USERNAME Add sample solve history to an account you signed up locally`;

async function main() {
	// Validate before importing or constructing any database client. Never force NODE_ENV here.
	const connectionString = validateSeedEnvironment(process.env);
	const args = process.argv.slice(2).filter((arg) => arg !== '--');
	if (args.length && (args.length !== 2 || args[0] !== '--username' || !args[1].trim())) {
		throw new Error(USAGE);
	}
	const {PrismaClient} = await import('../generated/prisma/client');
	const {PrismaPg} = await import('@prisma/adapter-pg');
	const prisma = new PrismaClient({adapter: new PrismaPg({connectionString})});
	try {
		if (!args.length) {
			const {seedWorld, SEED_PASSWORD} = await import('./seed-dev-world');
			const added = await seedWorld(prisma);
			console.log(
				`Seeded ${Object.entries(added)
					.map(([name, count]) => `${count} ${name}`)
					.join(', ')} (existing rows kept).\n` +
					`Log in as agent@cubedesk.test (admin), alice@cubedesk.test, newbie@cubedesk.test, ... ` +
					`with password "${SEED_PASSWORD}".`,
			);
			return;
		}

		const user = await prisma.userAccount.findUnique({
			where: {username: args[1]},
			select: {id: true},
		});
		if (!user)
			throw new Error(
				'Local user not found. Sign up in the local app first, then use that username.',
			);
		const {sessions, solves} = buildSeedData(user.id);
		const result = await prisma.$transaction(
			async (tx) => {
				const addedSessions = await tx.session.createMany({
					data: sessions,
					skipDuplicates: true,
				});
				const addedSolves = await tx.solve.createMany({data: solves, skipDuplicates: true});
				return {sessions: addedSessions.count, solves: addedSolves.count};
			},
			{timeout: 30000},
		);
		console.log(
			`Added ${result.solves} solves and ${result.sessions} sessions. Existing data preserved. Reload the local app to see your stats.`,
		);
	} finally {
		await prisma.$disconnect();
	}
}

main().catch((error: unknown) => {
	// Database errors can contain connection details; only show our own validation errors, and the
	// code and summary line of Prisma's query errors.
	let message =
		'Seeding failed; transaction rolled back. Check your local database connection and schema.';
	if (error instanceof Error && error.constructor === Error) {
		message = error.message;
	} else if (error instanceof Error && 'code' in error && /^P\d{4}$/.test(String(error.code))) {
		message += `\n${error.code}: ${error.message.trim().split('\n').pop()}`;
	}
	console.error(message);
	process.exitCode = 1;
});
