import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutElo_log_playerInputObjectSchema as UserAccountCreateWithoutElo_log_playerInputObjectSchema } from './UserAccountCreateWithoutElo_log_playerInput.schema';
import { UserAccountUncheckedCreateWithoutElo_log_playerInputObjectSchema as UserAccountUncheckedCreateWithoutElo_log_playerInputObjectSchema } from './UserAccountUncheckedCreateWithoutElo_log_playerInput.schema';
import { UserAccountCreateOrConnectWithoutElo_log_playerInputObjectSchema as UserAccountCreateOrConnectWithoutElo_log_playerInputObjectSchema } from './UserAccountCreateOrConnectWithoutElo_log_playerInput.schema';
import { UserAccountUpsertWithoutElo_log_playerInputObjectSchema as UserAccountUpsertWithoutElo_log_playerInputObjectSchema } from './UserAccountUpsertWithoutElo_log_playerInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutElo_log_playerInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutElo_log_playerInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutElo_log_playerInput.schema';
import { UserAccountUpdateWithoutElo_log_playerInputObjectSchema as UserAccountUpdateWithoutElo_log_playerInputObjectSchema } from './UserAccountUpdateWithoutElo_log_playerInput.schema';
import { UserAccountUncheckedUpdateWithoutElo_log_playerInputObjectSchema as UserAccountUncheckedUpdateWithoutElo_log_playerInputObjectSchema } from './UserAccountUncheckedUpdateWithoutElo_log_playerInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutElo_log_playerInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutElo_log_playerInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutElo_log_playerInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutElo_log_playerInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutElo_log_playerInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutElo_log_playerInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutElo_log_playerInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutElo_log_playerNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutElo_log_playerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutElo_log_playerNestedInput>;
export const UserAccountUpdateOneRequiredWithoutElo_log_playerNestedInputObjectZodSchema = makeSchema();
