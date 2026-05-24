import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutFriendships_requests_receivedInputObjectSchema as UserAccountCreateWithoutFriendships_requests_receivedInputObjectSchema } from './UserAccountCreateWithoutFriendships_requests_receivedInput.schema';
import { UserAccountUncheckedCreateWithoutFriendships_requests_receivedInputObjectSchema as UserAccountUncheckedCreateWithoutFriendships_requests_receivedInputObjectSchema } from './UserAccountUncheckedCreateWithoutFriendships_requests_receivedInput.schema';
import { UserAccountCreateOrConnectWithoutFriendships_requests_receivedInputObjectSchema as UserAccountCreateOrConnectWithoutFriendships_requests_receivedInputObjectSchema } from './UserAccountCreateOrConnectWithoutFriendships_requests_receivedInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutFriendships_requests_receivedInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutFriendships_requests_receivedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutFriendships_requests_receivedInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutFriendships_requests_receivedInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutFriendships_requests_receivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutFriendships_requests_receivedInput>;
export const UserAccountCreateNestedOneWithoutFriendships_requests_receivedInputObjectZodSchema = makeSchema();
