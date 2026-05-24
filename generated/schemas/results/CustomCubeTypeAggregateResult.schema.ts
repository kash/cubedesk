import * as z from 'zod';
export const CustomCubeTypeAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    name: z.number(),
    created_at: z.number(),
    scramble: z.number(),
    private: z.number(),
    setting: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    name: z.string().nullable(),
    created_at: z.date().nullable(),
    scramble: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    name: z.string().nullable(),
    created_at: z.date().nullable(),
    scramble: z.string().nullable()
  }).nullable().optional()});