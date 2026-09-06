import * as z from 'zod';

export const TrainerAlgorithmSchema = z.object({
  id: z.string(),
  name: z.string(),
  active: z.boolean().default(true),
  solution: z.string(),
  scrambles: z.string(),
  cube_type: z.string(),
  algo_type: z.string(),
  group_name: z.string(),
  img_link: z.string(),
  colors: z.string(),
  rotate: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type TrainerAlgorithm = z.infer<typeof TrainerAlgorithmSchema>;
