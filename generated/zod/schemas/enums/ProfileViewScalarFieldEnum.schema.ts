import * as z from 'zod';

export const ProfileViewScalarFieldEnumSchema = z.enum(['id', 'viewer_id', 'profile_id', 'created_at', 'profile_user_id'])

export type ProfileViewScalarFieldEnum = z.infer<typeof ProfileViewScalarFieldEnumSchema>;