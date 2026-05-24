import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutNotification_preferencesInputObjectSchema as UserAccountCreateWithoutNotification_preferencesInputObjectSchema } from './UserAccountCreateWithoutNotification_preferencesInput.schema';
import { UserAccountUncheckedCreateWithoutNotification_preferencesInputObjectSchema as UserAccountUncheckedCreateWithoutNotification_preferencesInputObjectSchema } from './UserAccountUncheckedCreateWithoutNotification_preferencesInput.schema';
import { UserAccountCreateOrConnectWithoutNotification_preferencesInputObjectSchema as UserAccountCreateOrConnectWithoutNotification_preferencesInputObjectSchema } from './UserAccountCreateOrConnectWithoutNotification_preferencesInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutNotification_preferencesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutNotification_preferencesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutNotification_preferencesInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutNotification_preferencesInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutNotification_preferencesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutNotification_preferencesInput>;
export const UserAccountCreateNestedOneWithoutNotification_preferencesInputObjectZodSchema = makeSchema();
