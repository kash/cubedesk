import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { NotificationPreferenceCountOrderByAggregateInputObjectSchema as NotificationPreferenceCountOrderByAggregateInputObjectSchema } from './NotificationPreferenceCountOrderByAggregateInput.schema';
import { NotificationPreferenceMaxOrderByAggregateInputObjectSchema as NotificationPreferenceMaxOrderByAggregateInputObjectSchema } from './NotificationPreferenceMaxOrderByAggregateInput.schema';
import { NotificationPreferenceMinOrderByAggregateInputObjectSchema as NotificationPreferenceMinOrderByAggregateInputObjectSchema } from './NotificationPreferenceMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  friend_request: SortOrderSchema.optional(),
  friend_request_accept: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  marketing_emails: SortOrderSchema.optional(),
  elo_refund: SortOrderSchema.optional(),
  _count: z.lazy(() => NotificationPreferenceCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => NotificationPreferenceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => NotificationPreferenceMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const NotificationPreferenceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.NotificationPreferenceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationPreferenceOrderByWithAggregationInput>;
export const NotificationPreferenceOrderByWithAggregationInputObjectZodSchema = makeSchema();
