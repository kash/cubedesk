import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveMethodStepWhereInputObjectSchema as SolveMethodStepWhereInputObjectSchema } from './objects/SolveMethodStepWhereInput.schema';

export const SolveMethodStepDeleteManySchema: z.ZodType<Prisma.SolveMethodStepDeleteManyArgs> = z.object({ where: SolveMethodStepWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SolveMethodStepDeleteManyArgs>;

export const SolveMethodStepDeleteManyZodSchema = z.object({ where: SolveMethodStepWhereInputObjectSchema.optional() }).strict();