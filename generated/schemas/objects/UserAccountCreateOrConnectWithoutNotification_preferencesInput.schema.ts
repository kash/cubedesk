import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutNotification_preferencesInputObjectSchema as UserAccountCreateWithoutNotification_preferencesInputObjectSchema } from './UserAccountCreateWithoutNotification_preferencesInput.schema';
import { UserAccountUncheckedCreateWithoutNotification_preferencesInputObjectSchema as UserAccountUncheckedCreateWithoutNotification_preferencesInputObjectSchema } from './UserAccountUncheckedCreateWithoutNotification_preferencesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutNotification_preferencesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutNotification_preferencesInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutNotification_preferencesInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutNotification_preferencesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutNotification_preferencesInput>;
export const UserAccountCreateOrConnectWithoutNotification_preferencesInputObjectZodSchema = makeSchema();
