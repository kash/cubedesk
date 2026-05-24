import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutFriendships_requests_receivedInputObjectSchema as UserAccountUpdateWithoutFriendships_requests_receivedInputObjectSchema } from './UserAccountUpdateWithoutFriendships_requests_receivedInput.schema';
import { UserAccountUncheckedUpdateWithoutFriendships_requests_receivedInputObjectSchema as UserAccountUncheckedUpdateWithoutFriendships_requests_receivedInputObjectSchema } from './UserAccountUncheckedUpdateWithoutFriendships_requests_receivedInput.schema';
import { UserAccountCreateWithoutFriendships_requests_receivedInputObjectSchema as UserAccountCreateWithoutFriendships_requests_receivedInputObjectSchema } from './UserAccountCreateWithoutFriendships_requests_receivedInput.schema';
import { UserAccountUncheckedCreateWithoutFriendships_requests_receivedInputObjectSchema as UserAccountUncheckedCreateWithoutFriendships_requests_receivedInputObjectSchema } from './UserAccountUncheckedCreateWithoutFriendships_requests_receivedInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutFriendships_requests_receivedInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutFriendships_requests_receivedInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutFriendships_requests_receivedInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutFriendships_requests_receivedInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutFriendships_requests_receivedInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutFriendships_requests_receivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutFriendships_requests_receivedInput>;
export const UserAccountUpsertWithoutFriendships_requests_receivedInputObjectZodSchema = makeSchema();
