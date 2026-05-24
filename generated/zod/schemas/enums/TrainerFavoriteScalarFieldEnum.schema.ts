import * as z from 'zod';

export const TrainerFavoriteScalarFieldEnumSchema = z.enum(['id', 'cube_key', 'user_id', 'created_at'])

export type TrainerFavoriteScalarFieldEnum = z.infer<typeof TrainerFavoriteScalarFieldEnumSchema>;