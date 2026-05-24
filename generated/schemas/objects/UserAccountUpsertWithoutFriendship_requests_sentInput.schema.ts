import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountUpdateWithoutFriendship_requests_sentInputObjectSchema as UserAccountUpdateWithoutFriendship_requests_sentInputObjectSchema } from './UserAccountUpdateWithoutFriendship_requests_sentInput.schema';
import { UserAccountUncheckedUpdateWithoutFriendship_requests_sentInputObjectSchema as UserAccountUncheckedUpdateWithoutFriendship_requests_sentInputObjectSchema } from './UserAccountUncheckedUpdateWithoutFriendship_requests_sentInput.schema';
import { UserAccountCreateWithoutFriendship_requests_sentInputObjectSchema as UserAccountCreateWithoutFriendship_requests_sentInputObjectSchema } from './UserAccountCreateWithoutFriendship_requests_sentInput.schema';
import { UserAccountUncheckedCreateWithoutFriendship_requests_sentInputObjectSchema as UserAccountUncheckedCreateWithoutFriendship_requests_sentInputObjectSchema } from './UserAccountUncheckedCreateWithoutFriendship_requests_sentInput.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserAccountUpdateWithoutFriendship_requests_sentInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutFriendship_requests_sentInputObjectSchema)]),
  create: z.union([z.lazy(() => UserAccountCreateWithoutFriendship_requests_sentInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutFriendship_requests_sentInputObjectSchema)]),
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional()
}).strict();
export const UserAccountUpsertWithoutFriendship_requests_sentInputObjectSchema: z.ZodType<Prisma.UserAccountUpsertWithoutFriendship_requests_sentInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpsertWithoutFriendship_requests_sentInput>;
export const UserAccountUpsertWithoutFriendship_requests_sentInputObjectZodSchema = makeSchema();
