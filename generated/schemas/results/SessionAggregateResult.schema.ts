import * as z from 'zod';
export const SessionAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    user_id: z.number(),
    created_at: z.number(),
    order: z.number(),
    user: z.number(),
    solves: z.number()
  }).optional(),
  _sum: z.object({
    order: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    order: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    user_id: z.string().nullable(),
    created_at: z.date().nullable(),
    order: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    user_id: z.string().nullable(),
    created_at: z.date().nullable(),
    order: z.number().int().nullable()
  }).nullable().optional()});