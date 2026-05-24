import * as z from 'zod';
export const AlgorithmOverrideFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  user_id: z.string(),
  rotate: z.number().int().optional(),
  cube_key: z.string(),
  created_at: z.date(),
  solution: z.string().optional(),
  name: z.string().optional(),
  scrambles: z.string().optional(),
  user: z.unknown()
}));