import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutNotification_preferencesInputObjectSchema as UserAccountUpdateWithoutNotification_preferencesInputObjectSchema } from './UserAccountUpdateWithoutNotification_preferencesInput.schema';
import { UserAccountUncheckedUpdateWithoutNotification_preferencesInputObjectSchema as UserAccountUncheckedUpdateWithoutNotification_preferencesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutNotification_preferencesInput.schema';
import { UserAccountCreateWithoutNotification_preferencesInputObjectSchema as UserAccountCreateWithoutNotification_preferencesInputObjectSchema } from './UserAccountCreateWithoutNotification_preferencesInput.schema';
import { UserAccountUncheckedCreateWithoutNotification_preferencesInputObjectSchema as UserAccountUncheckedCreateWithoutNotification_preferencesInputObjectSchema } from './UserAccountUncheckedCreateWithoutNotification_preferencesInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutNotification_preferencesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutNotification_preferencesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutNotification_preferencesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutNotification_preferencesInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutNotification_preferencesInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutNotification_preferencesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutNotification_preferencesInput>;
export const UserAccountUpsertWithoutNotification_preferencesInputObjectZodSchema = makeSchema();
