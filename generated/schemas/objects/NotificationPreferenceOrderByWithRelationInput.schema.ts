import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { NotificationPreferenceOrderByRelevanceInputObjectSchema as NotificationPreferenceOrderByRelevanceInputObjectSchema } from './NotificationPreferenceOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  friend_request: SortOrderSchema.optional(),
  friend_request_accept: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  marketing_emails: SortOrderSchema.optional(),
  elo_refund: SortOrderSchema.optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => NotificationPreferenceOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const NotificationPreferenceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.NotificationPreferenceOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationPreferenceOrderByWithRelationInput>;
export const NotificationPreferenceOrderByWithRelationInputObjectZodSchema = makeSchema();
