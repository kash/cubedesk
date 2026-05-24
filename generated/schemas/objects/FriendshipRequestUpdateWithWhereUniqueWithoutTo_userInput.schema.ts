import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestWhereUniqueInputObjectSchema as FriendshipRequestWhereUniqueInputObjectSchema } from './FriendshipRequestWhereUniqueInput.schema';
import { FriendshipRequestUpdateWithoutTo_userInputObjectSchema as FriendshipRequestUpdateWithoutTo_userInputObjectSchema } from './FriendshipRequestUpdateWithoutTo_userInput.schema';
import { FriendshipRequestUncheckedUpdateWithoutTo_userInputObjectSchema as FriendshipRequestUncheckedUpdateWithoutTo_userInputObjectSchema } from './FriendshipRequestUncheckedUpdateWithoutTo_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FriendshipRequestUpdateWithoutTo_userInputObjectSchema), z.lazy(() => FriendshipRequestUncheckedUpdateWithoutTo_userInputObjectSchema)])
}).strict();
export const FriendshipRequestUpdateWithWhereUniqueWithoutTo_userInputObjectSchema: z.ZodType<Prisma.FriendshipRequestUpdateWithWhereUniqueWithoutTo_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestUpdateWithWhereUniqueWithoutTo_userInput>;
export const FriendshipRequestUpdateWithWhereUniqueWithoutTo_userInputObjectZodSchema = makeSchema();
