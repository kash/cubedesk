import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutGame_sessionsInputObjectSchema as UserAccountUpdateWithoutGame_sessionsInputObjectSchema } from './UserAccountUpdateWithoutGame_sessionsInput.schema';
import { UserAccountUncheckedUpdateWithoutGame_sessionsInputObjectSchema as UserAccountUncheckedUpdateWithoutGame_sessionsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutGame_sessionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutGame_sessionsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutGame_sessionsInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutGame_sessionsInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutGame_sessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutGame_sessionsInput>;
export const UserAccountUpdateToOneWithWhereWithoutGame_sessionsInputObjectZodSchema = makeSchema();
