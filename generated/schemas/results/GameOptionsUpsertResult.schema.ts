import * as z from 'zod';
export const GameOptionsUpsertResultSchema = z.object({
  id: z.string(),
  game_session_id: z.string().optional(),
  match_session_id: z.string().optional(),
  game_type: z.unknown(),
  cube_type: z.string(),
  elimination_starting_time_seconds: z.number().int(),
  elimination_percent_change_rate: z.number().int(),
  head_to_head_target_win_count: z.number().int(),
  gauntlet_time_multiplier: z.number(),
  created_at: z.date(),
  game_session: z.unknown().optional(),
  match_session: z.unknown().optional()
});