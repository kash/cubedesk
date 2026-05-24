import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutForgot_passwordInputObjectSchema as UserAccountUpdateWithoutForgot_passwordInputObjectSchema } from './UserAccountUpdateWithoutForgot_passwordInput.schema';
import { UserAccountUncheckedUpdateWithoutForgot_passwordInputObjectSchema as UserAccountUncheckedUpdateWithoutForgot_passwordInputObjectSchema } from './UserAccountUncheckedUpdateWithoutForgot_passwordInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutForgot_passwordInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutForgot_passwordInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutForgot_passwordInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutForgot_passwordInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutForgot_passwordInput>;
export const UserAccountUpdateToOneWithWhereWithoutForgot_passwordInputObjectZodSchema = makeSchema();
