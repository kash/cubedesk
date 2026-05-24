import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  friend_request: z.literal(true).optional(),
  friend_request_accept: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  marketing_emails: z.literal(true).optional(),
  elo_refund: z.literal(true).optional()
}).strict();
export const NotificationPreferenceMaxAggregateInputObjectSchema: z.ZodType<Prisma.NotificationPreferenceMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.NotificationPreferenceMaxAggregateInputType>;
export const NotificationPreferenceMaxAggregateInputObjectZodSchema = makeSchema();
