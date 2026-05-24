import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutTrainer_favoriteInputObjectSchema as UserAccountCreateWithoutTrainer_favoriteInputObjectSchema } from './UserAccountCreateWithoutTrainer_favoriteInput.schema';
import { UserAccountUncheckedCreateWithoutTrainer_favoriteInputObjectSchema as UserAccountUncheckedCreateWithoutTrainer_favoriteInputObjectSchema } from './UserAccountUncheckedCreateWithoutTrainer_favoriteInput.schema';
import { UserAccountCreateOrConnectWithoutTrainer_favoriteInputObjectSchema as UserAccountCreateOrConnectWithoutTrainer_favoriteInputObjectSchema } from './UserAccountCreateOrConnectWithoutTrainer_favoriteInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutTrainer_favoriteInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutTrainer_favoriteInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutTrainer_favoriteInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutTrainer_favoriteInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutTrainer_favoriteInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutTrainer_favoriteInput>;
export const UserAccountCreateNestedOneWithoutTrainer_favoriteInputObjectZodSchema = makeSchema();
