import * as z from 'zod';

export const BadgeTypeScalarFieldEnumSchema = z.enum(['id', 'name', 'priority', 'color', 'created_at', 'description', 'created_by_id'])

export type BadgeTypeScalarFieldEnum = z.infer<typeof BadgeTypeScalarFieldEnumSchema>;