import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AlgorithmOverrideSelectObjectSchema as AlgorithmOverrideSelectObjectSchema } from './objects/AlgorithmOverrideSelect.schema';
import { AlgorithmOverrideCreateManyInputObjectSchema as AlgorithmOverrideCreateManyInputObjectSchema } from './objects/AlgorithmOverrideCreateManyInput.schema';

export const AlgorithmOverrideCreateManyAndReturnSchema: z.ZodType<Prisma.AlgorithmOverrideCreateManyAndReturnArgs> = z.object({ select: AlgorithmOverrideSelectObjectSchema.optional(), data: z.union([ AlgorithmOverrideCreateManyInputObjectSchema, z.array(AlgorithmOverrideCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AlgorithmOverrideCreateManyAndReturnArgs>;

export const AlgorithmOverrideCreateManyAndReturnZodSchema = z.object({ select: AlgorithmOverrideSelectObjectSchema.optional(), data: z.union([ AlgorithmOverrideCreateManyInputObjectSchema, z.array(AlgorithmOverrideCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();