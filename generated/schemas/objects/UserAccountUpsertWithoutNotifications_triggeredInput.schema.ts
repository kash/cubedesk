import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutNotifications_triggeredInputObjectSchema as UserAccountUpdateWithoutNotifications_triggeredInputObjectSchema } from './UserAccountUpdateWithoutNotifications_triggeredInput.schema';
import { UserAccountUncheckedUpdateWithoutNotifications_triggeredInputObjectSchema as UserAccountUncheckedUpdateWithoutNotifications_triggeredInputObjectSchema } from './UserAccountUncheckedUpdateWithoutNotifications_triggeredInput.schema';
import { UserAccountCreateWithoutNotifications_triggeredInputObjectSchema as UserAccountCreateWithoutNotifications_triggeredInputObjectSchema } from './UserAccountCreateWithoutNotifications_triggeredInput.schema';
import { UserAccountUncheckedCreateWithoutNotifications_triggeredInputObjectSchema as UserAccountUncheckedCreateWithoutNotifications_triggeredInputObjectSchema } from './UserAccountUncheckedCreateWithoutNotifications_triggeredInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutNotifications_triggeredInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutNotifications_triggeredInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutNotifications_triggeredInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutNotifications_triggeredInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutNotifications_triggeredInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutNotifications_triggeredInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutNotifications_triggeredInput>;
export const UserAccountUpsertWithoutNotifications_triggeredInputObjectZodSchema = makeSchema();
