import * as z from 'zod';
export const CustomCubeTypeUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  user_id: z.string(),
  name: z.string(),
  created_at: z.date(),
  scramble: z.string(),
  private: z.boolean(),
  setting: z.unknown()
}));