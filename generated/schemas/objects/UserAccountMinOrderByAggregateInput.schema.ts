import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  first_name: SortOrderSchema.optional(),
  join_ip: SortOrderSchema.optional(),
  join_country: SortOrderSchema.optional(),
  admin: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  last_name: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  verified: SortOrderSchema.optional(),
  banned_forever: SortOrderSchema.optional(),
  banned_until: SortOrderSchema.optional(),
  stripe_customer_id: SortOrderSchema.optional(),
  is_pro: SortOrderSchema.optional(),
  mod: SortOrderSchema.optional(),
  offline_hash: SortOrderSchema.optional(),
  unsub_id: SortOrderSchema.optional(),
  last_solve_at: SortOrderSchema.optional()
}).strict();
export const UserAccountMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserAccountMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountMinOrderByAggregateInput>;
export const UserAccountMinOrderByAggregateInputObjectZodSchema = makeSchema();
