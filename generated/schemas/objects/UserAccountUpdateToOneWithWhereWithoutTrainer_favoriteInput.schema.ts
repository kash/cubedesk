import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutTrainer_favoriteInputObjectSchema as UserAccountUpdateWithoutTrainer_favoriteInputObjectSchema } from './UserAccountUpdateWithoutTrainer_favoriteInput.schema';
import { UserAccountUncheckedUpdateWithoutTrainer_favoriteInputObjectSchema as UserAccountUncheckedUpdateWithoutTrainer_favoriteInputObjectSchema } from './UserAccountUncheckedUpdateWithoutTrainer_favoriteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutTrainer_favoriteInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutTrainer_favoriteInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutTrainer_favoriteInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutTrainer_favoriteInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutTrainer_favoriteInput>;
export const UserAccountUpdateToOneWithWhereWithoutTrainer_favoriteInputObjectZodSchema = makeSchema();
