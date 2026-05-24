import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutEmail_logInputObjectSchema as UserAccountCreateWithoutEmail_logInputObjectSchema } from './UserAccountCreateWithoutEmail_logInput.schema';
import { UserAccountUncheckedCreateWithoutEmail_logInputObjectSchema as UserAccountUncheckedCreateWithoutEmail_logInputObjectSchema } from './UserAccountUncheckedCreateWithoutEmail_logInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutEmail_logInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutEmail_logInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutEmail_logInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutEmail_logInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutEmail_logInput>;
export const UserAccountCreateOrConnectWithoutEmail_logInputObjectZodSchema = makeSchema();
