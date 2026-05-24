import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutMatch_sessions_createdInputObjectSchema as UserAccountUpdateWithoutMatch_sessions_createdInputObjectSchema } from './UserAccountUpdateWithoutMatch_sessions_createdInput.schema';
import { UserAccountUncheckedUpdateWithoutMatch_sessions_createdInputObjectSchema as UserAccountUncheckedUpdateWithoutMatch_sessions_createdInputObjectSchema } from './UserAccountUncheckedUpdateWithoutMatch_sessions_createdInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutMatch_sessions_createdInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutMatch_sessions_createdInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutMatch_sessions_createdInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutMatch_sessions_createdInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutMatch_sessions_createdInput>;
export const UserAccountUpdateToOneWithWhereWithoutMatch_sessions_createdInputObjectZodSchema = makeSchema();
