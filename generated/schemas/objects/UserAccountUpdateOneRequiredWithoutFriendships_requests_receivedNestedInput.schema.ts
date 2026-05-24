import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutFriendships_requests_receivedInputObjectSchema as UserAccountCreateWithoutFriendships_requests_receivedInputObjectSchema } from './UserAccountCreateWithoutFriendships_requests_receivedInput.schema';
import { UserAccountUncheckedCreateWithoutFriendships_requests_receivedInputObjectSchema as UserAccountUncheckedCreateWithoutFriendships_requests_receivedInputObjectSchema } from './UserAccountUncheckedCreateWithoutFriendships_requests_receivedInput.schema';
import { UserAccountCreateOrConnectWithoutFriendships_requests_receivedInputObjectSchema as UserAccountCreateOrConnectWithoutFriendships_requests_receivedInputObjectSchema } from './UserAccountCreateOrConnectWithoutFriendships_requests_receivedInput.schema';
import { UserAccountUpsertWithoutFriendships_requests_receivedInputObjectSchema as UserAccountUpsertWithoutFriendships_requests_receivedInputObjectSchema } from './UserAccountUpsertWithoutFriendships_requests_receivedInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutFriendships_requests_receivedInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutFriendships_requests_receivedInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutFriendships_requests_receivedInput.schema';
import { UserAccountUpdateWithoutFriendships_requests_receivedInputObjectSchema as UserAccountUpdateWithoutFriendships_requests_receivedInputObjectSchema } from './UserAccountUpdateWithoutFriendships_requests_receivedInput.schema';
import { UserAccountUncheckedUpdateWithoutFriendships_requests_receivedInputObjectSchema as UserAccountUncheckedUpdateWithoutFriendships_requests_receivedInputObjectSchema } from './UserAccountUncheckedUpdateWithoutFriendships_requests_receivedInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutFriendships_requests_receivedInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutFriendships_requests_receivedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutFriendships_requests_receivedInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutFriendships_requests_receivedInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutFriendships_requests_receivedInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutFriendships_requests_receivedInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutFriendships_requests_receivedInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutFriendships_requests_receivedNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutFriendships_requests_receivedNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutFriendships_requests_receivedNestedInput>;
export const UserAccountUpdateOneRequiredWithoutFriendships_requests_receivedNestedInputObjectZodSchema = makeSchema();
