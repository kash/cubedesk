import * as z from 'zod';
export const GameSessionUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  user_id: z.string(),
  match_id: z.string().optional(),
  game_type: z.unknown(),
  solve_count: z.number().int(),
  total_time: z.number(),
  created_at: z.date(),
  game_options: z.unknown().optional(),
  match: z.unknown().optional(),
  user: z.unknown(),
  solves: z.array(z.unknown())
}));