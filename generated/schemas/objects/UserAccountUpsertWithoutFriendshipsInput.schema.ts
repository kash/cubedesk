import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutFriendshipsInputObjectSchema as UserAccountUpdateWithoutFriendshipsInputObjectSchema } from './UserAccountUpdateWithoutFriendshipsInput.schema';
import { UserAccountUncheckedUpdateWithoutFriendshipsInputObjectSchema as UserAccountUncheckedUpdateWithoutFriendshipsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutFriendshipsInput.schema';
import { UserAccountCreateWithoutFriendshipsInputObjectSchema as UserAccountCreateWithoutFriendshipsInputObjectSchema } from './UserAccountCreateWithoutFriendshipsInput.schema';
import { UserAccountUncheckedCreateWithoutFriendshipsInputObjectSchema as UserAccountUncheckedCreateWithoutFriendshipsInputObjectSchema } from './UserAccountUncheckedCreateWithoutFriendshipsInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutFriendshipsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutFriendshipsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutFriendshipsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutFriendshipsInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutFriendshipsInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutFriendshipsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutFriendshipsInput>;
export const UserAccountUpsertWithoutFriendshipsInputObjectZodSchema = makeSchema();
