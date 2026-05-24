import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutNotifications_triggeredInputObjectSchema as UserAccountUpdateWithoutNotifications_triggeredInputObjectSchema } from './UserAccountUpdateWithoutNotifications_triggeredInput.schema';
import { UserAccountUncheckedUpdateWithoutNotifications_triggeredInputObjectSchema as UserAccountUncheckedUpdateWithoutNotifications_triggeredInputObjectSchema } from './UserAccountUncheckedUpdateWithoutNotifications_triggeredInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutNotifications_triggeredInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutNotifications_triggeredInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutNotifications_triggeredInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutNotifications_triggeredInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutNotifications_triggeredInput>;
export const UserAccountUpdateToOneWithWhereWithoutNotifications_triggeredInputObjectZodSchema = makeSchema();
