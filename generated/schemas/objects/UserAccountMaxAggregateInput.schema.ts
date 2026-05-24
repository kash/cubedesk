import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  password: z.literal(true).optional(),
  first_name: z.literal(true).optional(),
  join_ip: z.literal(true).optional(),
  join_country: z.literal(true).optional(),
  admin: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  last_name: z.literal(true).optional(),
  username: z.literal(true).optional(),
  verified: z.literal(true).optional(),
  banned_forever: z.literal(true).optional(),
  banned_until: z.literal(true).optional(),
  stripe_customer_id: z.literal(true).optional(),
  is_pro: z.literal(true).optional(),
  mod: z.literal(true).optional(),
  offline_hash: z.literal(true).optional(),
  unsub_id: z.literal(true).optional(),
  last_solve_at: z.literal(true).optional()
}).strict();
export const UserAccountMaxAggregateInputObjectSchema: z.ZodType<Prisma.UserAccountMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountMaxAggregateInputType>;
export const UserAccountMaxAggregateInputObjectZodSchema = makeSchema();
