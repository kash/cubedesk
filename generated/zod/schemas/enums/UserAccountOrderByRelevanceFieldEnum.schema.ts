import * as z from 'zod';

export const UserAccountOrderByRelevanceFieldEnumSchema = z.enum(['id', 'email', 'password', 'first_name', 'join_ip', 'join_country', 'last_name', 'username', 'stripe_customer_id', 'offline_hash', 'unsub_id'])

export type UserAccountOrderByRelevanceFieldEnum = z.infer<typeof UserAccountOrderByRelevanceFieldEnumSchema>;