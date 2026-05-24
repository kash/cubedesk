import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipUpdateWithoutFriendship_requestInputObjectSchema as FriendshipUpdateWithoutFriendship_requestInputObjectSchema } from './FriendshipUpdateWithoutFriendship_requestInput.schema';
import { FriendshipUncheckedUpdateWithoutFriendship_requestInputObjectSchema as FriendshipUncheckedUpdateWithoutFriendship_requestInputObjectSchema } from './FriendshipUncheckedUpdateWithoutFriendship_requestInput.schema';
import { FriendshipCreateWithoutFriendship_requestInputObjectSchema as FriendshipCreateWithoutFriendship_requestInputObjectSchema } from './FriendshipCreateWithoutFriendship_requestInput.schema';
import { FriendshipUncheckedCreateWithoutFriendship_requestInputObjectSchema as FriendshipUncheckedCreateWithoutFriendship_requestInputObjectSchema } from './FriendshipUncheckedCreateWithoutFriendship_requestInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FriendshipUpdateWithoutFriendship_requestInputObjectSchema), z.lazy(() => FriendshipUncheckedUpdateWithoutFriendship_requestInputObjectSchema)]),
  create: z.union([z.lazy(() => FriendshipCreateWithoutFriendship_requestInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutFriendship_requestInputObjectSchema)])
}).strict();
export const FriendshipUpsertWithWhereUniqueWithoutFriendship_requestInputObjectSchema: z.ZodType<Prisma.FriendshipUpsertWithWhereUniqueWithoutFriendship_requestInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpsertWithWhereUniqueWithoutFriendship_requestInput>;
export const FriendshipUpsertWithWhereUniqueWithoutFriendship_requestInputObjectZodSchema = makeSchema();
