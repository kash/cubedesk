import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipUpdateWithoutFriendship_requestInputObjectSchema as FriendshipUpdateWithoutFriendship_requestInputObjectSchema } from './FriendshipUpdateWithoutFriendship_requestInput.schema';
import { FriendshipUncheckedUpdateWithoutFriendship_requestInputObjectSchema as FriendshipUncheckedUpdateWithoutFriendship_requestInputObjectSchema } from './FriendshipUncheckedUpdateWithoutFriendship_requestInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FriendshipUpdateWithoutFriendship_requestInputObjectSchema), z.lazy(() => FriendshipUncheckedUpdateWithoutFriendship_requestInputObjectSchema)])
}).strict();
export const FriendshipUpdateWithWhereUniqueWithoutFriendship_requestInputObjectSchema: z.ZodType<Prisma.FriendshipUpdateWithWhereUniqueWithoutFriendship_requestInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpdateWithWhereUniqueWithoutFriendship_requestInput>;
export const FriendshipUpdateWithWhereUniqueWithoutFriendship_requestInputObjectZodSchema = makeSchema();
