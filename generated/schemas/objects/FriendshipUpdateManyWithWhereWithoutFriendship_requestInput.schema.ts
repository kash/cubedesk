import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipScalarWhereInputObjectSchema as FriendshipScalarWhereInputObjectSchema } from './FriendshipScalarWhereInput.schema';
import { FriendshipUpdateManyMutationInputObjectSchema as FriendshipUpdateManyMutationInputObjectSchema } from './FriendshipUpdateManyMutationInput.schema';
import { FriendshipUncheckedUpdateManyWithoutFriendship_requestInputObjectSchema as FriendshipUncheckedUpdateManyWithoutFriendship_requestInputObjectSchema } from './FriendshipUncheckedUpdateManyWithoutFriendship_requestInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FriendshipUpdateManyMutationInputObjectSchema), z.lazy(() => FriendshipUncheckedUpdateManyWithoutFriendship_requestInputObjectSchema)])
}).strict();
export const FriendshipUpdateManyWithWhereWithoutFriendship_requestInputObjectSchema: z.ZodType<Prisma.FriendshipUpdateManyWithWhereWithoutFriendship_requestInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpdateManyWithWhereWithoutFriendship_requestInput>;
export const FriendshipUpdateManyWithWhereWithoutFriendship_requestInputObjectZodSchema = makeSchema();
