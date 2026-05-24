import * as z from 'zod';
export const MatchLobbyFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  user_id: z.string(),
  cube_type: z.string(),
  game_type: z.unknown(),
  player_count: z.number().int(),
  elo: z.number().int(),
  created_at: z.date(),
  client_id: z.string(),
  user: z.unknown()
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