import * as z from 'zod';

export const CustomTrainerSchema = z.object({
  id: z.string(),
  colors: z.string().nullable(),
  cube_type: z.string(),
  key: z.string(),
  user_id: z.string(),
  created_at: z.date(),
  name: z.string(),
  like_count: z.number().int(),
  private: z.boolean(),
  copy_of_id: z.string().nullable(),
  description: z.string().nullable(),
  downloaded: z.boolean(),
  group_name: z.string().nullable(),
  scrambles: z.string().nullable(),
  solution: z.string().nullable(),
  alt_solutions: z.string().nullable(),
  three_d: z.boolean(),
  algo_type: z.string().default("Custom"),
});

export type CustomTrainer = z.infer<typeof CustomTrainerSchema>;
