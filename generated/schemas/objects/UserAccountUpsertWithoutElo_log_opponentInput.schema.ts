import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutElo_log_opponentInputObjectSchema as UserAccountUpdateWithoutElo_log_opponentInputObjectSchema } from './UserAccountUpdateWithoutElo_log_opponentInput.schema';
import { UserAccountUncheckedUpdateWithoutElo_log_opponentInputObjectSchema as UserAccountUncheckedUpdateWithoutElo_log_opponentInputObjectSchema } from './UserAccountUncheckedUpdateWithoutElo_log_opponentInput.schema';
import { UserAccountCreateWithoutElo_log_opponentInputObjectSchema as UserAccountCreateWithoutElo_log_opponentInputObjectSchema } from './UserAccountCreateWithoutElo_log_opponentInput.schema';
import { UserAccountUncheckedCreateWithoutElo_log_opponentInputObjectSchema as UserAccountUncheckedCreateWithoutElo_log_opponentInputObjectSchema } from './UserAccountUncheckedCreateWithoutElo_log_opponentInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutElo_log_opponentInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutElo_log_opponentInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutElo_log_opponentInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutElo_log_opponentInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutElo_log_opponentInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutElo_log_opponentInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutElo_log_opponentInput>;
export const UserAccountUpsertWithoutElo_log_opponentInputObjectZodSchema = makeSchema();
