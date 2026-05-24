import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutFriendship_requests_sentInputObjectSchema as UserAccountCreateNestedOneWithoutFriendship_requests_sentInputObjectSchema } from './UserAccountCreateNestedOneWithoutFriendship_requests_sentInput.schema';
import { UserAccountCreateNestedOneWithoutFriendships_requests_receivedInputObjectSchema as UserAccountCreateNestedOneWithoutFriendships_requests_receivedInputObjectSchema } from './UserAccountCreateNestedOneWithoutFriendships_requests_receivedInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  accepted_at: z.coerce.date().optional().nullable(),
  from_user: z.lazy(() => UserAccountCreateNestedOneWithoutFriendship_requests_sentInputObjectSchema),
  to_user: z.lazy(() => UserAccountCreateNestedOneWithoutFriendships_requests_receivedInputObjectSchema)
}).strict();
export const FriendshipRequestCreateWithoutFriendshipInputObjectSchema: z.ZodType<Prisma.FriendshipRequestCreateWithoutFriendshipInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestCreateWithoutFriendshipInput>;
export const FriendshipRequestCreateWithoutFriendshipInputObjectZodSchema = makeSchema();
