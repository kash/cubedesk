import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutLiked_custom_trainersInputObjectSchema as UserAccountCreateWithoutLiked_custom_trainersInputObjectSchema } from './UserAccountCreateWithoutLiked_custom_trainersInput.schema';
import { UserAccountUncheckedCreateWithoutLiked_custom_trainersInputObjectSchema as UserAccountUncheckedCreateWithoutLiked_custom_trainersInputObjectSchema } from './UserAccountUncheckedCreateWithoutLiked_custom_trainersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutLiked_custom_trainersInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutLiked_custom_trainersInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutLiked_custom_trainersInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutLiked_custom_trainersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutLiked_custom_trainersInput>;
export const UserAccountCreateOrConnectWithoutLiked_custom_trainersInputObjectZodSchema = makeSchema();
