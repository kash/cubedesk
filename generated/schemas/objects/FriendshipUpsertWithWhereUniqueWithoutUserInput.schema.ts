import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipUpdateWithoutUserInputObjectSchema as FriendshipUpdateWithoutUserInputObjectSchema } from './FriendshipUpdateWithoutUserInput.schema';
import { FriendshipUncheckedUpdateWithoutUserInputObjectSchema as FriendshipUncheckedUpdateWithoutUserInputObjectSchema } from './FriendshipUncheckedUpdateWithoutUserInput.schema';
import { FriendshipCreateWithoutUserInputObjectSchema as FriendshipCreateWithoutUserInputObjectSchema } from './FriendshipCreateWithoutUserInput.schema';
import { FriendshipUncheckedCreateWithoutUserInputObjectSchema as FriendshipUncheckedCreateWithoutUserInputObjectSchema } from './FriendshipUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FriendshipUpdateWithoutUserInputObjectSchema), z.lazy(() => FriendshipUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => FriendshipCreateWithoutUserInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const FriendshipUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.FriendshipUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpsertWithWhereUniqueWithoutUserInput>;
export const FriendshipUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
