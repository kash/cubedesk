import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutFriendshipsInputObjectSchema as UserAccountCreateWithoutFriendshipsInputObjectSchema } from './UserAccountCreateWithoutFriendshipsInput.schema';
import { UserAccountUncheckedCreateWithoutFriendshipsInputObjectSchema as UserAccountUncheckedCreateWithoutFriendshipsInputObjectSchema } from './UserAccountUncheckedCreateWithoutFriendshipsInput.schema';
import { UserAccountCreateOrConnectWithoutFriendshipsInputObjectSchema as UserAccountCreateOrConnectWithoutFriendshipsInputObjectSchema } from './UserAccountCreateOrConnectWithoutFriendshipsInput.schema';
import { UserAccountUpsertWithoutFriendshipsInputObjectSchema as UserAccountUpsertWithoutFriendshipsInputObjectSchema } from './UserAccountUpsertWithoutFriendshipsInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutFriendshipsInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutFriendshipsInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutFriendshipsInput.schema';
import { UserAccountUpdateWithoutFriendshipsInputObjectSchema as UserAccountUpdateWithoutFriendshipsInputObjectSchema } from './UserAccountUpdateWithoutFriendshipsInput.schema';
import { UserAccountUncheckedUpdateWithoutFriendshipsInputObjectSchema as UserAccountUncheckedUpdateWithoutFriendshipsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutFriendshipsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutFriendshipsInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutFriendshipsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutFriendshipsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutFriendshipsInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutFriendshipsInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutFriendshipsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutFriendshipsInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutFriendshipsNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutFriendshipsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutFriendshipsNestedInput>;
export const UserAccountUpdateOneRequiredWithoutFriendshipsNestedInputObjectZodSchema = makeSchema();
