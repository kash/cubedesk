import * as z from 'zod';
export const SessionFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  user_id: z.string(),
  created_at: z.date(),
  order: z.number().int(),
  user: z.unknown(),
  solves: z.array(z.unknown())
}));