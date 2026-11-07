import {PrismaClient} from '@/generated/prisma/client';
import {PrismaPg} from '@prisma/adapter-pg';

declare global {
	var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient | undefined;

// export function initPrisma() {
// 	prisma = new PrismaClient({
// 		adapter: new PrismaPg({connectionString: process.env.DATABASE_URL}),
// 	});
// }

export function getPrisma() {
	if (process.env.NODE_ENV === 'development') {
		if (globalThis.prisma) {
			return globalThis.prisma;
		}
	} else {
		if (prisma) {
			return prisma;
		}
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

	const adapter = new PrismaPg({
		connectionString: url,
		max: readPositiveIntEnv('DATABASE_POOL_MAX', 10),
		idleTimeoutMillis: readPositiveIntEnv('DATABASE_POOL_IDLE_TIMEOUT_MS', 30000),
		connectionTimeoutMillis: readPositiveIntEnv('DATABASE_POOL_CONNECT_TIMEOUT_MS', 10000),
	});
	const client = new PrismaClient({
		adapter,
		log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
	});

	if (process.env.NODE_ENV === 'development') {
		globalThis.prisma = client;
	} else {
		prisma = client;
	}

	return client;
}

function readPositiveIntEnv(name: string, fallback: number): number {
	const value = parseInt(process.env[name] ?? '', 10);
	return Number.isFinite(value) && value > 0 ? value : fallback;
}
