import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestScalarWhereInputObjectSchema as FriendshipRequestScalarWhereInputObjectSchema } from './FriendshipRequestScalarWhereInput.schema';
import { FriendshipRequestUpdateManyMutationInputObjectSchema as FriendshipRequestUpdateManyMutationInputObjectSchema } from './FriendshipRequestUpdateManyMutationInput.schema';
import { FriendshipRequestUncheckedUpdateManyWithoutTo_userInputObjectSchema as FriendshipRequestUncheckedUpdateManyWithoutTo_userInputObjectSchema } from './FriendshipRequestUncheckedUpdateManyWithoutTo_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipRequestScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FriendshipRequestUpdateManyMutationInputObjectSchema), z.lazy(() => FriendshipRequestUncheckedUpdateManyWithoutTo_userInputObjectSchema)])
}).strict();
export const FriendshipRequestUpdateManyWithWhereWithoutTo_userInputObjectSchema: z.ZodType<Prisma.FriendshipRequestUpdateManyWithWhereWithoutTo_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestUpdateManyWithWhereWithoutTo_userInput>;
export const FriendshipRequestUpdateManyWithWhereWithoutTo_userInputObjectZodSchema = makeSchema();
