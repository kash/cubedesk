import * as z from 'zod';
export const ProfileViewGroupByResultSchema = z.array(z.object({
  id: z.string(),
  viewer_id: z.string(),
  profile_id: z.string(),
  created_at: z.date(),
  profile_user_id: z.string(),
  _count: z.object({
    id: z.number(),
    viewer_id: z.number(),
    profile_id: z.number(),
    created_at: z.number(),
    profile_user_id: z.number(),
    profile: z.number(),
    profile_user: z.number(),
    viewer: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    viewer_id: z.string().nullable(),
    profile_id: z.string().nullable(),
    created_at: z.date().nullable(),
    profile_user_id: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    viewer_id: z.string().nullable(),
    profile_id: z.string().nullable(),
    created_at: z.date().nullable(),
    profile_user_id: z.string().nullable()
  }).nullable().optional()
}));