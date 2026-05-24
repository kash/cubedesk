import * as z from 'zod';
export const MatchSessionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  min_players: z.number().int(),
  max_players: z.number().int(),
  match_type: z.string(),
  custom_match: z.boolean(),
  created_at: z.date(),
  created_by_id: z.string().optional(),
  rated: z.boolean().optional(),
  chat_messages: z.array(z.unknown()),
  game_options: z.unknown().optional(),
  matches: z.array(z.unknown()),
  created_by: z.unknown().optional()
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