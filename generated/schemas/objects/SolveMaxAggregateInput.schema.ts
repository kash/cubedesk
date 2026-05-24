import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  time: z.literal(true).optional(),
  raw_time: z.literal(true).optional(),
  cube_type: z.literal(true).optional(),
  scramble: z.literal(true).optional(),
  session_id: z.literal(true).optional(),
  started_at: z.literal(true).optional(),
  ended_at: z.literal(true).optional(),
  dnf: z.literal(true).optional(),
  plus_two: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  trainer_name: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  bulk: z.literal(true).optional(),
  inspection_time: z.literal(true).optional(),
  is_smart_cube: z.literal(true).optional(),
  smart_put_down_time: z.literal(true).optional(),
  smart_turns: z.literal(true).optional(),
  smart_turn_count: z.literal(true).optional(),
  smart_device_id: z.literal(true).optional(),
  match_id: z.literal(true).optional(),
  match_participant_id: z.literal(true).optional(),
  share_code: z.literal(true).optional(),
  from_timer: z.literal(true).optional(),
  game_session_id: z.literal(true).optional(),
  custom_scramble: z.literal(true).optional(),
  training_session_id: z.literal(true).optional()
}).strict();
export const SolveMaxAggregateInputObjectSchema: z.ZodType<Prisma.SolveMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SolveMaxAggregateInputType>;
export const SolveMaxAggregateInputObjectZodSchema = makeSchema();
