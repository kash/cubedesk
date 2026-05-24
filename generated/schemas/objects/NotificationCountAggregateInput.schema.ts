import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  notification_type: z.literal(true).optional(),
  triggering_user_id: z.literal(true).optional(),
  read_at: z.literal(true).optional(),
  message: z.literal(true).optional(),
  icon: z.literal(true).optional(),
  link: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  notification_category_name: z.literal(true).optional(),
  link_text: z.literal(true).optional(),
  subject: z.literal(true).optional(),
  in_app_message: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const NotificationCountAggregateInputObjectSchema: z.ZodType<Prisma.NotificationCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCountAggregateInputType>;
export const NotificationCountAggregateInputObjectZodSchema = makeSchema();
