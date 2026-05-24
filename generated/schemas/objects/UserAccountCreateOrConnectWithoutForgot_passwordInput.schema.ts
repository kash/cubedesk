import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutForgot_passwordInputObjectSchema as UserAccountCreateWithoutForgot_passwordInputObjectSchema } from './UserAccountCreateWithoutForgot_passwordInput.schema';
import { UserAccountUncheckedCreateWithoutForgot_passwordInputObjectSchema as UserAccountUncheckedCreateWithoutForgot_passwordInputObjectSchema } from './UserAccountUncheckedCreateWithoutForgot_passwordInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutForgot_passwordInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutForgot_passwordInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutForgot_passwordInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutForgot_passwordInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutForgot_passwordInput>;
export const UserAccountCreateOrConnectWithoutForgot_passwordInputObjectZodSchema = makeSchema();
