import * as z from 'zod';
export const CustomTrainerLikeGroupByResultSchema = z.array(z.object({
  id: z.string(),
  custom_trainer_id: z.string(),
  user_id: z.string(),
  created_at: z.date(),
  creator_id: z.string(),
  _count: z.object({
    id: z.number(),
    custom_trainer_id: z.number(),
    user_id: z.number(),
    created_at: z.number(),
    creator_id: z.number(),
    creator: z.number(),
    custom_trainer: z.number(),
    user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    custom_trainer_id: z.string().nullable(),
    user_id: z.string().nullable(),
    created_at: z.date().nullable(),
    creator_id: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    custom_trainer_id: z.string().nullable(),
    user_id: z.string().nullable(),
    created_at: z.date().nullable(),
    creator_id: z.string().nullable()
  }).nullable().optional()
}));