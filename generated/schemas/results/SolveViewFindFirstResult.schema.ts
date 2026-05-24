import * as z from 'zod';
export const SolveViewFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  solve_id: z.string(),
  viewer_id: z.string().optional(),
  user_id: z.string(),
  created_at: z.date(),
  solve: z.unknown(),
  user: z.unknown(),
  viewer: z.unknown().optional()
}));