import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutFriendships_otherInputObjectSchema as UserAccountCreateWithoutFriendships_otherInputObjectSchema } from './UserAccountCreateWithoutFriendships_otherInput.schema';
import { UserAccountUncheckedCreateWithoutFriendships_otherInputObjectSchema as UserAccountUncheckedCreateWithoutFriendships_otherInputObjectSchema } from './UserAccountUncheckedCreateWithoutFriendships_otherInput.schema';
import { UserAccountCreateOrConnectWithoutFriendships_otherInputObjectSchema as UserAccountCreateOrConnectWithoutFriendships_otherInputObjectSchema } from './UserAccountCreateOrConnectWithoutFriendships_otherInput.schema';
import { UserAccountUpsertWithoutFriendships_otherInputObjectSchema as UserAccountUpsertWithoutFriendships_otherInputObjectSchema } from './UserAccountUpsertWithoutFriendships_otherInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutFriendships_otherInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutFriendships_otherInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutFriendships_otherInput.schema';
import { UserAccountUpdateWithoutFriendships_otherInputObjectSchema as UserAccountUpdateWithoutFriendships_otherInputObjectSchema } from './UserAccountUpdateWithoutFriendships_otherInput.schema';
import { UserAccountUncheckedUpdateWithoutFriendships_otherInputObjectSchema as UserAccountUncheckedUpdateWithoutFriendships_otherInputObjectSchema } from './UserAccountUncheckedUpdateWithoutFriendships_otherInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutFriendships_otherInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutFriendships_otherInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutFriendships_otherInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutFriendships_otherInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutFriendships_otherInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutFriendships_otherInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutFriendships_otherInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutFriendships_otherNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutFriendships_otherNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutFriendships_otherNestedInput>;
export const UserAccountUpdateOneRequiredWithoutFriendships_otherNestedInputObjectZodSchema = makeSchema();
