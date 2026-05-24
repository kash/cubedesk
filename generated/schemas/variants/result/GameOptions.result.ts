import * as z from 'zod';
import { GameTypeSchema } from '../../enums/GameType.schema';
// prettier-ignore
export const GameOptionsResultSchema = z.object({
    id: z.string(),
    game_session_id: z.string().nullable(),
    match_session_id: z.string().nullable(),
    game_type: GameTypeSchema,
    cube_type: z.string(),
    elimination_starting_time_seconds: z.number().int(),
    elimination_percent_change_rate: z.number().int(),
    head_to_head_target_win_count: z.number().int(),
    gauntlet_time_multiplier: z.number(),
    created_at: z.date(),
    game_session: z.unknown().nullable(),
    match_session: z.unknown().nullable()
}).strict();

export type GameOptionsResultType = z.infer<typeof GameOptionsResultSchema>;
