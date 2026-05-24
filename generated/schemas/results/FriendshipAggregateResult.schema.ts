import * as z from 'zod';
export const FriendshipAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    other_user_id: z.number(),
    friendship_request_id: z.number(),
    created_at: z.number(),
    friendship_request: z.number(),
    other_user: z.number(),
    user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    other_user_id: z.string().nullable(),
    friendship_request_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    other_user_id: z.string().nullable(),
    friendship_request_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()});