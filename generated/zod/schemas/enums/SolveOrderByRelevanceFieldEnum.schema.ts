import * as z from 'zod';

export const SolveOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'cube_type', 'scramble', 'session_id', 'notes', 'trainer_name', 'smart_turns', 'smart_device_id', 'match_id', 'match_participant_id', 'share_code', 'game_session_id', 'training_session_id'])

export type SolveOrderByRelevanceFieldEnum = z.infer<typeof SolveOrderByRelevanceFieldEnumSchema>;