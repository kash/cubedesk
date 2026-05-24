import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutNotificationsInputObjectSchema as UserAccountCreateWithoutNotificationsInputObjectSchema } from './UserAccountCreateWithoutNotificationsInput.schema';
import { UserAccountUncheckedCreateWithoutNotificationsInputObjectSchema as UserAccountUncheckedCreateWithoutNotificationsInputObjectSchema } from './UserAccountUncheckedCreateWithoutNotificationsInput.schema';
import { UserAccountCreateOrConnectWithoutNotificationsInputObjectSchema as UserAccountCreateOrConnectWithoutNotificationsInputObjectSchema } from './UserAccountCreateOrConnectWithoutNotificationsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutNotificationsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutNotificationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutNotificationsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutNotificationsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutNotificationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutNotificationsInput>;
export const UserAccountCreateNestedOneWithoutNotificationsInputObjectZodSchema = makeSchema();
