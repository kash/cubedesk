import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AlgorithmOverrideOrderByRelevanceFieldEnumSchema } from '../enums/AlgorithmOverrideOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([AlgorithmOverrideOrderByRelevanceFieldEnumSchema, AlgorithmOverrideOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const AlgorithmOverrideOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideOrderByRelevanceInput>;
export const AlgorithmOverrideOrderByRelevanceInputObjectZodSchema = makeSchema();
