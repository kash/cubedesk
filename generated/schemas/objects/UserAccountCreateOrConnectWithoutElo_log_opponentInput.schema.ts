import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutElo_log_opponentInputObjectSchema as UserAccountCreateWithoutElo_log_opponentInputObjectSchema } from './UserAccountCreateWithoutElo_log_opponentInput.schema';
import { UserAccountUncheckedCreateWithoutElo_log_opponentInputObjectSchema as UserAccountUncheckedCreateWithoutElo_log_opponentInputObjectSchema } from './UserAccountUncheckedCreateWithoutElo_log_opponentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutElo_log_opponentInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutElo_log_opponentInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutElo_log_opponentInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutElo_log_opponentInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutElo_log_opponentInput>;
export const UserAccountCreateOrConnectWithoutElo_log_opponentInputObjectZodSchema = makeSchema();
