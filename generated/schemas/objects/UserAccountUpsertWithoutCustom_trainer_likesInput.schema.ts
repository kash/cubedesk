import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutCustom_trainer_likesInputObjectSchema as UserAccountUpdateWithoutCustom_trainer_likesInputObjectSchema } from './UserAccountUpdateWithoutCustom_trainer_likesInput.schema';
import { UserAccountUncheckedUpdateWithoutCustom_trainer_likesInputObjectSchema as UserAccountUncheckedUpdateWithoutCustom_trainer_likesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutCustom_trainer_likesInput.schema';
import { UserAccountCreateWithoutCustom_trainer_likesInputObjectSchema as UserAccountCreateWithoutCustom_trainer_likesInputObjectSchema } from './UserAccountCreateWithoutCustom_trainer_likesInput.schema';
import { UserAccountUncheckedCreateWithoutCustom_trainer_likesInputObjectSchema as UserAccountUncheckedCreateWithoutCustom_trainer_likesInputObjectSchema } from './UserAccountUncheckedCreateWithoutCustom_trainer_likesInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutCustom_trainer_likesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutCustom_trainer_likesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutCustom_trainer_likesInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutCustom_trainer_likesInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutCustom_trainer_likesInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutCustom_trainer_likesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutCustom_trainer_likesInput>;
export const UserAccountUpsertWithoutCustom_trainer_likesInputObjectZodSchema = makeSchema();
