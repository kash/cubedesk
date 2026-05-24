import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutEmail_logInputObjectSchema as UserAccountCreateWithoutEmail_logInputObjectSchema } from './UserAccountCreateWithoutEmail_logInput.schema';
import { UserAccountUncheckedCreateWithoutEmail_logInputObjectSchema as UserAccountUncheckedCreateWithoutEmail_logInputObjectSchema } from './UserAccountUncheckedCreateWithoutEmail_logInput.schema';
import { UserAccountCreateOrConnectWithoutEmail_logInputObjectSchema as UserAccountCreateOrConnectWithoutEmail_logInputObjectSchema } from './UserAccountCreateOrConnectWithoutEmail_logInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutEmail_logInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutEmail_logInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutEmail_logInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutEmail_logInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutEmail_logInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutEmail_logInput>;
export const UserAccountCreateNestedOneWithoutEmail_logInputObjectZodSchema = makeSchema();
