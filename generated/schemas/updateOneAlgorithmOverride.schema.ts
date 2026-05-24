import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AlgorithmOverrideSelectObjectSchema as AlgorithmOverrideSelectObjectSchema } from './objects/AlgorithmOverrideSelect.schema';
import { AlgorithmOverrideIncludeObjectSchema as AlgorithmOverrideIncludeObjectSchema } from './objects/AlgorithmOverrideInclude.schema';
import { AlgorithmOverrideUpdateInputObjectSchema as AlgorithmOverrideUpdateInputObjectSchema } from './objects/AlgorithmOverrideUpdateInput.schema';
import { AlgorithmOverrideUncheckedUpdateInputObjectSchema as AlgorithmOverrideUncheckedUpdateInputObjectSchema } from './objects/AlgorithmOverrideUncheckedUpdateInput.schema';
import { AlgorithmOverrideWhereUniqueInputObjectSchema as AlgorithmOverrideWhereUniqueInputObjectSchema } from './objects/AlgorithmOverrideWhereUniqueInput.schema';

export const AlgorithmOverrideUpdateOneSchema: z.ZodType<Prisma.AlgorithmOverrideUpdateArgs> = z.object({ select: AlgorithmOverrideSelectObjectSchema.optional(), include: AlgorithmOverrideIncludeObjectSchema.optional(), data: z.union([AlgorithmOverrideUpdateInputObjectSchema, AlgorithmOverrideUncheckedUpdateInputObjectSchema]), where: AlgorithmOverrideWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AlgorithmOverrideUpdateArgs>;

export const AlgorithmOverrideUpdateOneZodSchema = z.object({ select: AlgorithmOverrideSelectObjectSchema.optional(), include: AlgorithmOverrideIncludeObjectSchema.optional(), data: z.union([AlgorithmOverrideUpdateInputObjectSchema, AlgorithmOverrideUncheckedUpdateInputObjectSchema]), where: AlgorithmOverrideWhereUniqueInputObjectSchema }).strict();