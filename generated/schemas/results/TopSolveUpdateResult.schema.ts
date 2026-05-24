import * as z from 'zod';
export const TopSolveUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  user_id: z.string(),
  time: z.number(),
  solve_id: z.string(),
  cube_type: z.string(),
  created_at: z.date(),
  solve: z.unknown(),
  user: z.unknown()
}));