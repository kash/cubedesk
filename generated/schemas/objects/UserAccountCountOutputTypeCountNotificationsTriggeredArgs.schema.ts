import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationWhereInputObjectSchema as NotificationWhereInputObjectSchema } from './NotificationWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NotificationWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountNotificationsTriggeredArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountNotificationsTriggeredArgsObjectZodSchema = makeSchema();
