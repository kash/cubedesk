import * as z from 'zod';
export const EloLogFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  opponent_id: z.string().optional(),
  cube_type: z.string(),
  elo_change: z.number().int(),
  updated_at: z.date(),
  created_at: z.date(),
  match_id: z.string().optional(),
  player_id: z.string(),
  opponent_new_elo_rating: z.number().int(),
  opponent_new_game_count: z.number().int().optional(),
  player_new_elo_rating: z.number().int(),
  player_new_game_count: z.number().int(),
  refunded_at: z.date().optional(),
  match: z.unknown().optional(),
  opponent: z.unknown().optional(),
  player: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});