import * as z from 'zod';

export const CustomTrainerLikeScalarFieldEnumSchema = z.enum(['id', 'custom_trainer_id', 'user_id', 'created_at', 'creator_id'])

export type CustomTrainerLikeScalarFieldEnum = z.infer<typeof CustomTrainerLikeScalarFieldEnumSchema>;