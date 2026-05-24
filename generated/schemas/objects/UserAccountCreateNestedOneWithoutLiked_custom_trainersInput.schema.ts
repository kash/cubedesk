import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutLiked_custom_trainersInputObjectSchema as UserAccountCreateWithoutLiked_custom_trainersInputObjectSchema } from './UserAccountCreateWithoutLiked_custom_trainersInput.schema';
import { UserAccountUncheckedCreateWithoutLiked_custom_trainersInputObjectSchema as UserAccountUncheckedCreateWithoutLiked_custom_trainersInputObjectSchema } from './UserAccountUncheckedCreateWithoutLiked_custom_trainersInput.schema';
import { UserAccountCreateOrConnectWithoutLiked_custom_trainersInputObjectSchema as UserAccountCreateOrConnectWithoutLiked_custom_trainersInputObjectSchema } from './UserAccountCreateOrConnectWithoutLiked_custom_trainersInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutLiked_custom_trainersInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutLiked_custom_trainersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutLiked_custom_trainersInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutLiked_custom_trainersInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutLiked_custom_trainersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutLiked_custom_trainersInput>;
export const UserAccountCreateNestedOneWithoutLiked_custom_trainersInputObjectZodSchema = makeSchema();
