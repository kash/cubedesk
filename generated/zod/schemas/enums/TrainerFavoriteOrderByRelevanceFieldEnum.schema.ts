import * as z from 'zod';

export const TrainerFavoriteOrderByRelevanceFieldEnumSchema = z.enum(['id', 'cube_key', 'user_id'])

export type TrainerFavoriteOrderByRelevanceFieldEnum = z.infer<typeof TrainerFavoriteOrderByRelevanceFieldEnumSchema>;