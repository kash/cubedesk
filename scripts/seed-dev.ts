import 'dotenv/config';
import {validateSeedEnvironment, buildSeedData} from './seed-dev-data';

async function main() {
	// Validate before importing or constructing any database client. Never force NODE_ENV here.
	const connectionString = validateSeedEnvironment(process.env);
	const args = process.argv.slice(2).filter((arg) => arg !== '--');
	if (args.length !== 2 || args[0] !== '--username' || !args[1].trim()) {
		throw new Error('Usage: pnpm seed:dev --username YOUR_LOCAL_USERNAME');
	}
	const {PrismaClient} = await import('../generated/prisma/client');
	const {PrismaPg} = await import('@prisma/adapter-pg');
	const prisma = new PrismaClient({adapter: new PrismaPg({connectionString})});
	try {
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
	// Database errors can contain connection details; only show our own validation errors.
	console.error(
		error instanceof Error && error.constructor === Error
			? error.message
			: 'Seeding failed; transaction rolled back. Check your local database connection and schema.',
	);
	process.exitCode = 1;
});
