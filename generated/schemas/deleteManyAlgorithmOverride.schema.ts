import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AlgorithmOverrideWhereInputObjectSchema as AlgorithmOverrideWhereInputObjectSchema } from './objects/AlgorithmOverrideWhereInput.schema';

export const AlgorithmOverrideDeleteManySchema: z.ZodType<Prisma.AlgorithmOverrideDeleteManyArgs> = z.object({ where: AlgorithmOverrideWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AlgorithmOverrideDeleteManyArgs>;

export const AlgorithmOverrideDeleteManyZodSchema = z.object({ where: AlgorithmOverrideWhereInputObjectSchema.optional() }).strict();