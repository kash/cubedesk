import * as z from 'zod';

export const SolveViewSchema = z.object({
  id: z.string(),
  solve_id: z.string(),
  viewer_id: z.string().nullable(),
  user_id: z.string(),
  created_at: z.date(),
});

export type SolveView = z.infer<typeof SolveViewSchema>;
