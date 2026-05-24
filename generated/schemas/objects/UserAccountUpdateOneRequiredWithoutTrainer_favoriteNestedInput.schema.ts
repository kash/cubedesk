import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutTrainer_favoriteInputObjectSchema as UserAccountCreateWithoutTrainer_favoriteInputObjectSchema } from './UserAccountCreateWithoutTrainer_favoriteInput.schema';
import { UserAccountUncheckedCreateWithoutTrainer_favoriteInputObjectSchema as UserAccountUncheckedCreateWithoutTrainer_favoriteInputObjectSchema } from './UserAccountUncheckedCreateWithoutTrainer_favoriteInput.schema';
import { UserAccountCreateOrConnectWithoutTrainer_favoriteInputObjectSchema as UserAccountCreateOrConnectWithoutTrainer_favoriteInputObjectSchema } from './UserAccountCreateOrConnectWithoutTrainer_favoriteInput.schema';
import { UserAccountUpsertWithoutTrainer_favoriteInputObjectSchema as UserAccountUpsertWithoutTrainer_favoriteInputObjectSchema } from './UserAccountUpsertWithoutTrainer_favoriteInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutTrainer_favoriteInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutTrainer_favoriteInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutTrainer_favoriteInput.schema';
import { UserAccountUpdateWithoutTrainer_favoriteInputObjectSchema as UserAccountUpdateWithoutTrainer_favoriteInputObjectSchema } from './UserAccountUpdateWithoutTrainer_favoriteInput.schema';
import { UserAccountUncheckedUpdateWithoutTrainer_favoriteInputObjectSchema as UserAccountUncheckedUpdateWithoutTrainer_favoriteInputObjectSchema } from './UserAccountUncheckedUpdateWithoutTrainer_favoriteInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutTrainer_favoriteInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutTrainer_favoriteInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutTrainer_favoriteInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutTrainer_favoriteInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutTrainer_favoriteInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutTrainer_favoriteInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutTrainer_favoriteInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutTrainer_favoriteNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutTrainer_favoriteNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutTrainer_favoriteNestedInput>;
export const UserAccountUpdateOneRequiredWithoutTrainer_favoriteNestedInputObjectZodSchema = makeSchema();
