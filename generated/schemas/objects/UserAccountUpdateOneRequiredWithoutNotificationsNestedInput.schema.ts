import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutNotificationsInputObjectSchema as UserAccountCreateWithoutNotificationsInputObjectSchema } from './UserAccountCreateWithoutNotificationsInput.schema';
import { UserAccountUncheckedCreateWithoutNotificationsInputObjectSchema as UserAccountUncheckedCreateWithoutNotificationsInputObjectSchema } from './UserAccountUncheckedCreateWithoutNotificationsInput.schema';
import { UserAccountCreateOrConnectWithoutNotificationsInputObjectSchema as UserAccountCreateOrConnectWithoutNotificationsInputObjectSchema } from './UserAccountCreateOrConnectWithoutNotificationsInput.schema';
import { UserAccountUpsertWithoutNotificationsInputObjectSchema as UserAccountUpsertWithoutNotificationsInputObjectSchema } from './UserAccountUpsertWithoutNotificationsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutNotificationsInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutNotificationsInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutNotificationsInput.schema';
import { UserAccountUpdateWithoutNotificationsInputObjectSchema as UserAccountUpdateWithoutNotificationsInputObjectSchema } from './UserAccountUpdateWithoutNotificationsInput.schema';
import { UserAccountUncheckedUpdateWithoutNotificationsInputObjectSchema as UserAccountUncheckedUpdateWithoutNotificationsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutNotificationsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutNotificationsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutNotificationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutNotificationsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutNotificationsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutNotificationsInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutNotificationsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutNotificationsInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutNotificationsNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutNotificationsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutNotificationsNestedInput>;
export const UserAccountUpdateOneRequiredWithoutNotificationsNestedInputObjectZodSchema = makeSchema();
