import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AdViewOrderByRelevanceFieldEnumSchema } from '../enums/AdViewOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([AdViewOrderByRelevanceFieldEnumSchema, AdViewOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const AdViewOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.AdViewOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.AdViewOrderByRelevanceInput>;
export const AdViewOrderByRelevanceInputObjectZodSchema = makeSchema();
