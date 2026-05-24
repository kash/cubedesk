import * as z from 'zod';

export const ChatMessageOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'match_session_id', 'message', 'raw_message'])

export type ChatMessageOrderByRelevanceFieldEnum = z.infer<typeof ChatMessageOrderByRelevanceFieldEnumSchema>;