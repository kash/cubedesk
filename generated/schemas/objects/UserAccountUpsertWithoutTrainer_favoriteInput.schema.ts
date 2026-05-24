import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutTrainer_favoriteInputObjectSchema as UserAccountUpdateWithoutTrainer_favoriteInputObjectSchema } from './UserAccountUpdateWithoutTrainer_favoriteInput.schema';
import { UserAccountUncheckedUpdateWithoutTrainer_favoriteInputObjectSchema as UserAccountUncheckedUpdateWithoutTrainer_favoriteInputObjectSchema } from './UserAccountUncheckedUpdateWithoutTrainer_favoriteInput.schema';
import { UserAccountCreateWithoutTrainer_favoriteInputObjectSchema as UserAccountCreateWithoutTrainer_favoriteInputObjectSchema } from './UserAccountCreateWithoutTrainer_favoriteInput.schema';
import { UserAccountUncheckedCreateWithoutTrainer_favoriteInputObjectSchema as UserAccountUncheckedCreateWithoutTrainer_favoriteInputObjectSchema } from './UserAccountUncheckedCreateWithoutTrainer_favoriteInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutTrainer_favoriteInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutTrainer_favoriteInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutTrainer_favoriteInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutTrainer_favoriteInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutTrainer_favoriteInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutTrainer_favoriteInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutTrainer_favoriteInput>;
export const UserAccountUpsertWithoutTrainer_favoriteInputObjectZodSchema = makeSchema();
