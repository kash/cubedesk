import * as z from 'zod';
export const GameOptionsGroupByResultSchema = z.array(z.object({
  id: z.string(),
  game_session_id: z.string(),
  match_session_id: z.string(),
  cube_type: z.string(),
  elimination_starting_time_seconds: z.number().int(),
  elimination_percent_change_rate: z.number().int(),
  head_to_head_target_win_count: z.number().int(),
  gauntlet_time_multiplier: z.number(),
  created_at: z.date(),
  _count: z.object({
    id: z.number(),
    game_session_id: z.number(),
    match_session_id: z.number(),
    game_type: z.number(),
    cube_type: z.number(),
    elimination_starting_time_seconds: z.number(),
    elimination_percent_change_rate: z.number(),
    head_to_head_target_win_count: z.number(),
    gauntlet_time_multiplier: z.number(),
    created_at: z.number(),
    game_session: z.number(),
    match_session: z.number()
  }).optional(),
  _sum: z.object({
    elimination_starting_time_seconds: z.number().nullable(),
    elimination_percent_change_rate: z.number().nullable(),
    head_to_head_target_win_count: z.number().nullable(),
    gauntlet_time_multiplier: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    elimination_starting_time_seconds: z.number().nullable(),
    elimination_percent_change_rate: z.number().nullable(),
    head_to_head_target_win_count: z.number().nullable(),
    gauntlet_time_multiplier: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    game_session_id: z.string().nullable(),
    match_session_id: z.string().nullable(),
    cube_type: z.string().nullable(),
    elimination_starting_time_seconds: z.number().int().nullable(),
    elimination_percent_change_rate: z.number().int().nullable(),
    head_to_head_target_win_count: z.number().int().nullable(),
    gauntlet_time_multiplier: z.number().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    game_session_id: z.string().nullable(),
    match_session_id: z.string().nullable(),
    cube_type: z.string().nullable(),
    elimination_starting_time_seconds: z.number().int().nullable(),
    elimination_percent_change_rate: z.number().int().nullable(),
    head_to_head_target_win_count: z.number().int().nullable(),
    gauntlet_time_multiplier: z.number().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()
}));