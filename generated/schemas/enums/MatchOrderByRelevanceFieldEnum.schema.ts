import * as z from 'zod';

export const MatchOrderByRelevanceFieldEnumSchema = z.enum(['id', 'winner_id', 'link_code', 'match_session_id', 'spectate_code'])

export type MatchOrderByRelevanceFieldEnum = z.infer<typeof MatchOrderByRelevanceFieldEnumSchema>;