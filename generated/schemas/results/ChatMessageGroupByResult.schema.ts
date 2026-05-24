import * as z from 'zod';
export const ChatMessageGroupByResultSchema = z.array(z.object({
  id: z.string(),
  user_id: z.string(),
  match_session_id: z.string(),
  message: z.string(),
  created_at: z.date(),
  bad_words: z.boolean(),
  raw_message: z.string(),
  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    match_session_id: z.number(),
    message: z.number(),
    created_at: z.number(),
    bad_words: z.number(),
    raw_message: z.number(),
    match_session: z.number(),
    user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    match_session_id: z.string().nullable(),
    message: z.string().nullable(),
    created_at: z.date().nullable(),
    raw_message: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    match_session_id: z.string().nullable(),
    message: z.string().nullable(),
    created_at: z.date().nullable(),
    raw_message: z.string().nullable()
  }).nullable().optional()
}));