import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  viewer_id: SortOrderSchema.optional(),
  profile_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  profile_user_id: SortOrderSchema.optional()
}).strict();
export const ProfileViewCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProfileViewCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewCountOrderByAggregateInput>;
export const ProfileViewCountOrderByAggregateInputObjectZodSchema = makeSchema();
