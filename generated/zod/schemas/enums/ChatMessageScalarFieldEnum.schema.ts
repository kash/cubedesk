import * as z from 'zod';

export const ChatMessageScalarFieldEnumSchema = z.enum(['id', 'user_id', 'match_session_id', 'message', 'created_at', 'bad_words', 'raw_message'])

export type ChatMessageScalarFieldEnum = z.infer<typeof ChatMessageScalarFieldEnumSchema>;