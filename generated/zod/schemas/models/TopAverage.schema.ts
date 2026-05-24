import * as z from 'zod';

export const TopAverageSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  time: z.number(),
  cube_type: z.string(),
  solve_1_id: z.string(),
  solve_2_id: z.string(),
  solve_3_id: z.string(),
  solve_4_id: z.string(),
  solve_5_id: z.string(),
  created_at: z.date(),
});

export type TopAverage = z.infer<typeof TopAverageSchema>;
