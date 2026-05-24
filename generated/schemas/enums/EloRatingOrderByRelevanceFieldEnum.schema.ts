import * as z from 'zod';

export const EloRatingOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'profile_id'])

export type EloRatingOrderByRelevanceFieldEnum = z.infer<typeof EloRatingOrderByRelevanceFieldEnumSchema>;