import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveMethodStepSelectObjectSchema as SolveMethodStepSelectObjectSchema } from './objects/SolveMethodStepSelect.schema';
import { SolveMethodStepUpdateManyMutationInputObjectSchema as SolveMethodStepUpdateManyMutationInputObjectSchema } from './objects/SolveMethodStepUpdateManyMutationInput.schema';
import { SolveMethodStepWhereInputObjectSchema as SolveMethodStepWhereInputObjectSchema } from './objects/SolveMethodStepWhereInput.schema';

export const SolveMethodStepUpdateManyAndReturnSchema: z.ZodType<Prisma.SolveMethodStepUpdateManyAndReturnArgs> = z.object({ select: SolveMethodStepSelectObjectSchema.optional(), data: SolveMethodStepUpdateManyMutationInputObjectSchema, where: SolveMethodStepWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SolveMethodStepUpdateManyAndReturnArgs>;

export const SolveMethodStepUpdateManyAndReturnZodSchema = z.object({ select: SolveMethodStepSelectObjectSchema.optional(), data: SolveMethodStepUpdateManyMutationInputObjectSchema, where: SolveMethodStepWhereInputObjectSchema.optional() }).strict();