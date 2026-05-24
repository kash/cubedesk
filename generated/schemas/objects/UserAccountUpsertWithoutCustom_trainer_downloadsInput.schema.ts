import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutCustom_trainer_downloadsInputObjectSchema as UserAccountUpdateWithoutCustom_trainer_downloadsInputObjectSchema } from './UserAccountUpdateWithoutCustom_trainer_downloadsInput.schema';
import { UserAccountUncheckedUpdateWithoutCustom_trainer_downloadsInputObjectSchema as UserAccountUncheckedUpdateWithoutCustom_trainer_downloadsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutCustom_trainer_downloadsInput.schema';
import { UserAccountCreateWithoutCustom_trainer_downloadsInputObjectSchema as UserAccountCreateWithoutCustom_trainer_downloadsInputObjectSchema } from './UserAccountCreateWithoutCustom_trainer_downloadsInput.schema';
import { UserAccountUncheckedCreateWithoutCustom_trainer_downloadsInputObjectSchema as UserAccountUncheckedCreateWithoutCustom_trainer_downloadsInputObjectSchema } from './UserAccountUncheckedCreateWithoutCustom_trainer_downloadsInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutCustom_trainer_downloadsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutCustom_trainer_downloadsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutCustom_trainer_downloadsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutCustom_trainer_downloadsInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutCustom_trainer_downloadsInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutCustom_trainer_downloadsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutCustom_trainer_downloadsInput>;
export const UserAccountUpsertWithoutCustom_trainer_downloadsInputObjectZodSchema = makeSchema();
