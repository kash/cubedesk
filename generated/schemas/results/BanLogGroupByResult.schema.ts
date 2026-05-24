import * as z from 'zod';
export const BanLogGroupByResultSchema = z.array(z.object({
  id: z.string(),
  created_by_id: z.string(),
  banned_user_id: z.string(),
  reason: z.string(),
  active: z.boolean(),
  banned_until: z.date(),
  minutes: z.number().int(),
  forever: z.boolean(),
  created_at: z.date(),
  _count: z.object({
    id: z.number(),
    created_by_id: z.number(),
    banned_user_id: z.number(),
    reason: z.number(),
    active: z.number(),
    banned_until: z.number(),
    minutes: z.number(),
    forever: z.number(),
    created_at: z.number(),
    banned_user: z.number(),
    created_by: z.number()
  }).optional(),
  _sum: z.object({
    minutes: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    minutes: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    created_by_id: z.string().nullable(),
    banned_user_id: z.string().nullable(),
    reason: z.string().nullable(),
    banned_until: z.date().nullable(),
    minutes: z.number().int().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    created_by_id: z.string().nullable(),
    banned_user_id: z.string().nullable(),
    reason: z.string().nullable(),
    banned_until: z.date().nullable(),
    minutes: z.number().int().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()
}));