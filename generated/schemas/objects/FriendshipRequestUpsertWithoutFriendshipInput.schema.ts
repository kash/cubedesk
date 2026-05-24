import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestUpdateWithoutFriendshipInputObjectSchema as FriendshipRequestUpdateWithoutFriendshipInputObjectSchema } from './FriendshipRequestUpdateWithoutFriendshipInput.schema';
import { FriendshipRequestUncheckedUpdateWithoutFriendshipInputObjectSchema as FriendshipRequestUncheckedUpdateWithoutFriendshipInputObjectSchema } from './FriendshipRequestUncheckedUpdateWithoutFriendshipInput.schema';
import { FriendshipRequestCreateWithoutFriendshipInputObjectSchema as FriendshipRequestCreateWithoutFriendshipInputObjectSchema } from './FriendshipRequestCreateWithoutFriendshipInput.schema';
import { FriendshipRequestUncheckedCreateWithoutFriendshipInputObjectSchema as FriendshipRequestUncheckedCreateWithoutFriendshipInputObjectSchema } from './FriendshipRequestUncheckedCreateWithoutFriendshipInput.schema';
import { FriendshipRequestWhereInputObjectSchema as FriendshipRequestWhereInputObjectSchema } from './FriendshipRequestWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => FriendshipRequestUpdateWithoutFriendshipInputObjectSchema), z.lazy(() => FriendshipRequestUncheckedUpdateWithoutFriendshipInputObjectSchema)]),
  create: z.union([z.lazy(() => FriendshipRequestCreateWithoutFriendshipInputObjectSchema), z.lazy(() => FriendshipRequestUncheckedCreateWithoutFriendshipInputObjectSchema)]),
  where: z.lazy(() => FriendshipRequestWhereInputObjectSchema).optional()
}).strict();
export const FriendshipRequestUpsertWithoutFriendshipInputObjectSchema: z.ZodType<Prisma.FriendshipRequestUpsertWithoutFriendshipInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestUpsertWithoutFriendshipInput>;
export const FriendshipRequestUpsertWithoutFriendshipInputObjectZodSchema = makeSchema();
