import * as z from 'zod';
export const EmailLogAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    subject: z.number(),
    template: z.number(),
    vars: z.number(),
    created_at: z.number(),
    email: z.number(),
    user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    subject: z.string().nullable(),
    template: z.string().nullable(),
    vars: z.string().nullable(),
    created_at: z.date().nullable(),
    email: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    subject: z.string().nullable(),
    template: z.string().nullable(),
    vars: z.string().nullable(),
    created_at: z.date().nullable(),
    email: z.string().nullable()
  }).nullable().optional()});