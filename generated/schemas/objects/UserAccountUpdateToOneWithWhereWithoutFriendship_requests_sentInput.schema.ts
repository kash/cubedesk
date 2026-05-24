import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutFriendship_requests_sentInputObjectSchema as UserAccountUpdateWithoutFriendship_requests_sentInputObjectSchema } from './UserAccountUpdateWithoutFriendship_requests_sentInput.schema';
import { UserAccountUncheckedUpdateWithoutFriendship_requests_sentInputObjectSchema as UserAccountUncheckedUpdateWithoutFriendship_requests_sentInputObjectSchema } from './UserAccountUncheckedUpdateWithoutFriendship_requests_sentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutFriendship_requests_sentInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutFriendship_requests_sentInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutFriendship_requests_sentInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutFriendship_requests_sentInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutFriendship_requests_sentInput>;
export const UserAccountUpdateToOneWithWhereWithoutFriendship_requests_sentInputObjectZodSchema = makeSchema();
