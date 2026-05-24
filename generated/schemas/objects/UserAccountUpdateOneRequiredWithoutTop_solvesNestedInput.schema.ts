import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutTop_solvesInputObjectSchema as UserAccountCreateWithoutTop_solvesInputObjectSchema } from './UserAccountCreateWithoutTop_solvesInput.schema';
import { UserAccountUncheckedCreateWithoutTop_solvesInputObjectSchema as UserAccountUncheckedCreateWithoutTop_solvesInputObjectSchema } from './UserAccountUncheckedCreateWithoutTop_solvesInput.schema';
import { UserAccountCreateOrConnectWithoutTop_solvesInputObjectSchema as UserAccountCreateOrConnectWithoutTop_solvesInputObjectSchema } from './UserAccountCreateOrConnectWithoutTop_solvesInput.schema';
import { UserAccountUpsertWithoutTop_solvesInputObjectSchema as UserAccountUpsertWithoutTop_solvesInputObjectSchema } from './UserAccountUpsertWithoutTop_solvesInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutTop_solvesInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutTop_solvesInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutTop_solvesInput.schema';
import { UserAccountUpdateWithoutTop_solvesInputObjectSchema as UserAccountUpdateWithoutTop_solvesInputObjectSchema } from './UserAccountUpdateWithoutTop_solvesInput.schema';
import { UserAccountUncheckedUpdateWithoutTop_solvesInputObjectSchema as UserAccountUncheckedUpdateWithoutTop_solvesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutTop_solvesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutTop_solvesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutTop_solvesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutTop_solvesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutTop_solvesInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutTop_solvesInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutTop_solvesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutTop_solvesInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutTop_solvesNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutTop_solvesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutTop_solvesNestedInput>;
export const UserAccountUpdateOneRequiredWithoutTop_solvesNestedInputObjectZodSchema = makeSchema();
