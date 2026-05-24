import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  time: z.number(),
  raw_time: z.number().optional().nullable(),
  cube_type: z.string().optional().nullable(),
  scramble: z.string().optional().nullable(),
  session_id: z.string().optional().nullable(),
  started_at: z.bigint().optional().nullable(),
  ended_at: z.bigint().optional().nullable(),
  dnf: z.boolean().optional(),
  plus_two: z.boolean().optional(),
  notes: z.string().optional().nullable(),
  trainer_name: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  bulk: z.boolean().optional(),
  inspection_time: z.number().optional().nullable(),
  is_smart_cube: z.boolean().optional(),
  smart_put_down_time: z.number().optional().nullable(),
  smart_turns: z.string().optional().nullable(),
  smart_turn_count: z.number().int().optional().nullable(),
  smart_device_id: z.string().optional().nullable(),
  match_id: z.string().optional().nullable(),
  share_code: z.string().optional().nullable(),
  from_timer: z.boolean().optional(),
  game_session_id: z.string().optional().nullable(),
  custom_scramble: z.boolean().optional(),
  training_session_id: z.string().optional().nullable()
}).strict();
export const SolveCreateManyMatch_participantInputObjectSchema: z.ZodType<Prisma.SolveCreateManyMatch_participantInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateManyMatch_participantInput>;
export const SolveCreateManyMatch_participantInputObjectZodSchema = makeSchema();
