import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveOrderByRelevanceFieldEnumSchema } from '../enums/SolveOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([SolveOrderByRelevanceFieldEnumSchema, SolveOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const SolveOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.SolveOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveOrderByRelevanceInput>;
export const SolveOrderByRelevanceInputObjectZodSchema = makeSchema();
