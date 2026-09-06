import * as z from 'zod';

export const UserAccountScalarFieldEnumSchema = z.enum(['id', 'email', 'password', 'join_ip', 'join_country', 'admin', 'created_at', 'username', 'verified', 'banned_forever', 'banned_until', 'offline_hash', 'unsub_id', 'last_solve_at'])

export type UserAccountScalarFieldEnum = z.infer<typeof UserAccountScalarFieldEnumSchema>;