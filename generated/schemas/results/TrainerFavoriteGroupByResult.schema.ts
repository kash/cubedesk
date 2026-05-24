import * as z from 'zod';
export const TrainerFavoriteGroupByResultSchema = z.array(z.object({
  id: z.string(),
  cube_key: z.string(),
  user_id: z.string(),
  created_at: z.date(),
  _count: z.object({
    id: z.number(),
    cube_key: z.number(),
    user_id: z.number(),
    created_at: z.number(),
    user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    cube_key: z.string().nullable(),
    user_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    cube_key: z.string().nullable(),
    user_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()
}));