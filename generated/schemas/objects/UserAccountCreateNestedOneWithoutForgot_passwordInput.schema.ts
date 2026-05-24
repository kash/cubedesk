import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutForgot_passwordInputObjectSchema as UserAccountCreateWithoutForgot_passwordInputObjectSchema } from './UserAccountCreateWithoutForgot_passwordInput.schema';
import { UserAccountUncheckedCreateWithoutForgot_passwordInputObjectSchema as UserAccountUncheckedCreateWithoutForgot_passwordInputObjectSchema } from './UserAccountUncheckedCreateWithoutForgot_passwordInput.schema';
import { UserAccountCreateOrConnectWithoutForgot_passwordInputObjectSchema as UserAccountCreateOrConnectWithoutForgot_passwordInputObjectSchema } from './UserAccountCreateOrConnectWithoutForgot_passwordInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutForgot_passwordInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutForgot_passwordInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutForgot_passwordInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutForgot_passwordInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutForgot_passwordInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutForgot_passwordInput>;
export const UserAccountCreateNestedOneWithoutForgot_passwordInputObjectZodSchema = makeSchema();
