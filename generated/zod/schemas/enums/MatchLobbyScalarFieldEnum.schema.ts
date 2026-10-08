import * as z from 'zod';

export const MatchLobbyScalarFieldEnumSchema = z.enum(['id', 'user_id', 'event_type', 'game_type', 'player_count', 'elo', 'created_at', 'client_id'])

export type MatchLobbyScalarFieldEnum = z.infer<typeof MatchLobbyScalarFieldEnumSchema>;