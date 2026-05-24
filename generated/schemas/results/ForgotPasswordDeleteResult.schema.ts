import * as z from 'zod';
export const ForgotPasswordDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  user_id: z.string(),
  code: z.string(),
  claimed: z.boolean(),
  created_at: z.date(),
  user: z.unknown()
}));