import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const notificationpreferencescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => NotificationPreferenceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => NotificationPreferenceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => NotificationPreferenceScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => NotificationPreferenceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => NotificationPreferenceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  friend_request: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  friend_request_accept: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  marketing_emails: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  elo_refund: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const NotificationPreferenceScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.NotificationPreferenceScalarWhereWithAggregatesInput> = notificationpreferencescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.NotificationPreferenceScalarWhereWithAggregatesInput>;
export const NotificationPreferenceScalarWhereWithAggregatesInputObjectZodSchema = notificationpreferencescalarwherewithaggregatesinputSchema;
