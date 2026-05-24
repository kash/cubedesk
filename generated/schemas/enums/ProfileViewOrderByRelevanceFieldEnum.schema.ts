import * as z from 'zod';

export const ProfileViewOrderByRelevanceFieldEnumSchema = z.enum(['id', 'viewer_id', 'profile_id', 'profile_user_id'])

export type ProfileViewOrderByRelevanceFieldEnum = z.infer<typeof ProfileViewOrderByRelevanceFieldEnumSchema>;