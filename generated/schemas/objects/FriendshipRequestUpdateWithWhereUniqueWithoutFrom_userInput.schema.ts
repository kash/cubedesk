import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestWhereUniqueInputObjectSchema as FriendshipRequestWhereUniqueInputObjectSchema } from './FriendshipRequestWhereUniqueInput.schema';
import { FriendshipRequestUpdateWithoutFrom_userInputObjectSchema as FriendshipRequestUpdateWithoutFrom_userInputObjectSchema } from './FriendshipRequestUpdateWithoutFrom_userInput.schema';
import { FriendshipRequestUncheckedUpdateWithoutFrom_userInputObjectSchema as FriendshipRequestUncheckedUpdateWithoutFrom_userInputObjectSchema } from './FriendshipRequestUncheckedUpdateWithoutFrom_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FriendshipRequestUpdateWithoutFrom_userInputObjectSchema), z.lazy(() => FriendshipRequestUncheckedUpdateWithoutFrom_userInputObjectSchema)])
}).strict();
export const FriendshipRequestUpdateWithWhereUniqueWithoutFrom_userInputObjectSchema: z.ZodType<Prisma.FriendshipRequestUpdateWithWhereUniqueWithoutFrom_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestUpdateWithWhereUniqueWithoutFrom_userInput>;
export const FriendshipRequestUpdateWithWhereUniqueWithoutFrom_userInputObjectZodSchema = makeSchema();
