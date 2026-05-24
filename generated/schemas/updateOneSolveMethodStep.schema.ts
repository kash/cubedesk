import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveMethodStepSelectObjectSchema as SolveMethodStepSelectObjectSchema } from './objects/SolveMethodStepSelect.schema';
import { SolveMethodStepIncludeObjectSchema as SolveMethodStepIncludeObjectSchema } from './objects/SolveMethodStepInclude.schema';
import { SolveMethodStepUpdateInputObjectSchema as SolveMethodStepUpdateInputObjectSchema } from './objects/SolveMethodStepUpdateInput.schema';
import { SolveMethodStepUncheckedUpdateInputObjectSchema as SolveMethodStepUncheckedUpdateInputObjectSchema } from './objects/SolveMethodStepUncheckedUpdateInput.schema';
import { SolveMethodStepWhereUniqueInputObjectSchema as SolveMethodStepWhereUniqueInputObjectSchema } from './objects/SolveMethodStepWhereUniqueInput.schema';

export const SolveMethodStepUpdateOneSchema: z.ZodType<Prisma.SolveMethodStepUpdateArgs> = z.object({ select: SolveMethodStepSelectObjectSchema.optional(), include: SolveMethodStepIncludeObjectSchema.optional(), data: z.union([SolveMethodStepUpdateInputObjectSchema, SolveMethodStepUncheckedUpdateInputObjectSchema]), where: SolveMethodStepWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SolveMethodStepUpdateArgs>;

export const SolveMethodStepUpdateOneZodSchema = z.object({ select: SolveMethodStepSelectObjectSchema.optional(), include: SolveMethodStepIncludeObjectSchema.optional(), data: z.union([SolveMethodStepUpdateInputObjectSchema, SolveMethodStepUncheckedUpdateInputObjectSchema]), where: SolveMethodStepWhereUniqueInputObjectSchema }).strict();