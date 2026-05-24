import * as z from 'zod';

export const SessionSchema = z.object({
  id: z.string(),
  name: z.string(),
  user_id: z.string(),
  created_at: z.date(),
  order: z.number().int(),
});

export type Session = z.infer<typeof SessionSchema>;
