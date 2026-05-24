import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  match_id: SortOrderSchema.optional(),
  game_type: SortOrderSchema.optional(),
  solve_count: SortOrderSchema.optional(),
  total_time: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const GameSessionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GameSessionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionMaxOrderByAggregateInput>;
export const GameSessionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
