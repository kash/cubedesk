import {PrismaClient} from '@prisma/client';

let prisma: PrismaClient | undefined;

export function getPrismaClient() {
	if (prisma) {
		return prisma;
	}

	let url;
	if (process.env.DATABASE_URL) {
		url = process.env.DATABASE_URL as string;
	} else {
		const secret = JSON.parse(process.env.DATABASE_SECRET as string);
		const username = secret.username as string;
		const password = secret.password as string;
		const hostname = process.env.DATABASE_HOST as string;
		const port = parseInt(process.env.DATABASE_PORT as string);
		const database = process.env.DATABASE_NAME as string;

		url = `postgresql://${username}:${encodeURIComponent(password)}@${hostname}:${port}/${database}`;
	}

	const client = new PrismaClient({
		datasources: {
			db: {
				url,
			},
		},
	});

	prisma = client;

	return client;
}
