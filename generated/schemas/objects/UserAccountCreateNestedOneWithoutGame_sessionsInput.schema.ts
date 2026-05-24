import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutGame_sessionsInputObjectSchema as UserAccountCreateWithoutGame_sessionsInputObjectSchema } from './UserAccountCreateWithoutGame_sessionsInput.schema';
import { UserAccountUncheckedCreateWithoutGame_sessionsInputObjectSchema as UserAccountUncheckedCreateWithoutGame_sessionsInputObjectSchema } from './UserAccountUncheckedCreateWithoutGame_sessionsInput.schema';
import { UserAccountCreateOrConnectWithoutGame_sessionsInputObjectSchema as UserAccountCreateOrConnectWithoutGame_sessionsInputObjectSchema } from './UserAccountCreateOrConnectWithoutGame_sessionsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutGame_sessionsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutGame_sessionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutGame_sessionsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutGame_sessionsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutGame_sessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutGame_sessionsInput>;
export const UserAccountCreateNestedOneWithoutGame_sessionsInputObjectZodSchema = makeSchema();
