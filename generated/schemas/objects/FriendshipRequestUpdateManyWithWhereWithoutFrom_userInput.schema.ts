import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestScalarWhereInputObjectSchema as FriendshipRequestScalarWhereInputObjectSchema } from './FriendshipRequestScalarWhereInput.schema';
import { FriendshipRequestUpdateManyMutationInputObjectSchema as FriendshipRequestUpdateManyMutationInputObjectSchema } from './FriendshipRequestUpdateManyMutationInput.schema';
import { FriendshipRequestUncheckedUpdateManyWithoutFrom_userInputObjectSchema as FriendshipRequestUncheckedUpdateManyWithoutFrom_userInputObjectSchema } from './FriendshipRequestUncheckedUpdateManyWithoutFrom_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipRequestScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FriendshipRequestUpdateManyMutationInputObjectSchema), z.lazy(() => FriendshipRequestUncheckedUpdateManyWithoutFrom_userInputObjectSchema)])
}).strict();
export const FriendshipRequestUpdateManyWithWhereWithoutFrom_userInputObjectSchema: z.ZodType<Prisma.FriendshipRequestUpdateManyWithWhereWithoutFrom_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestUpdateManyWithWhereWithoutFrom_userInput>;
export const FriendshipRequestUpdateManyWithWhereWithoutFrom_userInputObjectZodSchema = makeSchema();
