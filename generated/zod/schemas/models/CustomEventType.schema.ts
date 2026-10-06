import * as z from 'zod';

export const CustomEventTypeSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  name: z.string(),
  created_at: z.date(),
  scramble: z.string(),
  private: z.boolean(),
});

export type CustomEventType = z.infer<typeof CustomEventTypeSchema>;
