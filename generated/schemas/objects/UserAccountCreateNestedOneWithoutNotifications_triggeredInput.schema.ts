import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutNotifications_triggeredInputObjectSchema as UserAccountCreateWithoutNotifications_triggeredInputObjectSchema } from './UserAccountCreateWithoutNotifications_triggeredInput.schema';
import { UserAccountUncheckedCreateWithoutNotifications_triggeredInputObjectSchema as UserAccountUncheckedCreateWithoutNotifications_triggeredInputObjectSchema } from './UserAccountUncheckedCreateWithoutNotifications_triggeredInput.schema';
import { UserAccountCreateOrConnectWithoutNotifications_triggeredInputObjectSchema as UserAccountCreateOrConnectWithoutNotifications_triggeredInputObjectSchema } from './UserAccountCreateOrConnectWithoutNotifications_triggeredInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutNotifications_triggeredInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutNotifications_triggeredInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutNotifications_triggeredInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutNotifications_triggeredInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutNotifications_triggeredInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutNotifications_triggeredInput>;
export const UserAccountCreateNestedOneWithoutNotifications_triggeredInputObjectZodSchema = makeSchema();
