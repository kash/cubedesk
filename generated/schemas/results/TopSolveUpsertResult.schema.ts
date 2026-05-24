import * as z from 'zod';
export const TopSolveUpsertResultSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  time: z.number(),
  solve_id: z.string(),
  cube_type: z.string(),
  created_at: z.date(),
  solve: z.unknown(),
  user: z.unknown()
});