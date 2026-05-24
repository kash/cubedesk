import * as z from 'zod';
export const TopSolveAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    time: z.number(),
    solve_id: z.number(),
    cube_type: z.number(),
    created_at: z.number(),
    solve: z.number(),
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
    solve_id: z.string().nullable(),
    cube_type: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    time: z.number().nullable(),
    solve_id: z.string().nullable(),
    cube_type: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()});