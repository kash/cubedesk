import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutGame_sessionsInputObjectSchema as UserAccountCreateWithoutGame_sessionsInputObjectSchema } from './UserAccountCreateWithoutGame_sessionsInput.schema';
import { UserAccountUncheckedCreateWithoutGame_sessionsInputObjectSchema as UserAccountUncheckedCreateWithoutGame_sessionsInputObjectSchema } from './UserAccountUncheckedCreateWithoutGame_sessionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutGame_sessionsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutGame_sessionsInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutGame_sessionsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutGame_sessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutGame_sessionsInput>;
export const UserAccountCreateOrConnectWithoutGame_sessionsInputObjectZodSchema = makeSchema();
