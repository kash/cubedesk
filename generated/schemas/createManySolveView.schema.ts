import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveViewCreateManyInputObjectSchema as SolveViewCreateManyInputObjectSchema } from './objects/SolveViewCreateManyInput.schema';

export const SolveViewCreateManySchema: z.ZodType<Prisma.SolveViewCreateManyArgs> = z.object({ data: z.union([ SolveViewCreateManyInputObjectSchema, z.array(SolveViewCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SolveViewCreateManyArgs>;

export const SolveViewCreateManyZodSchema = z.object({ data: z.union([ SolveViewCreateManyInputObjectSchema, z.array(SolveViewCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();