import {PrismaClient} from '@/generated/prisma/client';
import {PrismaPg} from '@prisma/adapter-pg';

let prisma: PrismaClient;

export function initPrisma() {
	prisma = new PrismaClient({
		adapter: new PrismaPg({connectionString: process.env.DATABASE_URL}),
	});
}

export function getPrisma() {
	return prisma;
}
