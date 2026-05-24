import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const notificationscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => NotificationScalarWhereInputObjectSchema), z.lazy(() => NotificationScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => NotificationScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => NotificationScalarWhereInputObjectSchema), z.lazy(() => NotificationScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  notification_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  triggering_user_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  read_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  message: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  icon: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  link: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  notification_category_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  link_text: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  subject: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  in_app_message: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const NotificationScalarWhereInputObjectSchema: z.ZodType<Prisma.NotificationScalarWhereInput> = notificationscalarwhereinputSchema as unknown as z.ZodType<Prisma.NotificationScalarWhereInput>;
export const NotificationScalarWhereInputObjectZodSchema = notificationscalarwhereinputSchema;
