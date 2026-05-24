import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutCustom_trainer_downloadsInputObjectSchema as UserAccountUpdateWithoutCustom_trainer_downloadsInputObjectSchema } from './UserAccountUpdateWithoutCustom_trainer_downloadsInput.schema';
import { UserAccountUncheckedUpdateWithoutCustom_trainer_downloadsInputObjectSchema as UserAccountUncheckedUpdateWithoutCustom_trainer_downloadsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutCustom_trainer_downloadsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutCustom_trainer_downloadsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutCustom_trainer_downloadsInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutCustom_trainer_downloadsInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutCustom_trainer_downloadsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutCustom_trainer_downloadsInput>;
export const UserAccountUpdateToOneWithWhereWithoutCustom_trainer_downloadsInputObjectZodSchema = makeSchema();
