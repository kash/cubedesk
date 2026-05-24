import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipScalarWhereInputObjectSchema as FriendshipScalarWhereInputObjectSchema } from './FriendshipScalarWhereInput.schema';
import { FriendshipUpdateManyMutationInputObjectSchema as FriendshipUpdateManyMutationInputObjectSchema } from './FriendshipUpdateManyMutationInput.schema';
import { FriendshipUncheckedUpdateManyWithoutOther_userInputObjectSchema as FriendshipUncheckedUpdateManyWithoutOther_userInputObjectSchema } from './FriendshipUncheckedUpdateManyWithoutOther_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FriendshipUpdateManyMutationInputObjectSchema), z.lazy(() => FriendshipUncheckedUpdateManyWithoutOther_userInputObjectSchema)])
}).strict();
export const FriendshipUpdateManyWithWhereWithoutOther_userInputObjectSchema: z.ZodType<Prisma.FriendshipUpdateManyWithWhereWithoutOther_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpdateManyWithWhereWithoutOther_userInput>;
export const FriendshipUpdateManyWithWhereWithoutOther_userInputObjectZodSchema = makeSchema();
