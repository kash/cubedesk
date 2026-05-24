import * as z from 'zod';
// prettier-ignore
export const MatchInputSchema = z.object({
    id: z.string(),
    winner_id: z.string().optional().nullable(),
    created_at: z.date(),
    link_code: z.string(),
    match_session_id: z.string(),
    ended_at: z.date().optional().nullable(),
    started_at: z.date().optional().nullable(),
    spectate_code: z.string().optional().nullable(),
    aborted: z.boolean(),
    elo_log: z.array(z.unknown()),
    game_session: z.array(z.unknown()),
    match_session: z.unknown(),
    winner: z.unknown().optional().nullable(),
    participants: z.array(z.unknown()),
    solves: z.array(z.unknown())
}).strict();

export type MatchInputType = z.infer<typeof MatchInputSchema>;
