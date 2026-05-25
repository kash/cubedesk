import * as z from 'zod';

export const ActionLogSchema = z.object({
  id: z.string(),
  user_email: z.string().nullable(),
  action_type: z.string(),
  action_details: z.string().nullable(),
  created_at: z.date(),
});

export type ActionLog = z.infer<typeof ActionLogSchema>;
