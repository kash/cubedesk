import * as z from 'zod';
export const ChatMessageCreateResultSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  match_session_id: z.string().optional(),
  message: z.string(),
  created_at: z.date(),
  bad_words: z.boolean(),
  raw_message: z.string().optional(),
  match_session: z.unknown().optional(),
  user: z.unknown()
});