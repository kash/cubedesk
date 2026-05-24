import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutNotification_preferencesInputObjectSchema as UserAccountUpdateWithoutNotification_preferencesInputObjectSchema } from './UserAccountUpdateWithoutNotification_preferencesInput.schema';
import { UserAccountUncheckedUpdateWithoutNotification_preferencesInputObjectSchema as UserAccountUncheckedUpdateWithoutNotification_preferencesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutNotification_preferencesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutNotification_preferencesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutNotification_preferencesInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutNotification_preferencesInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutNotification_preferencesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutNotification_preferencesInput>;
export const UserAccountUpdateToOneWithWhereWithoutNotification_preferencesInputObjectZodSchema = makeSchema();
