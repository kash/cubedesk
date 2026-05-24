import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveMethodStepUpdateManyMutationInputObjectSchema as SolveMethodStepUpdateManyMutationInputObjectSchema } from './objects/SolveMethodStepUpdateManyMutationInput.schema';
import { SolveMethodStepWhereInputObjectSchema as SolveMethodStepWhereInputObjectSchema } from './objects/SolveMethodStepWhereInput.schema';

export const SolveMethodStepUpdateManySchema: z.ZodType<Prisma.SolveMethodStepUpdateManyArgs> = z.object({ data: SolveMethodStepUpdateManyMutationInputObjectSchema, where: SolveMethodStepWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SolveMethodStepUpdateManyArgs>;

export const SolveMethodStepUpdateManyZodSchema = z.object({ data: SolveMethodStepUpdateManyMutationInputObjectSchema, where: SolveMethodStepWhereInputObjectSchema.optional() }).strict();