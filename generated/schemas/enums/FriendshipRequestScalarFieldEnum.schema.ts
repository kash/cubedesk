import * as z from 'zod';

export const FriendshipRequestScalarFieldEnumSchema = z.enum(['id', 'from_id', 'to_id', 'created_at', 'accepted_at'])

export type FriendshipRequestScalarFieldEnum = z.infer<typeof FriendshipRequestScalarFieldEnumSchema>;