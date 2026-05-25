import * as z from 'zod';

export const GameOptionsScalarFieldEnumSchema = z.enum(['id', 'game_session_id', 'match_session_id', 'game_type', 'cube_type', 'elimination_starting_time_seconds', 'elimination_percent_change_rate', 'head_to_head_target_win_count', 'gauntlet_time_multiplier', 'created_at'])

export type GameOptionsScalarFieldEnum = z.infer<typeof GameOptionsScalarFieldEnumSchema>;