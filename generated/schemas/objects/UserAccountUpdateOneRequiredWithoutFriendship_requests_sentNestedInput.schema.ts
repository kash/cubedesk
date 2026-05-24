import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateWithoutFriendship_requests_sentInputObjectSchema as UserAccountCreateWithoutFriendship_requests_sentInputObjectSchema } from './UserAccountCreateWithoutFriendship_requests_sentInput.schema';
import { UserAccountUncheckedCreateWithoutFriendship_requests_sentInputObjectSchema as UserAccountUncheckedCreateWithoutFriendship_requests_sentInputObjectSchema } from './UserAccountUncheckedCreateWithoutFriendship_requests_sentInput.schema';
import { UserAccountCreateOrConnectWithoutFriendship_requests_sentInputObjectSchema as UserAccountCreateOrConnectWithoutFriendship_requests_sentInputObjectSchema } from './UserAccountCreateOrConnectWithoutFriendship_requests_sentInput.schema';
import { UserAccountUpsertWithoutFriendship_requests_sentInputObjectSchema as UserAccountUpsertWithoutFriendship_requests_sentInputObjectSchema } from './UserAccountUpsertWithoutFriendship_requests_sentInput.schema';
import { UserAccountWhereUniqueInputObjectSchema as UserAccountWhereUniqueInputObjectSchema } from './UserAccountWhereUniqueInput.schema';
import { UserAccountUpdateToOneWithWhereWithoutFriendship_requests_sentInputObjectSchema as UserAccountUpdateToOneWithWhereWithoutFriendship_requests_sentInputObjectSchema } from './UserAccountUpdateToOneWithWhereWithoutFriendship_requests_sentInput.schema';
import { UserAccountUpdateWithoutFriendship_requests_sentInputObjectSchema as UserAccountUpdateWithoutFriendship_requests_sentInputObjectSchema } from './UserAccountUpdateWithoutFriendship_requests_sentInput.schema';
import { UserAccountUncheckedUpdateWithoutFriendship_requests_sentInputObjectSchema as UserAccountUncheckedUpdateWithoutFriendship_requests_sentInputObjectSchema } from './UserAccountUncheckedUpdateWithoutFriendship_requests_sentInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserAccountCreateWithoutFriendship_requests_sentInputObjectSchema), z.lazy(() => UserAccountUncheckedCreateWithoutFriendship_requests_sentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserAccountCreateOrConnectWithoutFriendship_requests_sentInputObjectSchema).optional(),
  upsert: z.lazy(() => UserAccountUpsertWithoutFriendship_requests_sentInputObjectSchema).optional(),
  connect: z.lazy(() => UserAccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserAccountUpdateToOneWithWhereWithoutFriendship_requests_sentInputObjectSchema), z.lazy(() => UserAccountUpdateWithoutFriendship_requests_sentInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutFriendship_requests_sentInputObjectSchema)]).optional()
}).strict();
export const UserAccountUpdateOneRequiredWithoutFriendship_requests_sentNestedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutFriendship_requests_sentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateOneRequiredWithoutFriendship_requests_sentNestedInput>;
export const UserAccountUpdateOneRequiredWithoutFriendship_requests_sentNestedInputObjectZodSchema = makeSchema();
