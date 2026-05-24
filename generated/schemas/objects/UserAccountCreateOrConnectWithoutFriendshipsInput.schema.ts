import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutFriendshipsInputObjectSchema as UserAccountCreateWithoutFriendshipsInputObjectSchema } from './UserAccountCreateWithoutFriendshipsInput.schema';
import { UserAccountUncheckedCreateWithoutFriendshipsInputObjectSchema as UserAccountUncheckedCreateWithoutFriendshipsInputObjectSchema } from './UserAccountUncheckedCreateWithoutFriendshipsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutFriendshipsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutFriendshipsInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutFriendshipsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutFriendshipsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutFriendshipsInput>;
export const UserAccountCreateOrConnectWithoutFriendshipsInputObjectZodSchema = makeSchema();
