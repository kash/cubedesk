import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutAction_logInputObjectSchema as UserAccountCreateWithoutAction_logInputObjectSchema } from './UserAccountCreateWithoutAction_logInput.schema';
import { UserAccountUncheckedCreateWithoutAction_logInputObjectSchema as UserAccountUncheckedCreateWithoutAction_logInputObjectSchema } from './UserAccountUncheckedCreateWithoutAction_logInput.schema';
import { UserAccountCreateOrConnectWithoutAction_logInputObjectSchema as UserAccountCreateOrConnectWithoutAction_logInputObjectSchema } from './UserAccountCreateOrConnectWithoutAction_logInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutAction_logInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutAction_logInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutAction_logInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutAction_logInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutAction_logInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutAction_logInput>;
export const UserAccountCreateNestedOneWithoutAction_logInputObjectZodSchema = makeSchema();
