import * as z from 'zod';
export const ChatMessageFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  user_id: z.string(),
  match_session_id: z.string().optional(),
  message: z.string(),
  created_at: z.date(),
  bad_words: z.boolean(),
  raw_message: z.string().optional(),
  match_session: z.unknown().optional(),
  user: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});