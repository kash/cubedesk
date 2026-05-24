import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutCustom_trainerInputObjectSchema as UserAccountUpdateWithoutCustom_trainerInputObjectSchema } from './UserAccountUpdateWithoutCustom_trainerInput.schema';
import { UserAccountUncheckedUpdateWithoutCustom_trainerInputObjectSchema as UserAccountUncheckedUpdateWithoutCustom_trainerInputObjectSchema } from './UserAccountUncheckedUpdateWithoutCustom_trainerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutCustom_trainerInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutCustom_trainerInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutCustom_trainerInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutCustom_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutCustom_trainerInput>;
export const UserAccountUpdateToOneWithWhereWithoutCustom_trainerInputObjectZodSchema = makeSchema();
