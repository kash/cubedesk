import * as z from 'zod';
export const CustomTrainerDownloadAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    creator_id: z.number(),
    created_at: z.number(),
    new_trainer_id: z.number(),
    source_trainer_id: z.number(),
    creator: z.number(),
    new_trainer: z.number(),
    source_trainer: z.number(),
    user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    creator_id: z.string().nullable(),
    created_at: z.date().nullable(),
    new_trainer_id: z.string().nullable(),
    source_trainer_id: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    creator_id: z.string().nullable(),
    created_at: z.date().nullable(),
    new_trainer_id: z.string().nullable(),
    source_trainer_id: z.string().nullable()
  }).nullable().optional()});