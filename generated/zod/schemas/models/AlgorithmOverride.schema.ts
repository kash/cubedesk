import * as z from 'zod';

export const AlgorithmOverrideSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  rotate: z.number().int().nullable(),
  cube_key: z.string(),
  created_at: z.date(),
  solution: z.string().nullable(),
  name: z.string().nullable(),
  scrambles: z.string().nullable(),
});

export type AlgorithmOverride = z.infer<typeof AlgorithmOverrideSchema>;
