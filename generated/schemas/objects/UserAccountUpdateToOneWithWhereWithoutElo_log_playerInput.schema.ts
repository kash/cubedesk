import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutElo_log_playerInputObjectSchema as UserAccountUpdateWithoutElo_log_playerInputObjectSchema } from './UserAccountUpdateWithoutElo_log_playerInput.schema';
import { UserAccountUncheckedUpdateWithoutElo_log_playerInputObjectSchema as UserAccountUncheckedUpdateWithoutElo_log_playerInputObjectSchema } from './UserAccountUncheckedUpdateWithoutElo_log_playerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutElo_log_playerInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutElo_log_playerInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutElo_log_playerInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutElo_log_playerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutElo_log_playerInput>;
export const UserAccountUpdateToOneWithWhereWithoutElo_log_playerInputObjectZodSchema = makeSchema();
