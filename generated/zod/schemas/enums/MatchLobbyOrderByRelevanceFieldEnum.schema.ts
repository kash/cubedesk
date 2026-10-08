import * as z from 'zod';

export const MatchLobbyOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'event_type', 'client_id'])

export type MatchLobbyOrderByRelevanceFieldEnum = z.infer<typeof MatchLobbyOrderByRelevanceFieldEnumSchema>;