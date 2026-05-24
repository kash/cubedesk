import * as z from 'zod';
// prettier-ignore
export const MatchModelSchema = z.object({
    id: z.string(),
    winner_id: z.string().nullable(),
    created_at: z.date(),
    link_code: z.string(),
    match_session_id: z.string(),
    ended_at: z.date().nullable(),
    started_at: z.date().nullable(),
    spectate_code: z.string().nullable(),
    aborted: z.boolean(),
    elo_log: z.array(z.unknown()),
    game_session: z.array(z.unknown()),
    match_session: z.unknown(),
    winner: z.unknown().nullable(),
    participants: z.array(z.unknown()),
    solves: z.array(z.unknown())
}).strict();

export type MatchPureType = z.infer<typeof MatchModelSchema>;
