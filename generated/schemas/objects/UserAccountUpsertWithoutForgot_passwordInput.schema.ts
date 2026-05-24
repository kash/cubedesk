import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutForgot_passwordInputObjectSchema as UserAccountUpdateWithoutForgot_passwordInputObjectSchema } from './UserAccountUpdateWithoutForgot_passwordInput.schema';
import { UserAccountUncheckedUpdateWithoutForgot_passwordInputObjectSchema as UserAccountUncheckedUpdateWithoutForgot_passwordInputObjectSchema } from './UserAccountUncheckedUpdateWithoutForgot_passwordInput.schema';
import { UserAccountCreateWithoutForgot_passwordInputObjectSchema as UserAccountCreateWithoutForgot_passwordInputObjectSchema } from './UserAccountCreateWithoutForgot_passwordInput.schema';
import { UserAccountUncheckedCreateWithoutForgot_passwordInputObjectSchema as UserAccountUncheckedCreateWithoutForgot_passwordInputObjectSchema } from './UserAccountUncheckedCreateWithoutForgot_passwordInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutForgot_passwordInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutForgot_passwordInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutForgot_passwordInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutForgot_passwordInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutForgot_passwordInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutForgot_passwordInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutForgot_passwordInput>;
export const UserAccountUpsertWithoutForgot_passwordInputObjectZodSchema = makeSchema();
