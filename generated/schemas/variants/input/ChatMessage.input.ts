import * as z from 'zod';
// prettier-ignore
export const ChatMessageInputSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    match_session_id: z.string().optional().nullable(),
    message: z.string(),
    created_at: z.date(),
    bad_words: z.boolean(),
    raw_message: z.string().optional().nullable(),
    match_session: z.unknown().optional().nullable(),
    user: z.unknown()
}).strict();

export type ChatMessageInputType = z.infer<typeof ChatMessageInputSchema>;
