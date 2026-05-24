import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipCreateNestedManyWithoutFriendship_requestInputObjectSchema as FriendshipCreateNestedManyWithoutFriendship_requestInputObjectSchema } from './FriendshipCreateNestedManyWithoutFriendship_requestInput.schema';
import { UserAccountCreateNestedOneWithoutFriendships_requests_receivedInputObjectSchema as UserAccountCreateNestedOneWithoutFriendships_requests_receivedInputObjectSchema } from './UserAccountCreateNestedOneWithoutFriendships_requests_receivedInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  accepted_at: z.coerce.date().optional().nullable(),
  friendship: z.lazy(() => FriendshipCreateNestedManyWithoutFriendship_requestInputObjectSchema).optional(),
  to_user: z.lazy(() => UserAccountCreateNestedOneWithoutFriendships_requests_receivedInputObjectSchema)
}).strict();
export const FriendshipRequestCreateWithoutFrom_userInputObjectSchema: z.ZodType<Prisma.FriendshipRequestCreateWithoutFrom_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestCreateWithoutFrom_userInput>;
export const FriendshipRequestCreateWithoutFrom_userInputObjectZodSchema = makeSchema();
