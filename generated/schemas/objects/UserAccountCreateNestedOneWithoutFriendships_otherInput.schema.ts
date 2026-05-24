import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutFriendships_otherInputObjectSchema as UserAccountCreateWithoutFriendships_otherInputObjectSchema } from './UserAccountCreateWithoutFriendships_otherInput.schema';
import { UserAccountUncheckedCreateWithoutFriendships_otherInputObjectSchema as UserAccountUncheckedCreateWithoutFriendships_otherInputObjectSchema } from './UserAccountUncheckedCreateWithoutFriendships_otherInput.schema';
import { UserAccountCreateOrConnectWithoutFriendships_otherInputObjectSchema as UserAccountCreateOrConnectWithoutFriendships_otherInputObjectSchema } from './UserAccountCreateOrConnectWithoutFriendships_otherInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutFriendships_otherInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutFriendships_otherInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutFriendships_otherInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutFriendships_otherInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutFriendships_otherInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutFriendships_otherInput>;
export const UserAccountCreateNestedOneWithoutFriendships_otherInputObjectZodSchema = makeSchema();
