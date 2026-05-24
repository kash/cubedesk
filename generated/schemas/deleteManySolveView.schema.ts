import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveViewWhereInputObjectSchema as SolveViewWhereInputObjectSchema } from './objects/SolveViewWhereInput.schema';

export const SolveViewDeleteManySchema: z.ZodType<Prisma.SolveViewDeleteManyArgs> = z.object({ where: SolveViewWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SolveViewDeleteManyArgs>;

export const SolveViewDeleteManyZodSchema = z.object({ where: SolveViewWhereInputObjectSchema.optional() }).strict();