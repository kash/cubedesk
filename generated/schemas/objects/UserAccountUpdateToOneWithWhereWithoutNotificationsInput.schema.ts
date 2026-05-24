import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutNotificationsInputObjectSchema as UserAccountUpdateWithoutNotificationsInputObjectSchema } from './UserAccountUpdateWithoutNotificationsInput.schema';
import { UserAccountUncheckedUpdateWithoutNotificationsInputObjectSchema as UserAccountUncheckedUpdateWithoutNotificationsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutNotificationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutNotificationsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutNotificationsInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutNotificationsInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutNotificationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutNotificationsInput>;
export const UserAccountUpdateToOneWithWhereWithoutNotificationsInputObjectZodSchema = makeSchema();
