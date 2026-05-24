import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipScalarWhereInputObjectSchema as FriendshipScalarWhereInputObjectSchema } from './FriendshipScalarWhereInput.schema';
import { FriendshipUpdateManyMutationInputObjectSchema as FriendshipUpdateManyMutationInputObjectSchema } from './FriendshipUpdateManyMutationInput.schema';
import { FriendshipUncheckedUpdateManyWithoutUserInputObjectSchema as FriendshipUncheckedUpdateManyWithoutUserInputObjectSchema } from './FriendshipUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FriendshipUpdateManyMutationInputObjectSchema), z.lazy(() => FriendshipUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const FriendshipUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.FriendshipUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpdateManyWithWhereWithoutUserInput>;
export const FriendshipUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
