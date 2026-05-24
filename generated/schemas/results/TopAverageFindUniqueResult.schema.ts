import * as z from 'zod';
export const TopAverageFindUniqueResultSchema = z.nullable(z.object({
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
  solve_1: z.unknown(),
  solve_2: z.unknown(),
  solve_3: z.unknown(),
  solve_4: z.unknown(),
  solve_5: z.unknown(),
  user: z.unknown()
}));