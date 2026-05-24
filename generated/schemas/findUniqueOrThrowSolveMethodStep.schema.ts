import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveMethodStepSelectObjectSchema as SolveMethodStepSelectObjectSchema } from './objects/SolveMethodStepSelect.schema';
import { SolveMethodStepIncludeObjectSchema as SolveMethodStepIncludeObjectSchema } from './objects/SolveMethodStepInclude.schema';
import { SolveMethodStepWhereUniqueInputObjectSchema as SolveMethodStepWhereUniqueInputObjectSchema } from './objects/SolveMethodStepWhereUniqueInput.schema';

export const SolveMethodStepFindUniqueOrThrowSchema: z.ZodType<Prisma.SolveMethodStepFindUniqueOrThrowArgs> = z.object({ select: SolveMethodStepSelectObjectSchema.optional(), include: SolveMethodStepIncludeObjectSchema.optional(), where: SolveMethodStepWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SolveMethodStepFindUniqueOrThrowArgs>;

export const SolveMethodStepFindUniqueOrThrowZodSchema = z.object({ select: SolveMethodStepSelectObjectSchema.optional(), include: SolveMethodStepIncludeObjectSchema.optional(), where: SolveMethodStepWhereUniqueInputObjectSchema }).strict();