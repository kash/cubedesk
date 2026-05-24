import * as z from 'zod';
export const EloRatingFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  user_id: z.string(),
  elo_222_rating: z.number().int(),
  elo_333_rating: z.number().int(),
  elo_444_rating: z.number().int(),
  updated_at: z.date(),
  created_at: z.date(),
  elo_overall_rating: z.number().int(),
  profile_id: z.string(),
  games_222_count: z.number().int(),
  games_333_count: z.number().int(),
  games_444_count: z.number().int(),
  games_overall_count: z.number().int(),
  profile: z.unknown(),
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