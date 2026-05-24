import * as z from 'zod';

export const TopSolveSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  time: z.number(),
  solve_id: z.string(),
  cube_type: z.string(),
  created_at: z.date(),
});

export type TopSolve = z.infer<typeof TopSolveSchema>;
