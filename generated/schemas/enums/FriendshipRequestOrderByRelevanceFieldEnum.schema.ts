import * as z from 'zod';

export const FriendshipRequestOrderByRelevanceFieldEnumSchema = z.enum(['id', 'from_id', 'to_id'])

export type FriendshipRequestOrderByRelevanceFieldEnum = z.infer<typeof FriendshipRequestOrderByRelevanceFieldEnumSchema>;