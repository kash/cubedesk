import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutNotifications_triggeredInputObjectSchema as UserAccountCreateWithoutNotifications_triggeredInputObjectSchema } from './UserAccountCreateWithoutNotifications_triggeredInput.schema';
import { UserAccountUncheckedCreateWithoutNotifications_triggeredInputObjectSchema as UserAccountUncheckedCreateWithoutNotifications_triggeredInputObjectSchema } from './UserAccountUncheckedCreateWithoutNotifications_triggeredInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutNotifications_triggeredInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutNotifications_triggeredInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutNotifications_triggeredInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutNotifications_triggeredInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutNotifications_triggeredInput>;
export const UserAccountCreateOrConnectWithoutNotifications_triggeredInputObjectZodSchema = makeSchema();
