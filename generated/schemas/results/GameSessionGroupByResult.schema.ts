import * as z from 'zod';
export const GameSessionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  user_id: z.string(),
  match_id: z.string(),
  solve_count: z.number().int(),
  total_time: z.number(),
  created_at: z.date(),
  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    match_id: z.number(),
    game_type: z.number(),
    solve_count: z.number(),
    total_time: z.number(),
    created_at: z.number(),
    game_options: z.number(),
    match: z.number(),
    user: z.number(),
    solves: z.number()
  }).optional(),
  _sum: z.object({
    solve_count: z.number().nullable(),
    total_time: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    solve_count: z.number().nullable(),
    total_time: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    match_id: z.string().nullable(),
    solve_count: z.number().int().nullable(),
    total_time: z.number().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    match_id: z.string().nullable(),
    solve_count: z.number().int().nullable(),
    total_time: z.number().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()
}));