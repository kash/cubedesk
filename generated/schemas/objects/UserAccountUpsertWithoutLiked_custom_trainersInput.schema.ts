import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutLiked_custom_trainersInputObjectSchema as UserAccountUpdateWithoutLiked_custom_trainersInputObjectSchema } from './UserAccountUpdateWithoutLiked_custom_trainersInput.schema';
import { UserAccountUncheckedUpdateWithoutLiked_custom_trainersInputObjectSchema as UserAccountUncheckedUpdateWithoutLiked_custom_trainersInputObjectSchema } from './UserAccountUncheckedUpdateWithoutLiked_custom_trainersInput.schema';
import { UserAccountCreateWithoutLiked_custom_trainersInputObjectSchema as UserAccountCreateWithoutLiked_custom_trainersInputObjectSchema } from './UserAccountCreateWithoutLiked_custom_trainersInput.schema';
import { UserAccountUncheckedCreateWithoutLiked_custom_trainersInputObjectSchema as UserAccountUncheckedCreateWithoutLiked_custom_trainersInputObjectSchema } from './UserAccountUncheckedCreateWithoutLiked_custom_trainersInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutLiked_custom_trainersInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutLiked_custom_trainersInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutLiked_custom_trainersInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutLiked_custom_trainersInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutLiked_custom_trainersInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutLiked_custom_trainersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutLiked_custom_trainersInput>;
export const UserAccountUpsertWithoutLiked_custom_trainersInputObjectZodSchema = makeSchema();
