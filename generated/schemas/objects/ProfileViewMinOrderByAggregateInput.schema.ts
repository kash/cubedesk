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
export const ProfileViewMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProfileViewMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewMinOrderByAggregateInput>;
export const ProfileViewMinOrderByAggregateInputObjectZodSchema = makeSchema();
