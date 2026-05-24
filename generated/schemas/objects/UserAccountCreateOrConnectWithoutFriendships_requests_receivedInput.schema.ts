import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutFriendships_requests_receivedInputObjectSchema as UserAccountCreateWithoutFriendships_requests_receivedInputObjectSchema } from './UserAccountCreateWithoutFriendships_requests_receivedInput.schema';
import { UserAccountUncheckedCreateWithoutFriendships_requests_receivedInputObjectSchema as UserAccountUncheckedCreateWithoutFriendships_requests_receivedInputObjectSchema } from './UserAccountUncheckedCreateWithoutFriendships_requests_receivedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutFriendships_requests_receivedInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutFriendships_requests_receivedInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutFriendships_requests_receivedInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutFriendships_requests_receivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutFriendships_requests_receivedInput>;
export const UserAccountCreateOrConnectWithoutFriendships_requests_receivedInputObjectZodSchema = makeSchema();
