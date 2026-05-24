import * as z from 'zod';

export const FriendshipOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'other_user_id', 'friendship_request_id'])

export type FriendshipOrderByRelevanceFieldEnum = z.infer<typeof FriendshipOrderByRelevanceFieldEnumSchema>;