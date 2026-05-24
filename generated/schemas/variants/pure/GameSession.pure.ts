import * as z from 'zod';
import { GameTypeSchema } from '../../enums/GameType.schema';
// prettier-ignore
export const GameSessionModelSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    match_id: z.string().nullable(),
    game_type: GameTypeSchema,
    solve_count: z.number().int(),
    total_time: z.number(),
    created_at: z.date(),
    game_options: z.unknown().nullable(),
    match: z.unknown().nullable(),
    user: z.unknown(),
    solves: z.array(z.unknown())
}).strict();

export type GameSessionPureType = z.infer<typeof GameSessionModelSchema>;
