import * as z from 'zod';

export const BadgeTypeOrderByRelevanceFieldEnumSchema = z.enum(['id', 'name', 'color', 'description', 'created_by_id'])

export type BadgeTypeOrderByRelevanceFieldEnum = z.infer<typeof BadgeTypeOrderByRelevanceFieldEnumSchema>;