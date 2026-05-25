import * as z from 'zod';
import { GameTypeSchema } from '../enums/GameType.schema';

export const GameSessionSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  match_id: z.string().nullable(),
  game_type: GameTypeSchema,
  solve_count: z.number().int(),
  total_time: z.number(),
  created_at: z.date(),
});

export type GameSession = z.infer<typeof GameSessionSchema>;
