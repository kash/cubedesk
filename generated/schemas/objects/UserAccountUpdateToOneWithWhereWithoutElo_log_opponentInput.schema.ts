import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutElo_log_opponentInputObjectSchema as UserAccountUpdateWithoutElo_log_opponentInputObjectSchema } from './UserAccountUpdateWithoutElo_log_opponentInput.schema';
import { UserAccountUncheckedUpdateWithoutElo_log_opponentInputObjectSchema as UserAccountUncheckedUpdateWithoutElo_log_opponentInputObjectSchema } from './UserAccountUncheckedUpdateWithoutElo_log_opponentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutElo_log_opponentInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutElo_log_opponentInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutElo_log_opponentInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutElo_log_opponentInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutElo_log_opponentInput>;
export const UserAccountUpdateToOneWithWhereWithoutElo_log_opponentInputObjectZodSchema = makeSchema();
