import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestCreateWithoutTo_userInputObjectSchema as FriendshipRequestCreateWithoutTo_userInputObjectSchema } from './FriendshipRequestCreateWithoutTo_userInput.schema';
import { FriendshipRequestUncheckedCreateWithoutTo_userInputObjectSchema as FriendshipRequestUncheckedCreateWithoutTo_userInputObjectSchema } from './FriendshipRequestUncheckedCreateWithoutTo_userInput.schema';
import { FriendshipRequestCreateOrConnectWithoutTo_userInputObjectSchema as FriendshipRequestCreateOrConnectWithoutTo_userInputObjectSchema } from './FriendshipRequestCreateOrConnectWithoutTo_userInput.schema';
import { FriendshipRequestUpsertWithWhereUniqueWithoutTo_userInputObjectSchema as FriendshipRequestUpsertWithWhereUniqueWithoutTo_userInputObjectSchema } from './FriendshipRequestUpsertWithWhereUniqueWithoutTo_userInput.schema';
import { FriendshipRequestCreateManyTo_userInputEnvelopeObjectSchema as FriendshipRequestCreateManyTo_userInputEnvelopeObjectSchema } from './FriendshipRequestCreateManyTo_userInputEnvelope.schema';
import { FriendshipRequestWhereUniqueInputObjectSchema as FriendshipRequestWhereUniqueInputObjectSchema } from './FriendshipRequestWhereUniqueInput.schema';
import { FriendshipRequestUpdateWithWhereUniqueWithoutTo_userInputObjectSchema as FriendshipRequestUpdateWithWhereUniqueWithoutTo_userInputObjectSchema } from './FriendshipRequestUpdateWithWhereUniqueWithoutTo_userInput.schema';
import { FriendshipRequestUpdateManyWithWhereWithoutTo_userInputObjectSchema as FriendshipRequestUpdateManyWithWhereWithoutTo_userInputObjectSchema } from './FriendshipRequestUpdateManyWithWhereWithoutTo_userInput.schema';
import { FriendshipRequestScalarWhereInputObjectSchema as FriendshipRequestScalarWhereInputObjectSchema } from './FriendshipRequestScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FriendshipRequestCreateWithoutTo_userInputObjectSchema), z.lazy(() => FriendshipRequestCreateWithoutTo_userInputObjectSchema).array(), z.lazy(() => FriendshipRequestUncheckedCreateWithoutTo_userInputObjectSchema), z.lazy(() => FriendshipRequestUncheckedCreateWithoutTo_userInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FriendshipRequestCreateOrConnectWithoutTo_userInputObjectSchema), z.lazy(() => FriendshipRequestCreateOrConnectWithoutTo_userInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FriendshipRequestUpsertWithWhereUniqueWithoutTo_userInputObjectSchema), z.lazy(() => FriendshipRequestUpsertWithWhereUniqueWithoutTo_userInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FriendshipRequestCreateManyTo_userInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema), z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema), z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema), z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema), z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FriendshipRequestUpdateWithWhereUniqueWithoutTo_userInputObjectSchema), z.lazy(() => FriendshipRequestUpdateWithWhereUniqueWithoutTo_userInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FriendshipRequestUpdateManyWithWhereWithoutTo_userInputObjectSchema), z.lazy(() => FriendshipRequestUpdateManyWithWhereWithoutTo_userInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FriendshipRequestScalarWhereInputObjectSchema), z.lazy(() => FriendshipRequestScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FriendshipRequestUpdateManyWithoutTo_userNestedInputObjectSchema: z.ZodType<Prisma.FriendshipRequestUpdateManyWithoutTo_userNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestUpdateManyWithoutTo_userNestedInput>;
export const FriendshipRequestUpdateManyWithoutTo_userNestedInputObjectZodSchema = makeSchema();
