import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutCustom_trainer_downloadedInputObjectSchema as UserAccountUpdateWithoutCustom_trainer_downloadedInputObjectSchema } from './UserAccountUpdateWithoutCustom_trainer_downloadedInput.schema';
import { UserAccountUncheckedUpdateWithoutCustom_trainer_downloadedInputObjectSchema as UserAccountUncheckedUpdateWithoutCustom_trainer_downloadedInputObjectSchema } from './UserAccountUncheckedUpdateWithoutCustom_trainer_downloadedInput.schema';
import { UserAccountCreateWithoutCustom_trainer_downloadedInputObjectSchema as UserAccountCreateWithoutCustom_trainer_downloadedInputObjectSchema } from './UserAccountCreateWithoutCustom_trainer_downloadedInput.schema';
import { UserAccountUncheckedCreateWithoutCustom_trainer_downloadedInputObjectSchema as UserAccountUncheckedCreateWithoutCustom_trainer_downloadedInputObjectSchema } from './UserAccountUncheckedCreateWithoutCustom_trainer_downloadedInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutCustom_trainer_downloadedInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutCustom_trainer_downloadedInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutCustom_trainer_downloadedInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutCustom_trainer_downloadedInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutCustom_trainer_downloadedInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutCustom_trainer_downloadedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutCustom_trainer_downloadedInput>;
export const UserAccountUpsertWithoutCustom_trainer_downloadedInputObjectZodSchema = makeSchema();
