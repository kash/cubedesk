import * as z from 'zod';
export const EmailLogUpsertResultSchema = z.object({
  id: z.string(),
  user_id: z.string().optional(),
  subject: z.string(),
  template: z.string(),
  vars: z.string(),
  created_at: z.date(),
  email: z.string(),
  user: z.unknown().optional()
});