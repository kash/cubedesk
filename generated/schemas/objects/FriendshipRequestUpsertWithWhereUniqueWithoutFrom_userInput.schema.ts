import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestWhereUniqueInputObjectSchema as FriendshipRequestWhereUniqueInputObjectSchema } from './FriendshipRequestWhereUniqueInput.schema';
import { FriendshipRequestUpdateWithoutFrom_userInputObjectSchema as FriendshipRequestUpdateWithoutFrom_userInputObjectSchema } from './FriendshipRequestUpdateWithoutFrom_userInput.schema';
import { FriendshipRequestUncheckedUpdateWithoutFrom_userInputObjectSchema as FriendshipRequestUncheckedUpdateWithoutFrom_userInputObjectSchema } from './FriendshipRequestUncheckedUpdateWithoutFrom_userInput.schema';
import { FriendshipRequestCreateWithoutFrom_userInputObjectSchema as FriendshipRequestCreateWithoutFrom_userInputObjectSchema } from './FriendshipRequestCreateWithoutFrom_userInput.schema';
import { FriendshipRequestUncheckedCreateWithoutFrom_userInputObjectSchema as FriendshipRequestUncheckedCreateWithoutFrom_userInputObjectSchema } from './FriendshipRequestUncheckedCreateWithoutFrom_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FriendshipRequestUpdateWithoutFrom_userInputObjectSchema), z.lazy(() => FriendshipRequestUncheckedUpdateWithoutFrom_userInputObjectSchema)]),
  create: z.union([z.lazy(() => FriendshipRequestCreateWithoutFrom_userInputObjectSchema), z.lazy(() => FriendshipRequestUncheckedCreateWithoutFrom_userInputObjectSchema)])
}).strict();
export const FriendshipRequestUpsertWithWhereUniqueWithoutFrom_userInputObjectSchema: z.ZodType<Prisma.FriendshipRequestUpsertWithWhereUniqueWithoutFrom_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestUpsertWithWhereUniqueWithoutFrom_userInput>;
export const FriendshipRequestUpsertWithWhereUniqueWithoutFrom_userInputObjectZodSchema = makeSchema();
