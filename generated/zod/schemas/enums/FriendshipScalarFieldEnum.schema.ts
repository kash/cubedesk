import * as z from 'zod';

export const FriendshipScalarFieldEnumSchema = z.enum(['id', 'user_id', 'other_user_id', 'friendship_request_id', 'created_at'])

export type FriendshipScalarFieldEnum = z.infer<typeof FriendshipScalarFieldEnumSchema>;