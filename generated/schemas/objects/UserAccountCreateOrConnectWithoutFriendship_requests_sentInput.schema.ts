import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountCreateWithoutFriendship_requests_sentInputObjectSchema as UserAccountCreateWithoutFriendship_requests_sentInputObjectSchema } from './UserAccountCreateWithoutFriendship_requests_sentInput.schema';
import { UserAccountUncheckedCreateWithoutFriendship_requests_sentInputObjectSchema as UserAccountUncheckedCreateWithoutFriendship_requests_sentInputObjectSchema } from './UserAccountUncheckedCreateWithoutFriendship_requests_sentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserAccountCreateWithoutFriendship_requests_sentInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutFriendship_requests_sentInputObjectSchema)])
}).strict();
export const UserAccountCreateOrConnectWithoutFriendship_requests_sentInputObjectSchema: z.ZodType<Prisma.UserAccountCreateOrConnectWithoutFriendship_requests_sentInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateOrConnectWithoutFriendship_requests_sentInput>;
export const UserAccountCreateOrConnectWithoutFriendship_requests_sentInputObjectZodSchema = makeSchema();
