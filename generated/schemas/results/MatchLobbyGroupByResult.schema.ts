import * as z from 'zod';
export const MatchLobbyGroupByResultSchema = z.array(z.object({
  id: z.string(),
  user_id: z.string(),
  cube_type: z.string(),
  player_count: z.number().int(),
  elo: z.number().int(),
  created_at: z.date(),
  client_id: z.string(),
  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    cube_type: z.number(),
    game_type: z.number(),
    player_count: z.number(),
    elo: z.number(),
    created_at: z.number(),
    client_id: z.number(),
    user: z.number()
  }).optional(),
  _sum: z.object({
    player_count: z.number().nullable(),
    elo: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    player_count: z.number().nullable(),
    elo: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    cube_type: z.string().nullable(),
    player_count: z.number().int().nullable(),
    elo: z.number().int().nullable(),
    created_at: z.date().nullable(),
    client_id: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    cube_type: z.string().nullable(),
    player_count: z.number().int().nullable(),
    elo: z.number().int().nullable(),
    created_at: z.date().nullable(),
    client_id: z.string().nullable()
  }).nullable().optional()
}));