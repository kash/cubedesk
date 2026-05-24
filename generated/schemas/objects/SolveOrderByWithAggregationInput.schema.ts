import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SolveCountOrderByAggregateInputObjectSchema as SolveCountOrderByAggregateInputObjectSchema } from './SolveCountOrderByAggregateInput.schema';
import { SolveAvgOrderByAggregateInputObjectSchema as SolveAvgOrderByAggregateInputObjectSchema } from './SolveAvgOrderByAggregateInput.schema';
import { SolveMaxOrderByAggregateInputObjectSchema as SolveMaxOrderByAggregateInputObjectSchema } from './SolveMaxOrderByAggregateInput.schema';
import { SolveMinOrderByAggregateInputObjectSchema as SolveMinOrderByAggregateInputObjectSchema } from './SolveMinOrderByAggregateInput.schema';
import { SolveSumOrderByAggregateInputObjectSchema as SolveSumOrderByAggregateInputObjectSchema } from './SolveSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  time: SortOrderSchema.optional(),
  raw_time: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cube_type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  scramble: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  session_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  started_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ended_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dnf: SortOrderSchema.optional(),
  plus_two: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  trainer_name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  bulk: SortOrderSchema.optional(),
  inspection_time: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  is_smart_cube: SortOrderSchema.optional(),
  smart_put_down_time: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  smart_turns: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  smart_turn_count: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  smart_device_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  match_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  match_participant_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  share_code: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  from_timer: SortOrderSchema.optional(),
  game_session_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  custom_scramble: SortOrderSchema.optional(),
  training_session_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => SolveCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => SolveAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SolveMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SolveMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => SolveSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SolveOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SolveOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveOrderByWithAggregationInput>;
export const SolveOrderByWithAggregationInputObjectZodSchema = makeSchema();
