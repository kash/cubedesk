import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopSolveOrderByRelevanceFieldEnumSchema } from '../enums/TopSolveOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([TopSolveOrderByRelevanceFieldEnumSchema, TopSolveOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const TopSolveOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.TopSolveOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveOrderByRelevanceInput>;
export const TopSolveOrderByRelevanceInputObjectZodSchema = makeSchema();
