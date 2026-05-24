import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutTop_solvesInputObjectSchema as UserAccountUpdateWithoutTop_solvesInputObjectSchema } from './UserAccountUpdateWithoutTop_solvesInput.schema';
import { UserAccountUncheckedUpdateWithoutTop_solvesInputObjectSchema as UserAccountUncheckedUpdateWithoutTop_solvesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutTop_solvesInput.schema';
import { UserAccountCreateWithoutTop_solvesInputObjectSchema as UserAccountCreateWithoutTop_solvesInputObjectSchema } from './UserAccountCreateWithoutTop_solvesInput.schema';
import { UserAccountUncheckedCreateWithoutTop_solvesInputObjectSchema as UserAccountUncheckedCreateWithoutTop_solvesInputObjectSchema } from './UserAccountUncheckedCreateWithoutTop_solvesInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutTop_solvesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutTop_solvesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutTop_solvesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutTop_solvesInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutTop_solvesInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutTop_solvesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutTop_solvesInput>;
export const UserAccountUpsertWithoutTop_solvesInputObjectZodSchema = makeSchema();
