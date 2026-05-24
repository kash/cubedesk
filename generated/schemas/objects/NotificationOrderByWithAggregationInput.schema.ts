import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { NotificationCountOrderByAggregateInputObjectSchema as NotificationCountOrderByAggregateInputObjectSchema } from './NotificationCountOrderByAggregateInput.schema';
import { NotificationMaxOrderByAggregateInputObjectSchema as NotificationMaxOrderByAggregateInputObjectSchema } from './NotificationMaxOrderByAggregateInput.schema';
import { NotificationMinOrderByAggregateInputObjectSchema as NotificationMinOrderByAggregateInputObjectSchema } from './NotificationMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  notification_type: SortOrderSchema.optional(),
  triggering_user_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  read_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  message: SortOrderSchema.optional(),
  icon: SortOrderSchema.optional(),
  link: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  notification_category_name: SortOrderSchema.optional(),
  link_text: SortOrderSchema.optional(),
  subject: SortOrderSchema.optional(),
  in_app_message: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => NotificationCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => NotificationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => NotificationMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const NotificationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.NotificationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationOrderByWithAggregationInput>;
export const NotificationOrderByWithAggregationInputObjectZodSchema = makeSchema();
