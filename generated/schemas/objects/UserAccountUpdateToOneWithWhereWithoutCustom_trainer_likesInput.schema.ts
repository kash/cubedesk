import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutCustom_trainer_likesInputObjectSchema as UserAccountUpdateWithoutCustom_trainer_likesInputObjectSchema } from './UserAccountUpdateWithoutCustom_trainer_likesInput.schema';
import { UserAccountUncheckedUpdateWithoutCustom_trainer_likesInputObjectSchema as UserAccountUncheckedUpdateWithoutCustom_trainer_likesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutCustom_trainer_likesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutCustom_trainer_likesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutCustom_trainer_likesInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutCustom_trainer_likesInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutCustom_trainer_likesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutCustom_trainer_likesInput>;
export const UserAccountUpdateToOneWithWhereWithoutCustom_trainer_likesInputObjectZodSchema = makeSchema();
