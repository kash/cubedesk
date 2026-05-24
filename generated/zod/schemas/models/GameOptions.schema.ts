import * as z from 'zod';
import { GameTypeSchema } from '../enums/GameType.schema';

export const GameOptionsSchema = z.object({
  id: z.string(),
  game_session_id: z.string().nullable(),
  match_session_id: z.string().nullable(),
  game_type: GameTypeSchema,
  cube_type: z.string().default("333"),
  elimination_starting_time_seconds: z.number().int().default(30),
  elimination_percent_change_rate: z.number().int().default(5),
  head_to_head_target_win_count: z.number().int().default(5),
  gauntlet_time_multiplier: z.number().default(1.0),
  created_at: z.date(),
});

export type GameOptions = z.infer<typeof GameOptionsSchema>;
