import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutElo_log_opponentInputObjectSchema as UserAccountCreateWithoutElo_log_opponentInputObjectSchema } from './UserAccountCreateWithoutElo_log_opponentInput.schema';
import { UserAccountUncheckedCreateWithoutElo_log_opponentInputObjectSchema as UserAccountUncheckedCreateWithoutElo_log_opponentInputObjectSchema } from './UserAccountUncheckedCreateWithoutElo_log_opponentInput.schema';
import { UserAccountCreateOrConnectWithoutElo_log_opponentInputObjectSchema as UserAccountCreateOrConnectWithoutElo_log_opponentInputObjectSchema } from './UserAccountCreateOrConnectWithoutElo_log_opponentInput.schema';
import { UserAccountUpsertWithoutElo_log_opponentInputObjectSchema as UserAccountUpsertWithoutElo_log_opponentInputObjectSchema } from './UserAccountUpsertWithoutElo_log_opponentInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutElo_log_opponentInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutElo_log_opponentInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutElo_log_opponentInput.schema';
import { UserAccountUpdateWithoutElo_log_opponentInputObjectSchema as UserAccountUpdateWithoutElo_log_opponentInputObjectSchema } from './UserAccountUpdateWithoutElo_log_opponentInput.schema';
import { UserAccountUncheckedUpdateWithoutElo_log_opponentInputObjectSchema as UserAccountUncheckedUpdateWithoutElo_log_opponentInputObjectSchema } from './UserAccountUncheckedUpdateWithoutElo_log_opponentInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutElo_log_opponentInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutElo_log_opponentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutElo_log_opponentInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutElo_log_opponentInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutElo_log_opponentInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutElo_log_opponentInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutElo_log_opponentInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneWithoutElo_log_opponentNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneWithoutElo_log_opponentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneWithoutElo_log_opponentNestedInput>;
export const UserAccountUpdateOneWithoutElo_log_opponentNestedInputObjectZodSchema = makeSchema();
