import * as z from 'zod';

export const EmailLogSchema = z.object({
  id: z.string(),
  user_id: z.string().nullable(),
  subject: z.string(),
  template: z.string(),
  vars: z.string(),
  created_at: z.date(),
  email: z.string(),
});

export type EmailLog = z.infer<typeof EmailLogSchema>;
