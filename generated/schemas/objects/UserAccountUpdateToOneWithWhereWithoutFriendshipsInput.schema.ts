import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutFriendshipsInputObjectSchema as UserAccountUpdateWithoutFriendshipsInputObjectSchema } from './UserAccountUpdateWithoutFriendshipsInput.schema';
import { UserAccountUncheckedUpdateWithoutFriendshipsInputObjectSchema as UserAccountUncheckedUpdateWithoutFriendshipsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutFriendshipsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutFriendshipsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutFriendshipsInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutFriendshipsInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutFriendshipsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutFriendshipsInput>;
export const UserAccountUpdateToOneWithWhereWithoutFriendshipsInputObjectZodSchema = makeSchema();
