import * as z from 'zod';

export const SolveScalarFieldEnumSchema = z.enum(['id', 'user_id', 'time', 'raw_time', 'cube_type', 'scramble', 'session_id', 'started_at', 'ended_at', 'dnf', 'plus_two', 'notes', 'trainer_name', 'created_at', 'bulk', 'inspection_time', 'is_smart_cube', 'smart_put_down_time', 'smart_turns', 'smart_turn_count', 'smart_device_id', 'match_id', 'match_participant_id', 'share_code', 'from_timer', 'game_session_id', 'custom_scramble', 'training_session_id'])

export type SolveScalarFieldEnum = z.infer<typeof SolveScalarFieldEnumSchema>;