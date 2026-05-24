import * as z from 'zod';

export const MatchSessionScalarFieldEnumSchema = z.enum(['id', 'min_players', 'max_players', 'match_type', 'custom_match', 'created_at', 'created_by_id', 'rated'])

export type MatchSessionScalarFieldEnum = z.infer<typeof MatchSessionScalarFieldEnumSchema>;