import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AlgorithmOverrideUpdateManyMutationInputObjectSchema as AlgorithmOverrideUpdateManyMutationInputObjectSchema } from './objects/AlgorithmOverrideUpdateManyMutationInput.schema';
import { AlgorithmOverrideWhereInputObjectSchema as AlgorithmOverrideWhereInputObjectSchema } from './objects/AlgorithmOverrideWhereInput.schema';

export const AlgorithmOverrideUpdateManySchema: z.ZodType<Prisma.AlgorithmOverrideUpdateManyArgs> = z.object({ data: AlgorithmOverrideUpdateManyMutationInputObjectSchema, where: AlgorithmOverrideWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AlgorithmOverrideUpdateManyArgs>;

export const AlgorithmOverrideUpdateManyZodSchema = z.object({ data: AlgorithmOverrideUpdateManyMutationInputObjectSchema, where: AlgorithmOverrideWhereInputObjectSchema.optional() }).strict();