import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipUpdateWithoutOther_userInputObjectSchema as FriendshipUpdateWithoutOther_userInputObjectSchema } from './FriendshipUpdateWithoutOther_userInput.schema';
import { FriendshipUncheckedUpdateWithoutOther_userInputObjectSchema as FriendshipUncheckedUpdateWithoutOther_userInputObjectSchema } from './FriendshipUncheckedUpdateWithoutOther_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FriendshipUpdateWithoutOther_userInputObjectSchema), z.lazy(() => FriendshipUncheckedUpdateWithoutOther_userInputObjectSchema)])
}).strict();
export const FriendshipUpdateWithWhereUniqueWithoutOther_userInputObjectSchema: z.ZodType<Prisma.FriendshipUpdateWithWhereUniqueWithoutOther_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpdateWithWhereUniqueWithoutOther_userInput>;
export const FriendshipUpdateWithWhereUniqueWithoutOther_userInputObjectZodSchema = makeSchema();
