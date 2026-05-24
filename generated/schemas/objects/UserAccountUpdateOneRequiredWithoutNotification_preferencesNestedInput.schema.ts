import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutNotification_preferencesInputObjectSchema as UserAccountCreateWithoutNotification_preferencesInputObjectSchema } from './UserAccountCreateWithoutNotification_preferencesInput.schema';
import { UserAccountUncheckedCreateWithoutNotification_preferencesInputObjectSchema as UserAccountUncheckedCreateWithoutNotification_preferencesInputObjectSchema } from './UserAccountUncheckedCreateWithoutNotification_preferencesInput.schema';
import { UserAccountCreateOrConnectWithoutNotification_preferencesInputObjectSchema as UserAccountCreateOrConnectWithoutNotification_preferencesInputObjectSchema } from './UserAccountCreateOrConnectWithoutNotification_preferencesInput.schema';
import { UserAccountUpsertWithoutNotification_preferencesInputObjectSchema as UserAccountUpsertWithoutNotification_preferencesInputObjectSchema } from './UserAccountUpsertWithoutNotification_preferencesInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutNotification_preferencesInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutNotification_preferencesInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutNotification_preferencesInput.schema';
import { UserAccountUpdateWithoutNotification_preferencesInputObjectSchema as UserAccountUpdateWithoutNotification_preferencesInputObjectSchema } from './UserAccountUpdateWithoutNotification_preferencesInput.schema';
import { UserAccountUncheckedUpdateWithoutNotification_preferencesInputObjectSchema as UserAccountUncheckedUpdateWithoutNotification_preferencesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutNotification_preferencesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutNotification_preferencesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutNotification_preferencesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutNotification_preferencesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutNotification_preferencesInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutNotification_preferencesInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutNotification_preferencesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutNotification_preferencesInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutNotification_preferencesNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutNotification_preferencesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutNotification_preferencesNestedInput>;
export const UserAccountUpdateOneRequiredWithoutNotification_preferencesNestedInputObjectZodSchema = makeSchema();
