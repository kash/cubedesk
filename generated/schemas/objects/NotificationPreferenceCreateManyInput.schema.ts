import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  friend_request: z.boolean().optional(),
  friend_request_accept: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  marketing_emails: z.boolean().optional(),
  elo_refund: z.boolean().optional()
}).strict();
export const NotificationPreferenceCreateManyInputObjectSchema: z.ZodType<Prisma.NotificationPreferenceCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationPreferenceCreateManyInput>;
export const NotificationPreferenceCreateManyInputObjectZodSchema = makeSchema();
