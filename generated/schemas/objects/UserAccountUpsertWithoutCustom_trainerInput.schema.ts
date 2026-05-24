import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutCustom_trainerInputObjectSchema as UserAccountUpdateWithoutCustom_trainerInputObjectSchema } from './UserAccountUpdateWithoutCustom_trainerInput.schema';
import { UserAccountUncheckedUpdateWithoutCustom_trainerInputObjectSchema as UserAccountUncheckedUpdateWithoutCustom_trainerInputObjectSchema } from './UserAccountUncheckedUpdateWithoutCustom_trainerInput.schema';
import { UserAccountCreateWithoutCustom_trainerInputObjectSchema as UserAccountCreateWithoutCustom_trainerInputObjectSchema } from './UserAccountCreateWithoutCustom_trainerInput.schema';
import { UserAccountUncheckedCreateWithoutCustom_trainerInputObjectSchema as UserAccountUncheckedCreateWithoutCustom_trainerInputObjectSchema } from './UserAccountUncheckedCreateWithoutCustom_trainerInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutCustom_trainerInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutCustom_trainerInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutCustom_trainerInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutCustom_trainerInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutCustom_trainerInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutCustom_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutCustom_trainerInput>;
export const UserAccountUpsertWithoutCustom_trainerInputObjectZodSchema = makeSchema();
