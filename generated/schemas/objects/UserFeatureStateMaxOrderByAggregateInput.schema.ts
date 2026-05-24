import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  received_welcome_screen: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const UserFeatureStateMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserFeatureStateMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFeatureStateMaxOrderByAggregateInput>;
export const UserFeatureStateMaxOrderByAggregateInputObjectZodSchema = makeSchema();
