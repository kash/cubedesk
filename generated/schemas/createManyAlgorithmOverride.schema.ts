import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AlgorithmOverrideCreateManyInputObjectSchema as AlgorithmOverrideCreateManyInputObjectSchema } from './objects/AlgorithmOverrideCreateManyInput.schema';

export const AlgorithmOverrideCreateManySchema: z.ZodType<Prisma.AlgorithmOverrideCreateManyArgs> = z.object({ data: z.union([ AlgorithmOverrideCreateManyInputObjectSchema, z.array(AlgorithmOverrideCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AlgorithmOverrideCreateManyArgs>;

export const AlgorithmOverrideCreateManyZodSchema = z.object({ data: z.union([ AlgorithmOverrideCreateManyInputObjectSchema, z.array(AlgorithmOverrideCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();