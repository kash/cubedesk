import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutElo_log_playerInputObjectSchema as UserAccountUpdateWithoutElo_log_playerInputObjectSchema } from './UserAccountUpdateWithoutElo_log_playerInput.schema';
import { UserAccountUncheckedUpdateWithoutElo_log_playerInputObjectSchema as UserAccountUncheckedUpdateWithoutElo_log_playerInputObjectSchema } from './UserAccountUncheckedUpdateWithoutElo_log_playerInput.schema';
import { UserAccountCreateWithoutElo_log_playerInputObjectSchema as UserAccountCreateWithoutElo_log_playerInputObjectSchema } from './UserAccountCreateWithoutElo_log_playerInput.schema';
import { UserAccountUncheckedCreateWithoutElo_log_playerInputObjectSchema as UserAccountUncheckedCreateWithoutElo_log_playerInputObjectSchema } from './UserAccountUncheckedCreateWithoutElo_log_playerInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutElo_log_playerInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutElo_log_playerInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutElo_log_playerInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutElo_log_playerInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutElo_log_playerInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutElo_log_playerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutElo_log_playerInput>;
export const UserAccountUpsertWithoutElo_log_playerInputObjectZodSchema = makeSchema();
