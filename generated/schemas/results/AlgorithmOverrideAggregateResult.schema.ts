import * as z from 'zod';
export const AlgorithmOverrideAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    rotate: z.number(),
    cube_key: z.number(),
    created_at: z.number(),
    solution: z.number(),
    name: z.number(),
    scrambles: z.number(),
    user: z.number()
  }).optional(),
  _sum: z.object({
    rotate: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    rotate: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    rotate: z.number().int().nullable(),
    cube_key: z.string().nullable(),
    created_at: z.date().nullable(),
    solution: z.string().nullable(),
    name: z.string().nullable(),
    scrambles: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    rotate: z.number().int().nullable(),
    cube_key: z.string().nullable(),
    created_at: z.date().nullable(),
    solution: z.string().nullable(),
    name: z.string().nullable(),
    scrambles: z.string().nullable()
  }).nullable().optional()});