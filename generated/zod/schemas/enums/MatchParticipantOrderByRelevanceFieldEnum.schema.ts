import * as z from 'zod';

export const MatchParticipantOrderByRelevanceFieldEnumSchema = z.enum(['id', 'match_id', 'user_id'])

export type MatchParticipantOrderByRelevanceFieldEnum = z.infer<typeof MatchParticipantOrderByRelevanceFieldEnumSchema>;