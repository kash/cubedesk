import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { NotificationOrderByRelevanceInputObjectSchema as NotificationOrderByRelevanceInputObjectSchema } from './NotificationOrderByRelevanceInput.schema'

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
  triggering_user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => NotificationOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const NotificationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.NotificationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationOrderByWithRelationInput>;
export const NotificationOrderByWithRelationInputObjectZodSchema = makeSchema();
