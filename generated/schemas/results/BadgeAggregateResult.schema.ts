import * as z from 'zod';
export const BadgeAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    badge_type_id: z.number(),
    created_at: z.number(),
    badge_type: z.number(),
    user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    badge_type_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    badge_type_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()});