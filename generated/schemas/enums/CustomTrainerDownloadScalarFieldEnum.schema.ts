import * as z from 'zod';

export const CustomTrainerDownloadScalarFieldEnumSchema = z.enum(['id', 'user_id', 'creator_id', 'created_at', 'new_trainer_id', 'source_trainer_id'])

export type CustomTrainerDownloadScalarFieldEnum = z.infer<typeof CustomTrainerDownloadScalarFieldEnumSchema>;