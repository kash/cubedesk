import * as z from 'zod';

export const MatchScalarFieldEnumSchema = z.enum(['id', 'winner_id', 'created_at', 'link_code', 'match_session_id', 'ended_at', 'started_at', 'spectate_code', 'aborted'])

export type MatchScalarFieldEnum = z.infer<typeof MatchScalarFieldEnumSchema>;