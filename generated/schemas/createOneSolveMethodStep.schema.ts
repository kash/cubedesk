import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveMethodStepSelectObjectSchema as SolveMethodStepSelectObjectSchema } from './objects/SolveMethodStepSelect.schema';
import { SolveMethodStepIncludeObjectSchema as SolveMethodStepIncludeObjectSchema } from './objects/SolveMethodStepInclude.schema';
import { SolveMethodStepCreateInputObjectSchema as SolveMethodStepCreateInputObjectSchema } from './objects/SolveMethodStepCreateInput.schema';
import { SolveMethodStepUncheckedCreateInputObjectSchema as SolveMethodStepUncheckedCreateInputObjectSchema } from './objects/SolveMethodStepUncheckedCreateInput.schema';

export const SolveMethodStepCreateOneSchema: z.ZodType<Prisma.SolveMethodStepCreateArgs> = z.object({ select: SolveMethodStepSelectObjectSchema.optional(), include: SolveMethodStepIncludeObjectSchema.optional(), data: z.union([SolveMethodStepCreateInputObjectSchema, SolveMethodStepUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SolveMethodStepCreateArgs>;

export const SolveMethodStepCreateOneZodSchema = z.object({ select: SolveMethodStepSelectObjectSchema.optional(), include: SolveMethodStepIncludeObjectSchema.optional(), data: z.union([SolveMethodStepCreateInputObjectSchema, SolveMethodStepUncheckedCreateInputObjectSchema]) }).strict();