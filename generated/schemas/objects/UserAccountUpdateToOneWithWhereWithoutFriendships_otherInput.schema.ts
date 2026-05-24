import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutFriendships_otherInputObjectSchema as UserAccountUpdateWithoutFriendships_otherInputObjectSchema } from './UserAccountUpdateWithoutFriendships_otherInput.schema';
import { UserAccountUncheckedUpdateWithoutFriendships_otherInputObjectSchema as UserAccountUncheckedUpdateWithoutFriendships_otherInputObjectSchema } from './UserAccountUncheckedUpdateWithoutFriendships_otherInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutFriendships_otherInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutFriendships_otherInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutFriendships_otherInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutFriendships_otherInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutFriendships_otherInput>;
export const UserAccountUpdateToOneWithWhereWithoutFriendships_otherInputObjectZodSchema = makeSchema();
