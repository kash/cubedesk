import * as z from 'zod';
export const ForgotPasswordUpsertResultSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  code: z.string(),
  claimed: z.boolean(),
  created_at: z.date(),
  user: z.unknown()
});