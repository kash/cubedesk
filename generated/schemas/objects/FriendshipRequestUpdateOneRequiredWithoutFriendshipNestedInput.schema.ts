import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestCreateWithoutFriendshipInputObjectSchema as FriendshipRequestCreateWithoutFriendshipInputObjectSchema } from './FriendshipRequestCreateWithoutFriendshipInput.schema';
import { FriendshipRequestUncheckedCreateWithoutFriendshipInputObjectSchema as FriendshipRequestUncheckedCreateWithoutFriendshipInputObjectSchema } from './FriendshipRequestUncheckedCreateWithoutFriendshipInput.schema';
import { FriendshipRequestCreateOrConnectWithoutFriendshipInputObjectSchema as FriendshipRequestCreateOrConnectWithoutFriendshipInputObjectSchema } from './FriendshipRequestCreateOrConnectWithoutFriendshipInput.schema';
import { FriendshipRequestUpsertWithoutFriendshipInputObjectSchema as FriendshipRequestUpsertWithoutFriendshipInputObjectSchema } from './FriendshipRequestUpsertWithoutFriendshipInput.schema';
import { FriendshipRequestWhereUniqueInputObjectSchema as FriendshipRequestWhereUniqueInputObjectSchema } from './FriendshipRequestWhereUniqueInput.schema';
import { FriendshipRequestUpdateToOneWithWhereWithoutFriendshipInputObjectSchema as FriendshipRequestUpdateToOneWithWhereWithoutFriendshipInputObjectSchema } from './FriendshipRequestUpdateToOneWithWhereWithoutFriendshipInput.schema';
import { FriendshipRequestUpdateWithoutFriendshipInputObjectSchema as FriendshipRequestUpdateWithoutFriendshipInputObjectSchema } from './FriendshipRequestUpdateWithoutFriendshipInput.schema';
import { FriendshipRequestUncheckedUpdateWithoutFriendshipInputObjectSchema as FriendshipRequestUncheckedUpdateWithoutFriendshipInputObjectSchema } from './FriendshipRequestUncheckedUpdateWithoutFriendshipInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FriendshipRequestCreateWithoutFriendshipInputObjectSchema), z.lazy(() => FriendshipRequestUncheckedCreateWithoutFriendshipInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => FriendshipRequestCreateOrConnectWithoutFriendshipInputObjectSchema).optional(),
  upsert: z.lazy(() => FriendshipRequestUpsertWithoutFriendshipInputObjectSchema).optional(),
  connect: z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => FriendshipRequestUpdateToOneWithWhereWithoutFriendshipInputObjectSchema), z.lazy(() => FriendshipRequestUpdateWithoutFriendshipInputObjectSchema), z.lazy(() => FriendshipRequestUncheckedUpdateWithoutFriendshipInputObjectSchema)]).optional()
}).strict();
export const FriendshipRequestUpdateOneRequiredWithoutFriendshipNestedInputObjectSchema: z.ZodType<Prisma.FriendshipRequestUpdateOneRequiredWithoutFriendshipNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestUpdateOneRequiredWithoutFriendshipNestedInput>;
export const FriendshipRequestUpdateOneRequiredWithoutFriendshipNestedInputObjectZodSchema = makeSchema();
