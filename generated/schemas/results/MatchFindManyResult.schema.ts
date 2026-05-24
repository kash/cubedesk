import * as z from 'zod';
export const MatchFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  winner_id: z.string().optional(),
  created_at: z.date(),
  link_code: z.string(),
  match_session_id: z.string(),
  ended_at: z.date().optional(),
  started_at: z.date().optional(),
  spectate_code: z.string().optional(),
  aborted: z.boolean(),
  elo_log: z.array(z.unknown()),
  game_session: z.array(z.unknown()),
  match_session: z.unknown(),
  winner: z.unknown().optional(),
  participants: z.array(z.unknown()),
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