import * as z from 'zod';
export const FriendshipRequestAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    from_id: z.number(),
    to_id: z.number(),
    created_at: z.number(),
    accepted_at: z.number(),
    friendship: z.number(),
    from_user: z.number(),
    to_user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    from_id: z.string().nullable(),
    to_id: z.string().nullable(),
    created_at: z.date().nullable(),
    accepted_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    from_id: z.string().nullable(),
    to_id: z.string().nullable(),
    created_at: z.date().nullable(),
    accepted_at: z.date().nullable()
  }).nullable().optional()});