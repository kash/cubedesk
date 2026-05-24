import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutElo_log_playerInputObjectSchema as UserAccountCreateWithoutElo_log_playerInputObjectSchema } from './UserAccountCreateWithoutElo_log_playerInput.schema';
import { UserAccountUncheckedCreateWithoutElo_log_playerInputObjectSchema as UserAccountUncheckedCreateWithoutElo_log_playerInputObjectSchema } from './UserAccountUncheckedCreateWithoutElo_log_playerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutElo_log_playerInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutElo_log_playerInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutElo_log_playerInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutElo_log_playerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutElo_log_playerInput>;
export const UserAccountCreateOrConnectWithoutElo_log_playerInputObjectZodSchema = makeSchema();
