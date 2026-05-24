import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutGame_sessionsInputObjectSchema as UserAccountCreateWithoutGame_sessionsInputObjectSchema } from './UserAccountCreateWithoutGame_sessionsInput.schema';
import { UserAccountUncheckedCreateWithoutGame_sessionsInputObjectSchema as UserAccountUncheckedCreateWithoutGame_sessionsInputObjectSchema } from './UserAccountUncheckedCreateWithoutGame_sessionsInput.schema';
import { UserAccountCreateOrConnectWithoutGame_sessionsInputObjectSchema as UserAccountCreateOrConnectWithoutGame_sessionsInputObjectSchema } from './UserAccountCreateOrConnectWithoutGame_sessionsInput.schema';
import { UserAccountUpsertWithoutGame_sessionsInputObjectSchema as UserAccountUpsertWithoutGame_sessionsInputObjectSchema } from './UserAccountUpsertWithoutGame_sessionsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutGame_sessionsInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutGame_sessionsInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutGame_sessionsInput.schema';
import { UserAccountUpdateWithoutGame_sessionsInputObjectSchema as UserAccountUpdateWithoutGame_sessionsInputObjectSchema } from './UserAccountUpdateWithoutGame_sessionsInput.schema';
import { UserAccountUncheckedUpdateWithoutGame_sessionsInputObjectSchema as UserAccountUncheckedUpdateWithoutGame_sessionsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutGame_sessionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutGame_sessionsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutGame_sessionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutGame_sessionsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutGame_sessionsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutGame_sessionsInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutGame_sessionsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutGame_sessionsInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutGame_sessionsNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutGame_sessionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutGame_sessionsNestedInput>;
export const UserAccountUpdateOneRequiredWithoutGame_sessionsNestedInputObjectZodSchema = makeSchema();
