import * as z from 'zod';
// prettier-ignore
export const EloLogModelSchema = z.object({
    id: z.string(),
    opponent_id: z.string().nullable(),
    cube_type: z.string(),
    elo_change: z.number().int(),
    updated_at: z.date(),
    created_at: z.date(),
    match_id: z.string().nullable(),
    player_id: z.string(),
    opponent_new_elo_rating: z.number().int(),
    opponent_new_game_count: z.number().int().nullable(),
    player_new_elo_rating: z.number().int(),
    player_new_game_count: z.number().int(),
    refunded_at: z.date().nullable(),
    match: z.unknown().nullable(),
    opponent: z.unknown().nullable(),
    player: z.unknown()
}).strict();

export type EloLogPureType = z.infer<typeof EloLogModelSchema>;
