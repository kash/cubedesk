import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutNotificationsInputObjectSchema as UserAccountUpdateWithoutNotificationsInputObjectSchema } from './UserAccountUpdateWithoutNotificationsInput.schema';
import { UserAccountUncheckedUpdateWithoutNotificationsInputObjectSchema as UserAccountUncheckedUpdateWithoutNotificationsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutNotificationsInput.schema';
import { UserAccountCreateWithoutNotificationsInputObjectSchema as UserAccountCreateWithoutNotificationsInputObjectSchema } from './UserAccountCreateWithoutNotificationsInput.schema';
import { UserAccountUncheckedCreateWithoutNotificationsInputObjectSchema as UserAccountUncheckedCreateWithoutNotificationsInputObjectSchema } from './UserAccountUncheckedCreateWithoutNotificationsInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutNotificationsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutNotificationsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutNotificationsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutNotificationsInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutNotificationsInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutNotificationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutNotificationsInput>;
export const UserAccountUpsertWithoutNotificationsInputObjectZodSchema = makeSchema();
