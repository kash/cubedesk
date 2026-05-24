import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestWhereUniqueInputObjectSchema as FriendshipRequestWhereUniqueInputObjectSchema } from './FriendshipRequestWhereUniqueInput.schema';
import { FriendshipRequestUpdateWithoutTo_userInputObjectSchema as FriendshipRequestUpdateWithoutTo_userInputObjectSchema } from './FriendshipRequestUpdateWithoutTo_userInput.schema';
import { FriendshipRequestUncheckedUpdateWithoutTo_userInputObjectSchema as FriendshipRequestUncheckedUpdateWithoutTo_userInputObjectSchema } from './FriendshipRequestUncheckedUpdateWithoutTo_userInput.schema';
import { FriendshipRequestCreateWithoutTo_userInputObjectSchema as FriendshipRequestCreateWithoutTo_userInputObjectSchema } from './FriendshipRequestCreateWithoutTo_userInput.schema';
import { FriendshipRequestUncheckedCreateWithoutTo_userInputObjectSchema as FriendshipRequestUncheckedCreateWithoutTo_userInputObjectSchema } from './FriendshipRequestUncheckedCreateWithoutTo_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FriendshipRequestUpdateWithoutTo_userInputObjectSchema), z.lazy(() => FriendshipRequestUncheckedUpdateWithoutTo_userInputObjectSchema)]),
  create: z.union([z.lazy(() => FriendshipRequestCreateWithoutTo_userInputObjectSchema), z.lazy(() => FriendshipRequestUncheckedCreateWithoutTo_userInputObjectSchema)])
}).strict();
export const FriendshipRequestUpsertWithWhereUniqueWithoutTo_userInputObjectSchema: z.ZodType<Prisma.FriendshipRequestUpsertWithWhereUniqueWithoutTo_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestUpsertWithWhereUniqueWithoutTo_userInput>;
export const FriendshipRequestUpsertWithWhereUniqueWithoutTo_userInputObjectZodSchema = makeSchema();
