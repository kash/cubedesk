import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageOrderByRelevanceFieldEnumSchema } from '../enums/TopAverageOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([TopAverageOrderByRelevanceFieldEnumSchema, TopAverageOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const TopAverageOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.TopAverageOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageOrderByRelevanceInput>;
export const TopAverageOrderByRelevanceInputObjectZodSchema = makeSchema();
