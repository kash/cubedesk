import * as z from 'zod';

export const BanLogOrderByRelevanceFieldEnumSchema = z.enum(['id', 'created_by_id', 'banned_user_id', 'reason'])

export type BanLogOrderByRelevanceFieldEnum = z.infer<typeof BanLogOrderByRelevanceFieldEnumSchema>;