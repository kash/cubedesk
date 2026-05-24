import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutMatch_sessions_createdInputObjectSchema as UserAccountCreateWithoutMatch_sessions_createdInputObjectSchema } from './UserAccountCreateWithoutMatch_sessions_createdInput.schema';
import { UserAccountUncheckedCreateWithoutMatch_sessions_createdInputObjectSchema as UserAccountUncheckedCreateWithoutMatch_sessions_createdInputObjectSchema } from './UserAccountUncheckedCreateWithoutMatch_sessions_createdInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutMatch_sessions_createdInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutMatch_sessions_createdInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutMatch_sessions_createdInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutMatch_sessions_createdInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutMatch_sessions_createdInput>;
export const UserAccountCreateOrConnectWithoutMatch_sessions_createdInputObjectZodSchema = makeSchema();
