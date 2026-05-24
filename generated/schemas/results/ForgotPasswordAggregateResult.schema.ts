import * as z from 'zod';
export const ForgotPasswordAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    code: z.number(),
    claimed: z.number(),
    created_at: z.number(),
    user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    code: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    code: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()});