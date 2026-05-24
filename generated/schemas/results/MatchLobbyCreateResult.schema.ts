import * as z from 'zod';
export const MatchLobbyCreateResultSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  cube_type: z.string(),
  game_type: z.unknown(),
  player_count: z.number().int(),
  elo: z.number().int(),
  created_at: z.date(),
  client_id: z.string(),
  user: z.unknown()
});