import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutNotifications_triggeredInputObjectSchema as UserAccountCreateWithoutNotifications_triggeredInputObjectSchema } from './UserAccountCreateWithoutNotifications_triggeredInput.schema';
import { UserAccountUncheckedCreateWithoutNotifications_triggeredInputObjectSchema as UserAccountUncheckedCreateWithoutNotifications_triggeredInputObjectSchema } from './UserAccountUncheckedCreateWithoutNotifications_triggeredInput.schema';
import { UserAccountCreateOrConnectWithoutNotifications_triggeredInputObjectSchema as UserAccountCreateOrConnectWithoutNotifications_triggeredInputObjectSchema } from './UserAccountCreateOrConnectWithoutNotifications_triggeredInput.schema';
import { UserAccountUpsertWithoutNotifications_triggeredInputObjectSchema as UserAccountUpsertWithoutNotifications_triggeredInputObjectSchema } from './UserAccountUpsertWithoutNotifications_triggeredInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutNotifications_triggeredInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutNotifications_triggeredInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutNotifications_triggeredInput.schema';
import { UserAccountUpdateWithoutNotifications_triggeredInputObjectSchema as UserAccountUpdateWithoutNotifications_triggeredInputObjectSchema } from './UserAccountUpdateWithoutNotifications_triggeredInput.schema';
import { UserAccountUncheckedUpdateWithoutNotifications_triggeredInputObjectSchema as UserAccountUncheckedUpdateWithoutNotifications_triggeredInputObjectSchema } from './UserAccountUncheckedUpdateWithoutNotifications_triggeredInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutNotifications_triggeredInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutNotifications_triggeredInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutNotifications_triggeredInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutNotifications_triggeredInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutNotifications_triggeredInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutNotifications_triggeredInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutNotifications_triggeredInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneWithoutNotifications_triggeredNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneWithoutNotifications_triggeredNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneWithoutNotifications_triggeredNestedInput>;
export const UserAccountUpdateOneWithoutNotifications_triggeredNestedInputObjectZodSchema = makeSchema();
