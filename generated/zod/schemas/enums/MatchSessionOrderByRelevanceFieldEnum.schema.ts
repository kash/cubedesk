import * as z from 'zod';

export const MatchSessionOrderByRelevanceFieldEnumSchema = z.enum(['id', 'match_type', 'created_by_id'])

export type MatchSessionOrderByRelevanceFieldEnum = z.infer<typeof MatchSessionOrderByRelevanceFieldEnumSchema>;