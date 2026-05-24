import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutGame_sessionsInputObjectSchema as UserAccountUpdateWithoutGame_sessionsInputObjectSchema } from './UserAccountUpdateWithoutGame_sessionsInput.schema';
import { UserAccountUncheckedUpdateWithoutGame_sessionsInputObjectSchema as UserAccountUncheckedUpdateWithoutGame_sessionsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutGame_sessionsInput.schema';
import { UserAccountCreateWithoutGame_sessionsInputObjectSchema as UserAccountCreateWithoutGame_sessionsInputObjectSchema } from './UserAccountCreateWithoutGame_sessionsInput.schema';
import { UserAccountUncheckedCreateWithoutGame_sessionsInputObjectSchema as UserAccountUncheckedCreateWithoutGame_sessionsInputObjectSchema } from './UserAccountUncheckedCreateWithoutGame_sessionsInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutGame_sessionsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutGame_sessionsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutGame_sessionsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutGame_sessionsInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutGame_sessionsInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutGame_sessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutGame_sessionsInput>;
export const UserAccountUpsertWithoutGame_sessionsInputObjectZodSchema = makeSchema();
