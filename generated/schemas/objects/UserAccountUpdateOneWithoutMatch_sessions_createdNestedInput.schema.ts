import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutMatch_sessions_createdInputObjectSchema as UserAccountCreateWithoutMatch_sessions_createdInputObjectSchema } from './UserAccountCreateWithoutMatch_sessions_createdInput.schema';
import { UserAccountUncheckedCreateWithoutMatch_sessions_createdInputObjectSchema as UserAccountUncheckedCreateWithoutMatch_sessions_createdInputObjectSchema } from './UserAccountUncheckedCreateWithoutMatch_sessions_createdInput.schema';
import { UserAccountCreateOrConnectWithoutMatch_sessions_createdInputObjectSchema as UserAccountCreateOrConnectWithoutMatch_sessions_createdInputObjectSchema } from './UserAccountCreateOrConnectWithoutMatch_sessions_createdInput.schema';
import { UserAccountUpsertWithoutMatch_sessions_createdInputObjectSchema as UserAccountUpsertWithoutMatch_sessions_createdInputObjectSchema } from './UserAccountUpsertWithoutMatch_sessions_createdInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutMatch_sessions_createdInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutMatch_sessions_createdInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutMatch_sessions_createdInput.schema';
import { UserAccountUpdateWithoutMatch_sessions_createdInputObjectSchema as UserAccountUpdateWithoutMatch_sessions_createdInputObjectSchema } from './UserAccountUpdateWithoutMatch_sessions_createdInput.schema';
import { UserAccountUncheckedUpdateWithoutMatch_sessions_createdInputObjectSchema as UserAccountUncheckedUpdateWithoutMatch_sessions_createdInputObjectSchema } from './UserAccountUncheckedUpdateWithoutMatch_sessions_createdInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutMatch_sessions_createdInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutMatch_sessions_createdInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutMatch_sessions_createdInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutMatch_sessions_createdInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutMatch_sessions_createdInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutMatch_sessions_createdInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutMatch_sessions_createdInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneWithoutMatch_sessions_createdNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneWithoutMatch_sessions_createdNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneWithoutMatch_sessions_createdNestedInput>;
export const UserAccountUpdateOneWithoutMatch_sessions_createdNestedInputObjectZodSchema = makeSchema();
