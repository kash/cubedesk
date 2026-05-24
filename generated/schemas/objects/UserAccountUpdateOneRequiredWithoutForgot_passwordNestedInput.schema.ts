import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutForgot_passwordInputObjectSchema as UserAccountCreateWithoutForgot_passwordInputObjectSchema } from './UserAccountCreateWithoutForgot_passwordInput.schema';
import { UserAccountUncheckedCreateWithoutForgot_passwordInputObjectSchema as UserAccountUncheckedCreateWithoutForgot_passwordInputObjectSchema } from './UserAccountUncheckedCreateWithoutForgot_passwordInput.schema';
import { UserAccountCreateOrConnectWithoutForgot_passwordInputObjectSchema as UserAccountCreateOrConnectWithoutForgot_passwordInputObjectSchema } from './UserAccountCreateOrConnectWithoutForgot_passwordInput.schema';
import { UserAccountUpsertWithoutForgot_passwordInputObjectSchema as UserAccountUpsertWithoutForgot_passwordInputObjectSchema } from './UserAccountUpsertWithoutForgot_passwordInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutForgot_passwordInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutForgot_passwordInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutForgot_passwordInput.schema';
import { UserAccountUpdateWithoutForgot_passwordInputObjectSchema as UserAccountUpdateWithoutForgot_passwordInputObjectSchema } from './UserAccountUpdateWithoutForgot_passwordInput.schema';
import { UserAccountUncheckedUpdateWithoutForgot_passwordInputObjectSchema as UserAccountUncheckedUpdateWithoutForgot_passwordInputObjectSchema } from './UserAccountUncheckedUpdateWithoutForgot_passwordInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutForgot_passwordInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutForgot_passwordInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutForgot_passwordInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutForgot_passwordInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutForgot_passwordInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutForgot_passwordInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutForgot_passwordInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutForgot_passwordNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutForgot_passwordNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutForgot_passwordNestedInput>;
export const UserAccountUpdateOneRequiredWithoutForgot_passwordNestedInputObjectZodSchema = makeSchema();
