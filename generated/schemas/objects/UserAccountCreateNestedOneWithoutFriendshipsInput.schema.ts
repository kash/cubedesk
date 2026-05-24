import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutFriendshipsInputObjectSchema as UserAccountCreateWithoutFriendshipsInputObjectSchema } from './UserAccountCreateWithoutFriendshipsInput.schema';
import { UserAccountUncheckedCreateWithoutFriendshipsInputObjectSchema as UserAccountUncheckedCreateWithoutFriendshipsInputObjectSchema } from './UserAccountUncheckedCreateWithoutFriendshipsInput.schema';
import { UserAccountCreateOrConnectWithoutFriendshipsInputObjectSchema as UserAccountCreateOrConnectWithoutFriendshipsInputObjectSchema } from './UserAccountCreateOrConnectWithoutFriendshipsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutFriendshipsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutFriendshipsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutFriendshipsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutFriendshipsInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutFriendshipsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutFriendshipsInput>;
export const UserAccountCreateNestedOneWithoutFriendshipsInputObjectZodSchema = makeSchema();
