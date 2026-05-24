import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveMethodStepCreateManyInputObjectSchema as SolveMethodStepCreateManyInputObjectSchema } from './objects/SolveMethodStepCreateManyInput.schema';

export const SolveMethodStepCreateManySchema: z.ZodType<Prisma.SolveMethodStepCreateManyArgs> = z.object({ data: z.union([ SolveMethodStepCreateManyInputObjectSchema, z.array(SolveMethodStepCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SolveMethodStepCreateManyArgs>;

export const SolveMethodStepCreateManyZodSchema = z.object({ data: z.union([ SolveMethodStepCreateManyInputObjectSchema, z.array(SolveMethodStepCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();