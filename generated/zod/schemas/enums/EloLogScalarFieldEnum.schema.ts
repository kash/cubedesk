import * as z from 'zod';

export const EloLogScalarFieldEnumSchema = z.enum(['id', 'opponent_id', 'cube_type', 'elo_change', 'updated_at', 'created_at', 'match_id', 'player_id', 'opponent_new_elo_rating', 'opponent_new_game_count', 'player_new_elo_rating', 'player_new_game_count', 'refunded_at'])

export type EloLogScalarFieldEnum = z.infer<typeof EloLogScalarFieldEnumSchema>;