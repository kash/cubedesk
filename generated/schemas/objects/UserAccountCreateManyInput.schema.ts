import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  password: z.string(),
  first_name: z.string(),
  join_ip: z.string(),
  join_country: z.string(),
  admin: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  last_name: z.string(),
  username: z.string().optional().nullable(),
  verified: z.boolean().optional(),
  banned_forever: z.boolean().optional(),
  banned_until: z.coerce.date().optional().nullable(),
  stripe_customer_id: z.string().optional().nullable(),
  is_pro: z.boolean().optional(),
  mod: z.boolean().optional(),
  offline_hash: z.string().optional().nullable(),
  unsub_id: z.string().optional().nullable(),
  last_solve_at: z.coerce.date().optional().nullable()
}).strict();
export const UserAccountCreateManyInputObjectSchema: z.ZodType<Prisma.UserAccountCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateManyInput>;
export const UserAccountCreateManyInputObjectZodSchema = makeSchema();
