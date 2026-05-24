import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveMethodStepSelectObjectSchema as SolveMethodStepSelectObjectSchema } from './objects/SolveMethodStepSelect.schema';
import { SolveMethodStepIncludeObjectSchema as SolveMethodStepIncludeObjectSchema } from './objects/SolveMethodStepInclude.schema';
import { SolveMethodStepWhereUniqueInputObjectSchema as SolveMethodStepWhereUniqueInputObjectSchema } from './objects/SolveMethodStepWhereUniqueInput.schema';

export const SolveMethodStepDeleteOneSchema: z.ZodType<Prisma.SolveMethodStepDeleteArgs> = z.object({ select: SolveMethodStepSelectObjectSchema.optional(), include: SolveMethodStepIncludeObjectSchema.optional(), where: SolveMethodStepWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SolveMethodStepDeleteArgs>;

export const SolveMethodStepDeleteOneZodSchema = z.object({ select: SolveMethodStepSelectObjectSchema.optional(), include: SolveMethodStepIncludeObjectSchema.optional(), where: SolveMethodStepWhereUniqueInputObjectSchema }).strict();