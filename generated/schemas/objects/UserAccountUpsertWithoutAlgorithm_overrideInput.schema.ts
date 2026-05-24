import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutAlgorithm_overrideInputObjectSchema as UserAccountUpdateWithoutAlgorithm_overrideInputObjectSchema } from './UserAccountUpdateWithoutAlgorithm_overrideInput.schema';
import { UserAccountUncheckedUpdateWithoutAlgorithm_overrideInputObjectSchema as UserAccountUncheckedUpdateWithoutAlgorithm_overrideInputObjectSchema } from './UserAccountUncheckedUpdateWithoutAlgorithm_overrideInput.schema';
import { UserAccountCreateWithoutAlgorithm_overrideInputObjectSchema as UserAccountCreateWithoutAlgorithm_overrideInputObjectSchema } from './UserAccountCreateWithoutAlgorithm_overrideInput.schema';
import { UserAccountUncheckedCreateWithoutAlgorithm_overrideInputObjectSchema as UserAccountUncheckedCreateWithoutAlgorithm_overrideInputObjectSchema } from './UserAccountUncheckedCreateWithoutAlgorithm_overrideInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutAlgorithm_overrideInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutAlgorithm_overrideInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutAlgorithm_overrideInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutAlgorithm_overrideInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutAlgorithm_overrideInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutAlgorithm_overrideInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutAlgorithm_overrideInput>;
export const UserAccountUpsertWithoutAlgorithm_overrideInputObjectZodSchema = makeSchema();
