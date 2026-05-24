import * as z from 'zod';

export const EloLogOrderByRelevanceFieldEnumSchema = z.enum(['id', 'opponent_id', 'cube_type', 'match_id', 'player_id'])

export type EloLogOrderByRelevanceFieldEnum = z.infer<typeof EloLogOrderByRelevanceFieldEnumSchema>;