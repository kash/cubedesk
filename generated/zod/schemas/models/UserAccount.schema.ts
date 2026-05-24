import * as z from 'zod';

export const UserAccountSchema = z.object({
  id: z.string(),
  email: z.string(),
  password: z.string(),
  first_name: z.string(),
  join_ip: z.string(),
  join_country: z.string(),
  admin: z.boolean(),
  created_at: z.date(),
  last_name: z.string(),
  username: z.string().nullable(),
  verified: z.boolean(),
  banned_forever: z.boolean(),
  banned_until: z.date().nullable(),
  stripe_customer_id: z.string().nullable(),
  is_pro: z.boolean(),
  mod: z.boolean(),
  offline_hash: z.string().nullable(),
  unsub_id: z.string().nullable(),
  last_solve_at: z.date().nullable(),
});

export type UserAccount = z.infer<typeof UserAccountSchema>;
