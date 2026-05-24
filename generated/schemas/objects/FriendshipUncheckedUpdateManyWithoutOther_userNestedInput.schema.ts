import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipCreateWithoutOther_userInputObjectSchema as FriendshipCreateWithoutOther_userInputObjectSchema } from './FriendshipCreateWithoutOther_userInput.schema';
import { FriendshipUncheckedCreateWithoutOther_userInputObjectSchema as FriendshipUncheckedCreateWithoutOther_userInputObjectSchema } from './FriendshipUncheckedCreateWithoutOther_userInput.schema';
import { FriendshipCreateOrConnectWithoutOther_userInputObjectSchema as FriendshipCreateOrConnectWithoutOther_userInputObjectSchema } from './FriendshipCreateOrConnectWithoutOther_userInput.schema';
import { FriendshipUpsertWithWhereUniqueWithoutOther_userInputObjectSchema as FriendshipUpsertWithWhereUniqueWithoutOther_userInputObjectSchema } from './FriendshipUpsertWithWhereUniqueWithoutOther_userInput.schema';
import { FriendshipCreateManyOther_userInputEnvelopeObjectSchema as FriendshipCreateManyOther_userInputEnvelopeObjectSchema } from './FriendshipCreateManyOther_userInputEnvelope.schema';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipUpdateWithWhereUniqueWithoutOther_userInputObjectSchema as FriendshipUpdateWithWhereUniqueWithoutOther_userInputObjectSchema } from './FriendshipUpdateWithWhereUniqueWithoutOther_userInput.schema';
import { FriendshipUpdateManyWithWhereWithoutOther_userInputObjectSchema as FriendshipUpdateManyWithWhereWithoutOther_userInputObjectSchema } from './FriendshipUpdateManyWithWhereWithoutOther_userInput.schema';
import { FriendshipScalarWhereInputObjectSchema as FriendshipScalarWhereInputObjectSchema } from './FriendshipScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FriendshipCreateWithoutOther_userInputObjectSchema), z.lazy(() => FriendshipCreateWithoutOther_userInputObjectSchema).array(), z.lazy(() => FriendshipUncheckedCreateWithoutOther_userInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutOther_userInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FriendshipCreateOrConnectWithoutOther_userInputObjectSchema), z.lazy(() => FriendshipCreateOrConnectWithoutOther_userInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FriendshipUpsertWithWhereUniqueWithoutOther_userInputObjectSchema), z.lazy(() => FriendshipUpsertWithWhereUniqueWithoutOther_userInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FriendshipCreateManyOther_userInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FriendshipUpdateWithWhereUniqueWithoutOther_userInputObjectSchema), z.lazy(() => FriendshipUpdateWithWhereUniqueWithoutOther_userInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FriendshipUpdateManyWithWhereWithoutOther_userInputObjectSchema), z.lazy(() => FriendshipUpdateManyWithWhereWithoutOther_userInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FriendshipScalarWhereInputObjectSchema), z.lazy(() => FriendshipScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FriendshipUncheckedUpdateManyWithoutOther_userNestedInputObjectSchema: z.ZodType<Prisma.FriendshipUncheckedUpdateManyWithoutOther_userNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUncheckedUpdateManyWithoutOther_userNestedInput>;
export const FriendshipUncheckedUpdateManyWithoutOther_userNestedInputObjectZodSchema = makeSchema();
