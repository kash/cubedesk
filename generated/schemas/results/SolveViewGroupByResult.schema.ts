import * as z from 'zod';
export const SolveViewGroupByResultSchema = z.array(z.object({
  id: z.string(),
  solve_id: z.string(),
  viewer_id: z.string(),
  user_id: z.string(),
  created_at: z.date(),
  _count: z.object({
    id: z.number(),
    solve_id: z.number(),
    viewer_id: z.number(),
    user_id: z.number(),
    created_at: z.number(),
    solve: z.number(),
    user: z.number(),
    viewer: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    solve_id: z.string().nullable(),
    viewer_id: z.string().nullable(),
    user_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    solve_id: z.string().nullable(),
    viewer_id: z.string().nullable(),
    user_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()
}));