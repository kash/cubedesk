import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string().optional()
}).strict();
export const NotificationPreferenceWhereUniqueInputObjectSchema: z.ZodType<Prisma.NotificationPreferenceWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationPreferenceWhereUniqueInput>;
export const NotificationPreferenceWhereUniqueInputObjectZodSchema = makeSchema();
