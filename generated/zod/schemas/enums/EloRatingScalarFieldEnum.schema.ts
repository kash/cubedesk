import * as z from 'zod';

export const EloRatingScalarFieldEnumSchema = z.enum(['id', 'user_id', 'elo_222_rating', 'elo_333_rating', 'elo_444_rating', 'updated_at', 'created_at', 'elo_overall_rating', 'profile_id', 'games_222_count', 'games_333_count', 'games_444_count', 'games_overall_count'])

export type EloRatingScalarFieldEnum = z.infer<typeof EloRatingScalarFieldEnumSchema>;