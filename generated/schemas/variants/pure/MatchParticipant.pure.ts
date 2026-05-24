import * as z from 'zod';
// prettier-ignore
export const MatchParticipantModelSchema = z.object({
    id: z.string(),
    match_id: z.string(),
    user_id: z.string(),
    created_at: z.date(),
    resigned: z.boolean(),
    forfeited: z.boolean(),
    position: z.number().int(),
    won: z.boolean(),
    lost: z.boolean(),
    abandoned: z.boolean(),
    aborted: z.boolean(),
    match: z.unknown(),
    user: z.unknown(),
    solves: z.array(z.unknown())
}).strict();

export type MatchParticipantPureType = z.infer<typeof MatchParticipantModelSchema>;
