import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutTop_averageInputObjectSchema as UserAccountUpdateWithoutTop_averageInputObjectSchema } from './UserAccountUpdateWithoutTop_averageInput.schema';
import { UserAccountUncheckedUpdateWithoutTop_averageInputObjectSchema as UserAccountUncheckedUpdateWithoutTop_averageInputObjectSchema } from './UserAccountUncheckedUpdateWithoutTop_averageInput.schema';
import { UserAccountCreateWithoutTop_averageInputObjectSchema as UserAccountCreateWithoutTop_averageInputObjectSchema } from './UserAccountCreateWithoutTop_averageInput.schema';
import { UserAccountUncheckedCreateWithoutTop_averageInputObjectSchema as UserAccountUncheckedCreateWithoutTop_averageInputObjectSchema } from './UserAccountUncheckedCreateWithoutTop_averageInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutTop_averageInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutTop_averageInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutTop_averageInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutTop_averageInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutTop_averageInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutTop_averageInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutTop_averageInput>;
export const UserAccountUpsertWithoutTop_averageInputObjectZodSchema = makeSchema();
