import * as z from 'zod';
export const EloLogAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    opponent_id: z.number(),
    cube_type: z.number(),
    elo_change: z.number(),
    updated_at: z.number(),
    created_at: z.number(),
    match_id: z.number(),
    player_id: z.number(),
    opponent_new_elo_rating: z.number(),
    opponent_new_game_count: z.number(),
    player_new_elo_rating: z.number(),
    player_new_game_count: z.number(),
    refunded_at: z.number(),
    match: z.number(),
    opponent: z.number(),
    player: z.number()
  }).optional(),
  _sum: z.object({
    elo_change: z.number().nullable(),
    opponent_new_elo_rating: z.number().nullable(),
    opponent_new_game_count: z.number().nullable(),
    player_new_elo_rating: z.number().nullable(),
    player_new_game_count: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    elo_change: z.number().nullable(),
    opponent_new_elo_rating: z.number().nullable(),
    opponent_new_game_count: z.number().nullable(),
    player_new_elo_rating: z.number().nullable(),
    player_new_game_count: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    opponent_id: z.string().nullable(),
    cube_type: z.string().nullable(),
    elo_change: z.number().int().nullable(),
    updated_at: z.date().nullable(),
    created_at: z.date().nullable(),
    match_id: z.string().nullable(),
    player_id: z.string().nullable(),
    opponent_new_elo_rating: z.number().int().nullable(),
    opponent_new_game_count: z.number().int().nullable(),
    player_new_elo_rating: z.number().int().nullable(),
    player_new_game_count: z.number().int().nullable(),
    refunded_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    opponent_id: z.string().nullable(),
    cube_type: z.string().nullable(),
    elo_change: z.number().int().nullable(),
    updated_at: z.date().nullable(),
    created_at: z.date().nullable(),
    match_id: z.string().nullable(),
    player_id: z.string().nullable(),
    opponent_new_elo_rating: z.number().int().nullable(),
    opponent_new_game_count: z.number().int().nullable(),
    player_new_elo_rating: z.number().int().nullable(),
    player_new_game_count: z.number().int().nullable(),
    refunded_at: z.date().nullable()
  }).nullable().optional()});