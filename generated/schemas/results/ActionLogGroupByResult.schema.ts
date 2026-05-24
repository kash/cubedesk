import * as z from 'zod';
export const ActionLogGroupByResultSchema = z.array(z.object({
  id: z.string(),
  user_email: z.string(),
  action_type: z.string(),
  action_details: z.string(),
  created_at: z.date(),
  _count: z.object({
    id: z.number(),
    user_email: z.number(),
    action_type: z.number(),
    action_details: z.number(),
    created_at: z.number(),
    user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    user_email: z.string().nullable(),
    action_type: z.string().nullable(),
    action_details: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    user_email: z.string().nullable(),
    action_type: z.string().nullable(),
    action_details: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()
}));