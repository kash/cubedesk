import * as z from 'zod';
export const UserFeatureStateAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    received_welcome_screen: z.number(),
    updated_at: z.number(),
    created_at: z.number(),
    user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    updated_at: z.date().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    updated_at: z.date().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()});