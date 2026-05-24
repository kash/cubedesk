import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutElo_log_playerInputObjectSchema as UserAccountCreateWithoutElo_log_playerInputObjectSchema } from './UserAccountCreateWithoutElo_log_playerInput.schema';
import { UserAccountUncheckedCreateWithoutElo_log_playerInputObjectSchema as UserAccountUncheckedCreateWithoutElo_log_playerInputObjectSchema } from './UserAccountUncheckedCreateWithoutElo_log_playerInput.schema';
import { UserAccountCreateOrConnectWithoutElo_log_playerInputObjectSchema as UserAccountCreateOrConnectWithoutElo_log_playerInputObjectSchema } from './UserAccountCreateOrConnectWithoutElo_log_playerInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutElo_log_playerInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutElo_log_playerInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutElo_log_playerInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutElo_log_playerInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutElo_log_playerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutElo_log_playerInput>;
export const UserAccountCreateNestedOneWithoutElo_log_playerInputObjectZodSchema = makeSchema();
