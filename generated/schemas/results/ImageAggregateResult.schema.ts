import * as z from 'zod';
export const ImageAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    url: z.number(),
    storage_path: z.number(),
    created_at: z.number(),
    user: z.number(),
    profile_header_image: z.number(),
    profile_pfp_image: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    url: z.string().nullable(),
    storage_path: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    url: z.string().nullable(),
    storage_path: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()});