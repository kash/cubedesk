import * as z from 'zod';

export const GameSessionScalarFieldEnumSchema = z.enum(['id', 'user_id', 'match_id', 'game_type', 'solve_count', 'total_time', 'created_at'])

export type GameSessionScalarFieldEnum = z.infer<typeof GameSessionScalarFieldEnumSchema>;