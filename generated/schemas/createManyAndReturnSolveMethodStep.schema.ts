import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveMethodStepSelectObjectSchema as SolveMethodStepSelectObjectSchema } from './objects/SolveMethodStepSelect.schema';
import { SolveMethodStepCreateManyInputObjectSchema as SolveMethodStepCreateManyInputObjectSchema } from './objects/SolveMethodStepCreateManyInput.schema';

export const SolveMethodStepCreateManyAndReturnSchema: z.ZodType<Prisma.SolveMethodStepCreateManyAndReturnArgs> = z.object({ select: SolveMethodStepSelectObjectSchema.optional(), data: z.union([ SolveMethodStepCreateManyInputObjectSchema, z.array(SolveMethodStepCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SolveMethodStepCreateManyAndReturnArgs>;

export const SolveMethodStepCreateManyAndReturnZodSchema = z.object({ select: SolveMethodStepSelectObjectSchema.optional(), data: z.union([ SolveMethodStepCreateManyInputObjectSchema, z.array(SolveMethodStepCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();