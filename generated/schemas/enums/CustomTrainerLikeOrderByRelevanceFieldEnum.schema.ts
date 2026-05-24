import * as z from 'zod';

export const CustomTrainerLikeOrderByRelevanceFieldEnumSchema = z.enum(['id', 'custom_trainer_id', 'user_id', 'creator_id'])

export type CustomTrainerLikeOrderByRelevanceFieldEnum = z.infer<typeof CustomTrainerLikeOrderByRelevanceFieldEnumSchema>;