import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MetricLogOrderByRelevanceFieldEnumSchema } from '../enums/MetricLogOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([MetricLogOrderByRelevanceFieldEnumSchema, MetricLogOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const MetricLogOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.MetricLogOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogOrderByRelevanceInput>;
export const MetricLogOrderByRelevanceInputObjectZodSchema = makeSchema();
