import * as z from 'zod';

export const SolveSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  time: z.number(),
  raw_time: z.number().nullable(),
  cube_type: z.string().nullable(),
  scramble: z.string().nullable(),
  session_id: z.string().nullable(),
  started_at: z.bigint().nullable(),
  ended_at: z.bigint().nullable(),
  dnf: z.boolean(),
  plus_two: z.boolean(),
  notes: z.string().nullable(),
  trainer_name: z.string().nullable(),
  created_at: z.date(),
  bulk: z.boolean(),
  inspection_time: z.number().nullable(),
  is_smart_cube: z.boolean(),
  smart_put_down_time: z.number().nullable(),
  smart_turns: z.string().nullable(),
  smart_turn_count: z.number().int().nullable(),
  smart_device_id: z.string().nullable(),
  match_id: z.string().nullable(),
  match_participant_id: z.string().nullable(),
  share_code: z.string().nullable(),
  from_timer: z.boolean().default(true),
  game_session_id: z.string().nullable(),
  custom_scramble: z.boolean(),
  training_session_id: z.string().nullable(),
});

export type Solve = z.infer<typeof SolveSchema>;
