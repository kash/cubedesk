import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  min_players: SortOrderSchema.optional(),
  max_players: SortOrderSchema.optional(),
  match_type: SortOrderSchema.optional(),
  custom_match: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  created_by_id: SortOrderSchema.optional(),
  rated: SortOrderSchema.optional()
}).strict();
export const MatchSessionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MatchSessionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionCountOrderByAggregateInput>;
export const MatchSessionCountOrderByAggregateInputObjectZodSchema = makeSchema();
