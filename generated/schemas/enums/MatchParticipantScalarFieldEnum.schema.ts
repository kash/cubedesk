import * as z from 'zod';

export const MatchParticipantScalarFieldEnumSchema = z.enum(['id', 'match_id', 'user_id', 'created_at', 'resigned', 'forfeited', 'position', 'won', 'lost', 'abandoned', 'aborted'])

export type MatchParticipantScalarFieldEnum = z.infer<typeof MatchParticipantScalarFieldEnumSchema>;