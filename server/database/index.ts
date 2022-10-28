import {PrismaClient} from '@prisma/client';

let prisma: PrismaClient;

export function initPrisma() {
	prisma = new PrismaClient();
}

export function getPrisma() {
	return prisma;
}
