import * as z from 'zod';
export const TopAverageGroupByResultSchema = z.array(z.object({
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
  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    time: z.number(),
    cube_type: z.number(),
    solve_1_id: z.number(),
    solve_2_id: z.number(),
    solve_3_id: z.number(),
    solve_4_id: z.number(),
    solve_5_id: z.number(),
    created_at: z.number(),
    solve_1: z.number(),
    solve_2: z.number(),
    solve_3: z.number(),
    solve_4: z.number(),
    solve_5: z.number(),
    user: z.number()
  }).optional(),
  _sum: z.object({
    time: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    time: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    time: z.number().nullable(),
    cube_type: z.string().nullable(),
    solve_1_id: z.string().nullable(),
    solve_2_id: z.string().nullable(),
    solve_3_id: z.string().nullable(),
    solve_4_id: z.string().nullable(),
    solve_5_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    time: z.number().nullable(),
    cube_type: z.string().nullable(),
    solve_1_id: z.string().nullable(),
    solve_2_id: z.string().nullable(),
    solve_3_id: z.string().nullable(),
    solve_4_id: z.string().nullable(),
    solve_5_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()
}));