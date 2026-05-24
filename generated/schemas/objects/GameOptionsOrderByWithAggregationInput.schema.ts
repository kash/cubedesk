import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GameOptionsCountOrderByAggregateInputObjectSchema as GameOptionsCountOrderByAggregateInputObjectSchema } from './GameOptionsCountOrderByAggregateInput.schema';
import { GameOptionsAvgOrderByAggregateInputObjectSchema as GameOptionsAvgOrderByAggregateInputObjectSchema } from './GameOptionsAvgOrderByAggregateInput.schema';
import { GameOptionsMaxOrderByAggregateInputObjectSchema as GameOptionsMaxOrderByAggregateInputObjectSchema } from './GameOptionsMaxOrderByAggregateInput.schema';
import { GameOptionsMinOrderByAggregateInputObjectSchema as GameOptionsMinOrderByAggregateInputObjectSchema } from './GameOptionsMinOrderByAggregateInput.schema';
import { GameOptionsSumOrderByAggregateInputObjectSchema as GameOptionsSumOrderByAggregateInputObjectSchema } from './GameOptionsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  game_session_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  match_session_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  game_type: SortOrderSchema.optional(),
  cube_type: SortOrderSchema.optional(),
  elimination_starting_time_seconds: SortOrderSchema.optional(),
  elimination_percent_change_rate: SortOrderSchema.optional(),
  head_to_head_target_win_count: SortOrderSchema.optional(),
  gauntlet_time_multiplier: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => GameOptionsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => GameOptionsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => GameOptionsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => GameOptionsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => GameOptionsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const GameOptionsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.GameOptionsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsOrderByWithAggregationInput>;
export const GameOptionsOrderByWithAggregationInputObjectZodSchema = makeSchema();
