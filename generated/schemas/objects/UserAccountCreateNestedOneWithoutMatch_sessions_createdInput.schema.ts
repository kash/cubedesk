import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutMatch_sessions_createdInputObjectSchema as UserAccountCreateWithoutMatch_sessions_createdInputObjectSchema } from './UserAccountCreateWithoutMatch_sessions_createdInput.schema';
import { UserAccountUncheckedCreateWithoutMatch_sessions_createdInputObjectSchema as UserAccountUncheckedCreateWithoutMatch_sessions_createdInputObjectSchema } from './UserAccountUncheckedCreateWithoutMatch_sessions_createdInput.schema';
import { UserAccountCreateOrConnectWithoutMatch_sessions_createdInputObjectSchema as UserAccountCreateOrConnectWithoutMatch_sessions_createdInputObjectSchema } from './UserAccountCreateOrConnectWithoutMatch_sessions_createdInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutMatch_sessions_createdInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutMatch_sessions_createdInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutMatch_sessions_createdInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutMatch_sessions_createdInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutMatch_sessions_createdInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutMatch_sessions_createdInput>;
export const UserAccountCreateNestedOneWithoutMatch_sessions_createdInputObjectZodSchema = makeSchema();
