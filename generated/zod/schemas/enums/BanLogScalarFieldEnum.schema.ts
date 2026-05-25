import * as z from 'zod';

export const BanLogScalarFieldEnumSchema = z.enum(['id', 'created_by_id', 'banned_user_id', 'reason', 'active', 'banned_until', 'minutes', 'forever', 'created_at'])

export type BanLogScalarFieldEnum = z.infer<typeof BanLogScalarFieldEnumSchema>;