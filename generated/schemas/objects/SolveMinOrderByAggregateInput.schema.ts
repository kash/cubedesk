import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  time: SortOrderSchema.optional(),
  raw_time: SortOrderSchema.optional(),
  cube_type: SortOrderSchema.optional(),
  scramble: SortOrderSchema.optional(),
  session_id: SortOrderSchema.optional(),
  started_at: SortOrderSchema.optional(),
  ended_at: SortOrderSchema.optional(),
  dnf: SortOrderSchema.optional(),
  plus_two: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  trainer_name: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  bulk: SortOrderSchema.optional(),
  inspection_time: SortOrderSchema.optional(),
  is_smart_cube: SortOrderSchema.optional(),
  smart_put_down_time: SortOrderSchema.optional(),
  smart_turns: SortOrderSchema.optional(),
  smart_turn_count: SortOrderSchema.optional(),
  smart_device_id: SortOrderSchema.optional(),
  match_id: SortOrderSchema.optional(),
  match_participant_id: SortOrderSchema.optional(),
  share_code: SortOrderSchema.optional(),
  from_timer: SortOrderSchema.optional(),
  game_session_id: SortOrderSchema.optional(),
  custom_scramble: SortOrderSchema.optional(),
  training_session_id: SortOrderSchema.optional()
}).strict();
export const SolveMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SolveMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveMinOrderByAggregateInput>;
export const SolveMinOrderByAggregateInputObjectZodSchema = makeSchema();
