import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './objects/SolveWhereInput.schema';

export const SolveDeleteManySchema: z.ZodType<Prisma.SolveDeleteManyArgs> = z.object({ where: SolveWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SolveDeleteManyArgs>;

export const SolveDeleteManyZodSchema = z.object({ where: SolveWhereInputObjectSchema.optional() }).strict();