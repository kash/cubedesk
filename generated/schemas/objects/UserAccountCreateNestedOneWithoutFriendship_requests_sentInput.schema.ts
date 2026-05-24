import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutFriendship_requests_sentInputObjectSchema as UserAccountCreateWithoutFriendship_requests_sentInputObjectSchema } from './UserAccountCreateWithoutFriendship_requests_sentInput.schema';
import { UserAccountUncheckedCreateWithoutFriendship_requests_sentInputObjectSchema as UserAccountUncheckedCreateWithoutFriendship_requests_sentInputObjectSchema } from './UserAccountUncheckedCreateWithoutFriendship_requests_sentInput.schema';
import { UserAccountCreateOrConnectWithoutFriendship_requests_sentInputObjectSchema as UserAccountCreateOrConnectWithoutFriendship_requests_sentInputObjectSchema } from './UserAccountCreateOrConnectWithoutFriendship_requests_sentInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutFriendship_requests_sentInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutFriendship_requests_sentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutFriendship_requests_sentInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserAccountCreateNestedOneWithoutFriendship_requests_sentInputObjectSchema: z.ZodType<Prisma.UserAccountCreateNestedOneWithoutFriendship_requests_sentInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountCreateNestedOneWithoutFriendship_requests_sentInput>;
export const UserAccountCreateNestedOneWithoutFriendship_requests_sentInputObjectZodSchema = makeSchema();
