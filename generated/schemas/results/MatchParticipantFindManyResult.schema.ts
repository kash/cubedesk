import * as z from 'zod';
export const MatchParticipantFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  match_id: z.string(),
  user_id: z.string(),
  created_at: z.date(),
  resigned: z.boolean(),
  forfeited: z.boolean(),
  position: z.number().int(),
  won: z.boolean(),
  lost: z.boolean(),
  abandoned: z.boolean(),
  aborted: z.boolean(),
  match: z.unknown(),
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