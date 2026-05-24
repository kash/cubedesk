import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveMethodStepSelectObjectSchema as SolveMethodStepSelectObjectSchema } from './objects/SolveMethodStepSelect.schema';
import { SolveMethodStepIncludeObjectSchema as SolveMethodStepIncludeObjectSchema } from './objects/SolveMethodStepInclude.schema';
import { SolveMethodStepWhereUniqueInputObjectSchema as SolveMethodStepWhereUniqueInputObjectSchema } from './objects/SolveMethodStepWhereUniqueInput.schema';
import { SolveMethodStepCreateInputObjectSchema as SolveMethodStepCreateInputObjectSchema } from './objects/SolveMethodStepCreateInput.schema';
import { SolveMethodStepUncheckedCreateInputObjectSchema as SolveMethodStepUncheckedCreateInputObjectSchema } from './objects/SolveMethodStepUncheckedCreateInput.schema';
import { SolveMethodStepUpdateInputObjectSchema as SolveMethodStepUpdateInputObjectSchema } from './objects/SolveMethodStepUpdateInput.schema';
import { SolveMethodStepUncheckedUpdateInputObjectSchema as SolveMethodStepUncheckedUpdateInputObjectSchema } from './objects/SolveMethodStepUncheckedUpdateInput.schema';

export const SolveMethodStepUpsertOneSchema: z.ZodType<Prisma.SolveMethodStepUpsertArgs> = z.object({ select: SolveMethodStepSelectObjectSchema.optional(), include: SolveMethodStepIncludeObjectSchema.optional(), where: SolveMethodStepWhereUniqueInputObjectSchema, create: z.union([ SolveMethodStepCreateInputObjectSchema, SolveMethodStepUncheckedCreateInputObjectSchema ]), update: z.union([ SolveMethodStepUpdateInputObjectSchema, SolveMethodStepUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SolveMethodStepUpsertArgs>;

export const SolveMethodStepUpsertOneZodSchema = z.object({ select: SolveMethodStepSelectObjectSchema.optional(), include: SolveMethodStepIncludeObjectSchema.optional(), where: SolveMethodStepWhereUniqueInputObjectSchema, create: z.union([ SolveMethodStepCreateInputObjectSchema, SolveMethodStepUncheckedCreateInputObjectSchema ]), update: z.union([ SolveMethodStepUpdateInputObjectSchema, SolveMethodStepUncheckedUpdateInputObjectSchema ]) }).strict();