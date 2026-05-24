import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AlgorithmOverrideSelectObjectSchema as AlgorithmOverrideSelectObjectSchema } from './objects/AlgorithmOverrideSelect.schema';
import { AlgorithmOverrideUpdateManyMutationInputObjectSchema as AlgorithmOverrideUpdateManyMutationInputObjectSchema } from './objects/AlgorithmOverrideUpdateManyMutationInput.schema';
import { AlgorithmOverrideWhereInputObjectSchema as AlgorithmOverrideWhereInputObjectSchema } from './objects/AlgorithmOverrideWhereInput.schema';

export const AlgorithmOverrideUpdateManyAndReturnSchema: z.ZodType<Prisma.AlgorithmOverrideUpdateManyAndReturnArgs> = z.object({ select: AlgorithmOverrideSelectObjectSchema.optional(), data: AlgorithmOverrideUpdateManyMutationInputObjectSchema, where: AlgorithmOverrideWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AlgorithmOverrideUpdateManyAndReturnArgs>;

export const AlgorithmOverrideUpdateManyAndReturnZodSchema = z.object({ select: AlgorithmOverrideSelectObjectSchema.optional(), data: AlgorithmOverrideUpdateManyMutationInputObjectSchema, where: AlgorithmOverrideWhereInputObjectSchema.optional() }).strict();