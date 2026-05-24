import * as z from 'zod';
// prettier-ignore
export const EloLogInputSchema = z.object({
    id: z.string(),
    opponent_id: z.string().optional().nullable(),
    cube_type: z.string(),
    elo_change: z.number().int(),
    updated_at: z.date(),
    created_at: z.date(),
    match_id: z.string().optional().nullable(),
    player_id: z.string(),
    opponent_new_elo_rating: z.number().int(),
    opponent_new_game_count: z.number().int().optional().nullable(),
    player_new_elo_rating: z.number().int(),
    player_new_game_count: z.number().int(),
    refunded_at: z.date().optional().nullable(),
    match: z.unknown().optional().nullable(),
    opponent: z.unknown().optional().nullable(),
    player: z.unknown()
}).strict();

export type EloLogInputType = z.infer<typeof EloLogInputSchema>;
