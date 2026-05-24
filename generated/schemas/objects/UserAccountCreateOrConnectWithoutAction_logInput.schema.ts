import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutAction_logInputObjectSchema as UserAccountCreateWithoutAction_logInputObjectSchema } from './UserAccountCreateWithoutAction_logInput.schema';
import { UserAccountUncheckedCreateWithoutAction_logInputObjectSchema as UserAccountUncheckedCreateWithoutAction_logInputObjectSchema } from './UserAccountUncheckedCreateWithoutAction_logInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutAction_logInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutAction_logInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutAction_logInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutAction_logInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutAction_logInput>;
export const UserAccountCreateOrConnectWithoutAction_logInputObjectZodSchema = makeSchema();
