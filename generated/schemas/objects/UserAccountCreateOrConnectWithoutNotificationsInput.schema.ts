import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutNotificationsInputObjectSchema as UserAccountCreateWithoutNotificationsInputObjectSchema } from './UserAccountCreateWithoutNotificationsInput.schema';
import { UserAccountUncheckedCreateWithoutNotificationsInputObjectSchema as UserAccountUncheckedCreateWithoutNotificationsInputObjectSchema } from './UserAccountUncheckedCreateWithoutNotificationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutNotificationsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutNotificationsInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutNotificationsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutNotificationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutNotificationsInput>;
export const UserAccountCreateOrConnectWithoutNotificationsInputObjectZodSchema = makeSchema();
