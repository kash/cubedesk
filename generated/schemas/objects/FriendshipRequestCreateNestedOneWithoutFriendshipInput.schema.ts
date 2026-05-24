import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestCreateWithoutFriendshipInputObjectSchema as FriendshipRequestCreateWithoutFriendshipInputObjectSchema } from './FriendshipRequestCreateWithoutFriendshipInput.schema';
import { FriendshipRequestUncheckedCreateWithoutFriendshipInputObjectSchema as FriendshipRequestUncheckedCreateWithoutFriendshipInputObjectSchema } from './FriendshipRequestUncheckedCreateWithoutFriendshipInput.schema';
import { FriendshipRequestCreateOrConnectWithoutFriendshipInputObjectSchema as FriendshipRequestCreateOrConnectWithoutFriendshipInputObjectSchema } from './FriendshipRequestCreateOrConnectWithoutFriendshipInput.schema';
import { FriendshipRequestWhereUniqueInputObjectSchema as FriendshipRequestWhereUniqueInputObjectSchema } from './FriendshipRequestWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FriendshipRequestCreateWithoutFriendshipInputObjectSchema), z.lazy(() => FriendshipRequestUncheckedCreateWithoutFriendshipInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => FriendshipRequestCreateOrConnectWithoutFriendshipInputObjectSchema).optional(),
  connect: z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema).optional()
}).strict();
export const FriendshipRequestCreateNestedOneWithoutFriendshipInputObjectSchema: z.ZodType<Prisma.FriendshipRequestCreateNestedOneWithoutFriendshipInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestCreateNestedOneWithoutFriendshipInput>;
export const FriendshipRequestCreateNestedOneWithoutFriendshipInputObjectZodSchema = makeSchema();
