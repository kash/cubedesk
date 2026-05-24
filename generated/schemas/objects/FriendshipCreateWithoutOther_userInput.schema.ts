import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestCreateNestedOneWithoutFriendshipInputObjectSchema as FriendshipRequestCreateNestedOneWithoutFriendshipInputObjectSchema } from './FriendshipRequestCreateNestedOneWithoutFriendshipInput.schema';
import { UserAccountCreateNestedOneWithoutFriendshipsInputObjectSchema as UserAccountCreateNestedOneWithoutFriendshipsInputObjectSchema } from './UserAccountCreateNestedOneWithoutFriendshipsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  friendship_request: z.lazy(() => FriendshipRequestCreateNestedOneWithoutFriendshipInputObjectSchema),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutFriendshipsInputObjectSchema)
}).strict();
export const FriendshipCreateWithoutOther_userInputObjectSchema: z.ZodType<Prisma.FriendshipCreateWithoutOther_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateWithoutOther_userInput>;
export const FriendshipCreateWithoutOther_userInputObjectZodSchema = makeSchema();
