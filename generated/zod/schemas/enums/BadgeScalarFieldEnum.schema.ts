import * as z from 'zod';

export const BadgeScalarFieldEnumSchema = z.enum(['id', 'user_id', 'badge_type_id', 'created_at'])

export type BadgeScalarFieldEnum = z.infer<typeof BadgeScalarFieldEnumSchema>;