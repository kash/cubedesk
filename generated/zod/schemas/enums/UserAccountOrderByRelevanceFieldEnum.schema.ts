import * as z from 'zod';

export const UserAccountOrderByRelevanceFieldEnumSchema = z.enum(['id', 'email', 'password', 'join_ip', 'join_country', 'username', 'offline_hash', 'unsub_id'])

export type UserAccountOrderByRelevanceFieldEnum = z.infer<typeof UserAccountOrderByRelevanceFieldEnumSchema>;