import * as z from 'zod';

export const GameSessionOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'match_id'])

export type GameSessionOrderByRelevanceFieldEnum = z.infer<typeof GameSessionOrderByRelevanceFieldEnumSchema>;