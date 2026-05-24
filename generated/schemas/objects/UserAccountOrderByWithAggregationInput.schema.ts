import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserAccountCountOrderByAggregateInputObjectSchema as UserAccountCountOrderByAggregateInputObjectSchema } from './UserAccountCountOrderByAggregateInput.schema';
import { UserAccountMaxOrderByAggregateInputObjectSchema as UserAccountMaxOrderByAggregateInputObjectSchema } from './UserAccountMaxOrderByAggregateInput.schema';
import { UserAccountMinOrderByAggregateInputObjectSchema as UserAccountMinOrderByAggregateInputObjectSchema } from './UserAccountMinOrderByAggregateInput.schema'

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
  username: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  verified: SortOrderSchema.optional(),
  banned_forever: SortOrderSchema.optional(),
  banned_until: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  stripe_customer_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  is_pro: SortOrderSchema.optional(),
  mod: SortOrderSchema.optional(),
  offline_hash: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  unsub_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  last_solve_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => UserAccountCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UserAccountMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UserAccountMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const UserAccountOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UserAccountOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountOrderByWithAggregationInput>;
export const UserAccountOrderByWithAggregationInputObjectZodSchema = makeSchema();
