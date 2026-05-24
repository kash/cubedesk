import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutTrainer_favoriteInputObjectSchema as UserAccountCreateWithoutTrainer_favoriteInputObjectSchema } from './UserAccountCreateWithoutTrainer_favoriteInput.schema';
import { UserAccountUncheckedCreateWithoutTrainer_favoriteInputObjectSchema as UserAccountUncheckedCreateWithoutTrainer_favoriteInputObjectSchema } from './UserAccountUncheckedCreateWithoutTrainer_favoriteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutTrainer_favoriteInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutTrainer_favoriteInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutTrainer_favoriteInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutTrainer_favoriteInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutTrainer_favoriteInput>;
export const UserAccountCreateOrConnectWithoutTrainer_favoriteInputObjectZodSchema = makeSchema();
