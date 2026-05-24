import * as z from 'zod';
export const BadgeTypeAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    priority: z.number(),
    color: z.number(),
    created_at: z.number(),
    description: z.number(),
    created_by_id: z.number(),
    badges: z.number(),
    created_by: z.number()
  }).optional(),
  _sum: z.object({
    priority: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    priority: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    priority: z.number().int().nullable(),
    color: z.string().nullable(),
    created_at: z.date().nullable(),
    description: z.string().nullable(),
    created_by_id: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    priority: z.number().int().nullable(),
    color: z.string().nullable(),
    created_at: z.date().nullable(),
    description: z.string().nullable(),
    created_by_id: z.string().nullable()
  }).nullable().optional()});