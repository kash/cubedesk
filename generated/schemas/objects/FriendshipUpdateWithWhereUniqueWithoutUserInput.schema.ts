import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipUpdateWithoutUserInputObjectSchema as FriendshipUpdateWithoutUserInputObjectSchema } from './FriendshipUpdateWithoutUserInput.schema';
import { FriendshipUncheckedUpdateWithoutUserInputObjectSchema as FriendshipUncheckedUpdateWithoutUserInputObjectSchema } from './FriendshipUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FriendshipUpdateWithoutUserInputObjectSchema), z.lazy(() => FriendshipUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const FriendshipUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.FriendshipUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpdateWithWhereUniqueWithoutUserInput>;
export const FriendshipUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
