import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipCreateWithoutUserInputObjectSchema as FriendshipCreateWithoutUserInputObjectSchema } from './FriendshipCreateWithoutUserInput.schema';
import { FriendshipUncheckedCreateWithoutUserInputObjectSchema as FriendshipUncheckedCreateWithoutUserInputObjectSchema } from './FriendshipUncheckedCreateWithoutUserInput.schema';
import { FriendshipCreateOrConnectWithoutUserInputObjectSchema as FriendshipCreateOrConnectWithoutUserInputObjectSchema } from './FriendshipCreateOrConnectWithoutUserInput.schema';
import { FriendshipUpsertWithWhereUniqueWithoutUserInputObjectSchema as FriendshipUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './FriendshipUpsertWithWhereUniqueWithoutUserInput.schema';
import { FriendshipCreateManyUserInputEnvelopeObjectSchema as FriendshipCreateManyUserInputEnvelopeObjectSchema } from './FriendshipCreateManyUserInputEnvelope.schema';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipUpdateWithWhereUniqueWithoutUserInputObjectSchema as FriendshipUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './FriendshipUpdateWithWhereUniqueWithoutUserInput.schema';
import { FriendshipUpdateManyWithWhereWithoutUserInputObjectSchema as FriendshipUpdateManyWithWhereWithoutUserInputObjectSchema } from './FriendshipUpdateManyWithWhereWithoutUserInput.schema';
import { FriendshipScalarWhereInputObjectSchema as FriendshipScalarWhereInputObjectSchema } from './FriendshipScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FriendshipCreateWithoutUserInputObjectSchema), z.lazy(() => FriendshipCreateWithoutUserInputObjectSchema).array(), z.lazy(() => FriendshipUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FriendshipCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => FriendshipCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FriendshipUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => FriendshipUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FriendshipCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FriendshipUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => FriendshipUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FriendshipUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => FriendshipUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FriendshipScalarWhereInputObjectSchema), z.lazy(() => FriendshipScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FriendshipUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.FriendshipUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUncheckedUpdateManyWithoutUserNestedInput>;
export const FriendshipUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
