import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  friend_request: z.boolean().optional(),
  friend_request_accept: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  marketing_emails: z.boolean().optional(),
  elo_refund: z.boolean().optional()
}).strict();
export const NotificationPreferenceUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationPreferenceUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationPreferenceUncheckedCreateWithoutUserInput>;
export const NotificationPreferenceUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
