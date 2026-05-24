import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutFriendships_requests_receivedInputObjectSchema as UserAccountUpdateWithoutFriendships_requests_receivedInputObjectSchema } from './UserAccountUpdateWithoutFriendships_requests_receivedInput.schema';
import { UserAccountUncheckedUpdateWithoutFriendships_requests_receivedInputObjectSchema as UserAccountUncheckedUpdateWithoutFriendships_requests_receivedInputObjectSchema } from './UserAccountUncheckedUpdateWithoutFriendships_requests_receivedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutFriendships_requests_receivedInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutFriendships_requests_receivedInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutFriendships_requests_receivedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutFriendships_requests_receivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutFriendships_requests_receivedInput>;
export const UserAccountUpdateToOneWithWhereWithoutFriendships_requests_receivedInputObjectZodSchema = makeSchema();
