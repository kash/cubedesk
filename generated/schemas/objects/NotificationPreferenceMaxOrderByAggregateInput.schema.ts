import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  friend_request: SortOrderSchema.optional(),
  friend_request_accept: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  marketing_emails: SortOrderSchema.optional(),
  elo_refund: SortOrderSchema.optional()
}).strict();
export const NotificationPreferenceMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NotificationPreferenceMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationPreferenceMaxOrderByAggregateInput>;
export const NotificationPreferenceMaxOrderByAggregateInputObjectZodSchema = makeSchema();
