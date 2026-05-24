import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopSolveWhereInputObjectSchema as TopSolveWhereInputObjectSchema } from './objects/TopSolveWhereInput.schema';

export const TopSolveDeleteManySchema: z.ZodType<Prisma.TopSolveDeleteManyArgs> = z.object({ where: TopSolveWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TopSolveDeleteManyArgs>;

export const TopSolveDeleteManyZodSchema = z.object({ where: TopSolveWhereInputObjectSchema.optional() }).strict();