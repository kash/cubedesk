import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GameSessionCountOrderByAggregateInputObjectSchema as GameSessionCountOrderByAggregateInputObjectSchema } from './GameSessionCountOrderByAggregateInput.schema';
import { GameSessionAvgOrderByAggregateInputObjectSchema as GameSessionAvgOrderByAggregateInputObjectSchema } from './GameSessionAvgOrderByAggregateInput.schema';
import { GameSessionMaxOrderByAggregateInputObjectSchema as GameSessionMaxOrderByAggregateInputObjectSchema } from './GameSessionMaxOrderByAggregateInput.schema';
import { GameSessionMinOrderByAggregateInputObjectSchema as GameSessionMinOrderByAggregateInputObjectSchema } from './GameSessionMinOrderByAggregateInput.schema';
import { GameSessionSumOrderByAggregateInputObjectSchema as GameSessionSumOrderByAggregateInputObjectSchema } from './GameSessionSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  match_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  game_type: SortOrderSchema.optional(),
  solve_count: SortOrderSchema.optional(),
  total_time: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => GameSessionCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => GameSessionAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => GameSessionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => GameSessionMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => GameSessionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const GameSessionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.GameSessionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionOrderByWithAggregationInput>;
export const GameSessionOrderByWithAggregationInputObjectZodSchema = makeSchema();
