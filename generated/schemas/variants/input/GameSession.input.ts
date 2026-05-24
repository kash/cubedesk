import * as z from 'zod';
import { GameTypeSchema } from '../../enums/GameType.schema';
// prettier-ignore
export const GameSessionInputSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    match_id: z.string().optional().nullable(),
    game_type: GameTypeSchema,
    solve_count: z.number().int(),
    total_time: z.number(),
    created_at: z.date(),
    game_options: z.unknown().optional().nullable(),
    match: z.unknown().optional().nullable(),
    user: z.unknown(),
    solves: z.array(z.unknown())
}).strict();

export type GameSessionInputType = z.infer<typeof GameSessionInputSchema>;
