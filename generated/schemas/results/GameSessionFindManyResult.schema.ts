import * as z from 'zod';
export const GameSessionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  user_id: z.string(),
  match_id: z.string().optional(),
  game_type: z.unknown(),
  solve_count: z.number().int(),
  total_time: z.number(),
  created_at: z.date(),
  game_options: z.unknown().optional(),
  match: z.unknown().optional(),
  user: z.unknown(),
  solves: z.array(z.unknown())
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