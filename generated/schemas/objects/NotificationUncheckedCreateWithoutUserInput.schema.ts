import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  notification_type: z.string(),
  triggering_user_id: z.string().optional().nullable(),
  read_at: z.coerce.date().optional().nullable(),
  message: z.string(),
  icon: z.string(),
  link: z.string(),
  created_at: z.coerce.date().optional(),
  notification_category_name: z.string(),
  link_text: z.string(),
  subject: z.string(),
  in_app_message: z.string().optional().nullable()
}).strict();
export const NotificationUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationUncheckedCreateWithoutUserInput>;
export const NotificationUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
