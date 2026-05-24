import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const notificationpreferencewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => NotificationPreferenceWhereInputObjectSchema), z.lazy(() => NotificationPreferenceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => NotificationPreferenceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => NotificationPreferenceWhereInputObjectSchema), z.lazy(() => NotificationPreferenceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  friend_request: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  friend_request_accept: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  marketing_emails: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  elo_refund: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const NotificationPreferenceWhereInputObjectSchema: z.ZodType<Prisma.NotificationPreferenceWhereInput> = notificationpreferencewhereinputSchema as unknown as z.ZodType<Prisma.NotificationPreferenceWhereInput>;
export const NotificationPreferenceWhereInputObjectZodSchema = notificationpreferencewhereinputSchema;
