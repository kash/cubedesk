import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveCreateManyInputObjectSchema as SolveCreateManyInputObjectSchema } from './objects/SolveCreateManyInput.schema';

export const SolveCreateManySchema: z.ZodType<Prisma.SolveCreateManyArgs> = z.object({ data: z.union([ SolveCreateManyInputObjectSchema, z.array(SolveCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SolveCreateManyArgs>;

export const SolveCreateManyZodSchema = z.object({ data: z.union([ SolveCreateManyInputObjectSchema, z.array(SolveCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();