import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestWhereInputObjectSchema as FriendshipRequestWhereInputObjectSchema } from './FriendshipRequestWhereInput.schema';
import { FriendshipRequestUpdateWithoutFriendshipInputObjectSchema as FriendshipRequestUpdateWithoutFriendshipInputObjectSchema } from './FriendshipRequestUpdateWithoutFriendshipInput.schema';
import { FriendshipRequestUncheckedUpdateWithoutFriendshipInputObjectSchema as FriendshipRequestUncheckedUpdateWithoutFriendshipInputObjectSchema } from './FriendshipRequestUncheckedUpdateWithoutFriendshipInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipRequestWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => FriendshipRequestUpdateWithoutFriendshipInputObjectSchema), z.lazy(() => FriendshipRequestUncheckedUpdateWithoutFriendshipInputObjectSchema)])
}).strict();
export const FriendshipRequestUpdateToOneWithWhereWithoutFriendshipInputObjectSchema: z.ZodType<Prisma.FriendshipRequestUpdateToOneWithWhereWithoutFriendshipInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestUpdateToOneWithWhereWithoutFriendshipInput>;
export const FriendshipRequestUpdateToOneWithWhereWithoutFriendshipInputObjectZodSchema = makeSchema();
