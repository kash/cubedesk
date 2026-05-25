import * as z from 'zod';

export const ForgotPasswordSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  code: z.string(),
  claimed: z.boolean(),
  created_at: z.date(),
});

export type ForgotPassword = z.infer<typeof ForgotPasswordSchema>;
