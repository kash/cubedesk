import * as z from 'zod';

export const ChatMessageSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  match_session_id: z.string().nullable(),
  message: z.string(),
  created_at: z.date(),
  bad_words: z.boolean(),
  raw_message: z.string().nullable(),
});

export type ChatMessage = z.infer<typeof ChatMessageSchema>;
