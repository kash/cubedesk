import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutLiked_custom_trainersInputObjectSchema as UserAccountCreateWithoutLiked_custom_trainersInputObjectSchema } from './UserAccountCreateWithoutLiked_custom_trainersInput.schema';
import { UserAccountUncheckedCreateWithoutLiked_custom_trainersInputObjectSchema as UserAccountUncheckedCreateWithoutLiked_custom_trainersInputObjectSchema } from './UserAccountUncheckedCreateWithoutLiked_custom_trainersInput.schema';
import { UserAccountCreateOrConnectWithoutLiked_custom_trainersInputObjectSchema as UserAccountCreateOrConnectWithoutLiked_custom_trainersInputObjectSchema } from './UserAccountCreateOrConnectWithoutLiked_custom_trainersInput.schema';
import { UserAccountUpsertWithoutLiked_custom_trainersInputObjectSchema as UserAccountUpsertWithoutLiked_custom_trainersInputObjectSchema } from './UserAccountUpsertWithoutLiked_custom_trainersInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutLiked_custom_trainersInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutLiked_custom_trainersInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutLiked_custom_trainersInput.schema';
import { UserAccountUpdateWithoutLiked_custom_trainersInputObjectSchema as UserAccountUpdateWithoutLiked_custom_trainersInputObjectSchema } from './UserAccountUpdateWithoutLiked_custom_trainersInput.schema';
import { UserAccountUncheckedUpdateWithoutLiked_custom_trainersInputObjectSchema as UserAccountUncheckedUpdateWithoutLiked_custom_trainersInputObjectSchema } from './UserAccountUncheckedUpdateWithoutLiked_custom_trainersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutLiked_custom_trainersInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutLiked_custom_trainersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutLiked_custom_trainersInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutLiked_custom_trainersInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutLiked_custom_trainersInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutLiked_custom_trainersInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutLiked_custom_trainersInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutLiked_custom_trainersNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutLiked_custom_trainersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutLiked_custom_trainersNestedInput>;
export const UserAccountUpdateOneRequiredWithoutLiked_custom_trainersNestedInputObjectZodSchema = makeSchema();
