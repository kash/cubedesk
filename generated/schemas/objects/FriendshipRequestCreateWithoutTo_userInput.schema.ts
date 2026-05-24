import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipCreateNestedManyWithoutFriendship_requestInputObjectSchema as FriendshipCreateNestedManyWithoutFriendship_requestInputObjectSchema } from './FriendshipCreateNestedManyWithoutFriendship_requestInput.schema';
import { UserAccountCreateNestedOneWithoutFriendship_requests_sentInputObjectSchema as UserAccountCreateNestedOneWithoutFriendship_requests_sentInputObjectSchema } from './UserAccountCreateNestedOneWithoutFriendship_requests_sentInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  accepted_at: z.coerce.date().optional().nullable(),
  friendship: z.lazy(() => FriendshipCreateNestedManyWithoutFriendship_requestInputObjectSchema).optional(),
  from_user: z.lazy(() => UserAccountCreateNestedOneWithoutFriendship_requests_sentInputObjectSchema)
}).strict();
export const FriendshipRequestCreateWithoutTo_userInputObjectSchema: z.ZodType<Prisma.FriendshipRequestCreateWithoutTo_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestCreateWithoutTo_userInput>;
export const FriendshipRequestCreateWithoutTo_userInputObjectZodSchema = makeSchema();
