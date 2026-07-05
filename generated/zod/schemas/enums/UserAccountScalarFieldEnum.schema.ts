import * as z from 'zod';

export const UserAccountScalarFieldEnumSchema = z.enum(['id', 'email', 'password', 'first_name', 'join_ip', 'join_country', 'admin', 'created_at', 'last_name', 'username', 'verified', 'banned_forever', 'banned_until', 'mod', 'offline_hash', 'unsub_id', 'last_solve_at'])

export type UserAccountScalarFieldEnum = z.infer<typeof UserAccountScalarFieldEnumSchema>;