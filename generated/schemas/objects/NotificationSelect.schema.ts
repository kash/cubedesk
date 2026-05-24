import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  notification_type: z.boolean().optional(),
  triggering_user_id: z.boolean().optional(),
  read_at: z.boolean().optional(),
  message: z.boolean().optional(),
  icon: z.boolean().optional(),
  link: z.boolean().optional(),
  created_at: z.boolean().optional(),
  notification_category_name: z.boolean().optional(),
  link_text: z.boolean().optional(),
  subject: z.boolean().optional(),
  in_app_message: z.boolean().optional(),
  triggering_user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const NotificationSelectObjectSchema: z.ZodType<Prisma.NotificationSelect> = makeSchema() as unknown as z.ZodType<Prisma.NotificationSelect>;
export const NotificationSelectObjectZodSchema = makeSchema();
