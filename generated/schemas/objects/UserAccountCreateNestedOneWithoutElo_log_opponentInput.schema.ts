import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutElo_log_opponentInputObjectSchema as UserAccountCreateWithoutElo_log_opponentInputObjectSchema } from './UserAccountCreateWithoutElo_log_opponentInput.schema';
import { UserAccountUncheckedCreateWithoutElo_log_opponentInputObjectSchema as UserAccountUncheckedCreateWithoutElo_log_opponentInputObjectSchema } from './UserAccountUncheckedCreateWithoutElo_log_opponentInput.schema';
import { UserAccountCreateOrConnectWithoutElo_log_opponentInputObjectSchema as UserAccountCreateOrConnectWithoutElo_log_opponentInputObjectSchema } from './UserAccountCreateOrConnectWithoutElo_log_opponentInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutElo_log_opponentInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutElo_log_opponentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutElo_log_opponentInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutElo_log_opponentInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutElo_log_opponentInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutElo_log_opponentInput>;
export const UserAccountCreateNestedOneWithoutElo_log_opponentInputObjectZodSchema = makeSchema();
