import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestCreateNestedOneWithoutFriendshipInputObjectSchema as FriendshipRequestCreateNestedOneWithoutFriendshipInputObjectSchema } from './FriendshipRequestCreateNestedOneWithoutFriendshipInput.schema';
import { UserAccountCreateNestedOneWithoutFriendships_otherInputObjectSchema as UserAccountCreateNestedOneWithoutFriendships_otherInputObjectSchema } from './UserAccountCreateNestedOneWithoutFriendships_otherInput.schema';
import { UserAccountCreateNestedOneWithoutFriendshipsInputObjectSchema as UserAccountCreateNestedOneWithoutFriendshipsInputObjectSchema } from './UserAccountCreateNestedOneWithoutFriendshipsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  friendship_request: z.lazy(() => FriendshipRequestCreateNestedOneWithoutFriendshipInputObjectSchema),
  other_user: z.lazy(() => UserAccountCreateNestedOneWithoutFriendships_otherInputObjectSchema),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutFriendshipsInputObjectSchema)
}).strict();
export const FriendshipCreateInputObjectSchema: z.ZodType<Prisma.FriendshipCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateInput>;
export const FriendshipCreateInputObjectZodSchema = makeSchema();
