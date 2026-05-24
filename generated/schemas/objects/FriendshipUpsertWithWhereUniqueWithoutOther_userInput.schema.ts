import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipUpdateWithoutOther_userInputObjectSchema as FriendshipUpdateWithoutOther_userInputObjectSchema } from './FriendshipUpdateWithoutOther_userInput.schema';
import { FriendshipUncheckedUpdateWithoutOther_userInputObjectSchema as FriendshipUncheckedUpdateWithoutOther_userInputObjectSchema } from './FriendshipUncheckedUpdateWithoutOther_userInput.schema';
import { FriendshipCreateWithoutOther_userInputObjectSchema as FriendshipCreateWithoutOther_userInputObjectSchema } from './FriendshipCreateWithoutOther_userInput.schema';
import { FriendshipUncheckedCreateWithoutOther_userInputObjectSchema as FriendshipUncheckedCreateWithoutOther_userInputObjectSchema } from './FriendshipUncheckedCreateWithoutOther_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FriendshipUpdateWithoutOther_userInputObjectSchema), z.lazy(() => FriendshipUncheckedUpdateWithoutOther_userInputObjectSchema)]),
  create: z.union([z.lazy(() => FriendshipCreateWithoutOther_userInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutOther_userInputObjectSchema)])
}).strict();
export const FriendshipUpsertWithWhereUniqueWithoutOther_userInputObjectSchema: z.ZodType<Prisma.FriendshipUpsertWithWhereUniqueWithoutOther_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpsertWithWhereUniqueWithoutOther_userInput>;
export const FriendshipUpsertWithWhereUniqueWithoutOther_userInputObjectZodSchema = makeSchema();
