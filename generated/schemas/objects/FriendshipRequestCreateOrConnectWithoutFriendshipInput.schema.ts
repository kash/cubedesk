import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestWhereUniqueInputObjectSchema as FriendshipRequestWhereUniqueInputObjectSchema } from './FriendshipRequestWhereUniqueInput.schema';
import { FriendshipRequestCreateWithoutFriendshipInputObjectSchema as FriendshipRequestCreateWithoutFriendshipInputObjectSchema } from './FriendshipRequestCreateWithoutFriendshipInput.schema';
import { FriendshipRequestUncheckedCreateWithoutFriendshipInputObjectSchema as FriendshipRequestUncheckedCreateWithoutFriendshipInputObjectSchema } from './FriendshipRequestUncheckedCreateWithoutFriendshipInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FriendshipRequestCreateWithoutFriendshipInputObjectSchema), z.lazy(() => FriendshipRequestUncheckedCreateWithoutFriendshipInputObjectSchema)])
}).strict();
export const FriendshipRequestCreateOrConnectWithoutFriendshipInputObjectSchema: z.ZodType<Prisma.FriendshipRequestCreateOrConnectWithoutFriendshipInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestCreateOrConnectWithoutFriendshipInput>;
export const FriendshipRequestCreateOrConnectWithoutFriendshipInputObjectZodSchema = makeSchema();
