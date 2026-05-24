import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutMatch_sessions_createdInputObjectSchema as UserAccountUpdateWithoutMatch_sessions_createdInputObjectSchema } from './UserAccountUpdateWithoutMatch_sessions_createdInput.schema';
import { UserAccountUncheckedUpdateWithoutMatch_sessions_createdInputObjectSchema as UserAccountUncheckedUpdateWithoutMatch_sessions_createdInputObjectSchema } from './UserAccountUncheckedUpdateWithoutMatch_sessions_createdInput.schema';
import { UserAccountCreateWithoutMatch_sessions_createdInputObjectSchema as UserAccountCreateWithoutMatch_sessions_createdInputObjectSchema } from './UserAccountCreateWithoutMatch_sessions_createdInput.schema';
import { UserAccountUncheckedCreateWithoutMatch_sessions_createdInputObjectSchema as UserAccountUncheckedCreateWithoutMatch_sessions_createdInputObjectSchema } from './UserAccountUncheckedCreateWithoutMatch_sessions_createdInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutMatch_sessions_createdInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutMatch_sessions_createdInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutMatch_sessions_createdInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutMatch_sessions_createdInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutMatch_sessions_createdInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutMatch_sessions_createdInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutMatch_sessions_createdInput>;
export const UserAccountUpsertWithoutMatch_sessions_createdInputObjectZodSchema = makeSchema();
