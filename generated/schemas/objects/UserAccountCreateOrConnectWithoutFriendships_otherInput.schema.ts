import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutFriendships_otherInputObjectSchema as UserAccountCreateWithoutFriendships_otherInputObjectSchema } from './UserAccountCreateWithoutFriendships_otherInput.schema';
import { UserAccountUncheckedCreateWithoutFriendships_otherInputObjectSchema as UserAccountUncheckedCreateWithoutFriendships_otherInputObjectSchema } from './UserAccountUncheckedCreateWithoutFriendships_otherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutFriendships_otherInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutFriendships_otherInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutFriendships_otherInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutFriendships_otherInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutFriendships_otherInput>;
export const UserAccountCreateOrConnectWithoutFriendships_otherInputObjectZodSchema = makeSchema();
