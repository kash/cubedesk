import * as z from 'zod';

export const CustomTrainerDownloadOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'creator_id', 'new_trainer_id', 'source_trainer_id'])

export type CustomTrainerDownloadOrderByRelevanceFieldEnum = z.infer<typeof CustomTrainerDownloadOrderByRelevanceFieldEnumSchema>;