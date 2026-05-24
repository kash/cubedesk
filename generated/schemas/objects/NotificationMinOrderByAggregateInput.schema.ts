import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  notification_type: SortOrderSchema.optional(),
  triggering_user_id: SortOrderSchema.optional(),
  read_at: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
  icon: SortOrderSchema.optional(),
  link: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  notification_category_name: SortOrderSchema.optional(),
  link_text: SortOrderSchema.optional(),
  subject: SortOrderSchema.optional(),
  in_app_message: SortOrderSchema.optional()
}).strict();
export const NotificationMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NotificationMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationMinOrderByAggregateInput>;
export const NotificationMinOrderByAggregateInputObjectZodSchema = makeSchema();
