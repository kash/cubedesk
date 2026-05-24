import * as z from 'zod';
// prettier-ignore
export const EloRatingModelSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    elo_222_rating: z.number().int(),
    elo_333_rating: z.number().int(),
    elo_444_rating: z.number().int(),
    updated_at: z.date(),
    created_at: z.date(),
    elo_overall_rating: z.number().int(),
    profile_id: z.string(),
    games_222_count: z.number().int(),
    games_333_count: z.number().int(),
    games_444_count: z.number().int(),
    games_overall_count: z.number().int(),
    profile: z.unknown(),
    user: z.unknown()
}).strict();

export type EloRatingPureType = z.infer<typeof EloRatingModelSchema>;
