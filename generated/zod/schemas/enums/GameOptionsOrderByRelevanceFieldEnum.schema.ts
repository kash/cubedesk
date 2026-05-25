import * as z from 'zod';

export const GameOptionsOrderByRelevanceFieldEnumSchema = z.enum(['id', 'game_session_id', 'match_session_id', 'cube_type'])

export type GameOptionsOrderByRelevanceFieldEnum = z.infer<typeof GameOptionsOrderByRelevanceFieldEnumSchema>;