import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipCreateNestedManyWithoutFriendship_requestInputObjectSchema as FriendshipCreateNestedManyWithoutFriendship_requestInputObjectSchema } from './FriendshipCreateNestedManyWithoutFriendship_requestInput.schema';
import { UserAccountCreateNestedOneWithoutFriendship_requests_sentInputObjectSchema as UserAccountCreateNestedOneWithoutFriendship_requests_sentInputObjectSchema } from './UserAccountCreateNestedOneWithoutFriendship_requests_sentInput.schema';
import { UserAccountCreateNestedOneWithoutFriendships_requests_receivedInputObjectSchema as UserAccountCreateNestedOneWithoutFriendships_requests_receivedInputObjectSchema } from './UserAccountCreateNestedOneWithoutFriendships_requests_receivedInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  accepted_at: z.coerce.date().optional().nullable(),
  friendship: z.lazy(() => FriendshipCreateNestedManyWithoutFriendship_requestInputObjectSchema).optional(),
  from_user: z.lazy(() => UserAccountCreateNestedOneWithoutFriendship_requests_sentInputObjectSchema),
  to_user: z.lazy(() => UserAccountCreateNestedOneWithoutFriendships_requests_receivedInputObjectSchema)
}).strict();
export const FriendshipRequestCreateInputObjectSchema: z.ZodType<Prisma.FriendshipRequestCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestCreateInput>;
export const FriendshipRequestCreateInputObjectZodSchema = makeSchema();
