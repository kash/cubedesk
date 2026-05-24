import * as z from 'zod';
// prettier-ignore
export const ChatMessageModelSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    match_session_id: z.string().nullable(),
    message: z.string(),
    created_at: z.date(),
    bad_words: z.boolean(),
    raw_message: z.string().nullable(),
    match_session: z.unknown().nullable(),
    user: z.unknown()
}).strict();

export type ChatMessagePureType = z.infer<typeof ChatMessageModelSchema>;
