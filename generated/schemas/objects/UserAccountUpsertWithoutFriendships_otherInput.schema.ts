import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutFriendships_otherInputObjectSchema as UserAccountUpdateWithoutFriendships_otherInputObjectSchema } from './UserAccountUpdateWithoutFriendships_otherInput.schema';
import { UserAccountUncheckedUpdateWithoutFriendships_otherInputObjectSchema as UserAccountUncheckedUpdateWithoutFriendships_otherInputObjectSchema } from './UserAccountUncheckedUpdateWithoutFriendships_otherInput.schema';
import { UserAccountCreateWithoutFriendships_otherInputObjectSchema as UserAccountCreateWithoutFriendships_otherInputObjectSchema } from './UserAccountCreateWithoutFriendships_otherInput.schema';
import { UserAccountUncheckedCreateWithoutFriendships_otherInputObjectSchema as UserAccountUncheckedCreateWithoutFriendships_otherInputObjectSchema } from './UserAccountUncheckedCreateWithoutFriendships_otherInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutFriendships_otherInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutFriendships_otherInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutFriendships_otherInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutFriendships_otherInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutFriendships_otherInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutFriendships_otherInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutFriendships_otherInput>;
export const UserAccountUpsertWithoutFriendships_otherInputObjectZodSchema = makeSchema();
