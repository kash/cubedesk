import * as z from 'zod';

export const BadgeOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'badge_type_id'])

export type BadgeOrderByRelevanceFieldEnum = z.infer<typeof BadgeOrderByRelevanceFieldEnumSchema>;