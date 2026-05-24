import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipCreateWithoutFriendship_requestInputObjectSchema as FriendshipCreateWithoutFriendship_requestInputObjectSchema } from './FriendshipCreateWithoutFriendship_requestInput.schema';
import { FriendshipUncheckedCreateWithoutFriendship_requestInputObjectSchema as FriendshipUncheckedCreateWithoutFriendship_requestInputObjectSchema } from './FriendshipUncheckedCreateWithoutFriendship_requestInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FriendshipCreateWithoutFriendship_requestInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutFriendship_requestInputObjectSchema)])
}).strict();
export const FriendshipCreateOrConnectWithoutFriendship_requestInputObjectSchema: z.ZodType<Prisma.FriendshipCreateOrConnectWithoutFriendship_requestInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateOrConnectWithoutFriendship_requestInput>;
export const FriendshipCreateOrConnectWithoutFriendship_requestInputObjectZodSchema = makeSchema();
