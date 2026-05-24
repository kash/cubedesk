import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestCreateWithoutFrom_userInputObjectSchema as FriendshipRequestCreateWithoutFrom_userInputObjectSchema } from './FriendshipRequestCreateWithoutFrom_userInput.schema';
import { FriendshipRequestUncheckedCreateWithoutFrom_userInputObjectSchema as FriendshipRequestUncheckedCreateWithoutFrom_userInputObjectSchema } from './FriendshipRequestUncheckedCreateWithoutFrom_userInput.schema';
import { FriendshipRequestCreateOrConnectWithoutFrom_userInputObjectSchema as FriendshipRequestCreateOrConnectWithoutFrom_userInputObjectSchema } from './FriendshipRequestCreateOrConnectWithoutFrom_userInput.schema';
import { FriendshipRequestUpsertWithWhereUniqueWithoutFrom_userInputObjectSchema as FriendshipRequestUpsertWithWhereUniqueWithoutFrom_userInputObjectSchema } from './FriendshipRequestUpsertWithWhereUniqueWithoutFrom_userInput.schema';
import { FriendshipRequestCreateManyFrom_userInputEnvelopeObjectSchema as FriendshipRequestCreateManyFrom_userInputEnvelopeObjectSchema } from './FriendshipRequestCreateManyFrom_userInputEnvelope.schema';
import { FriendshipRequestWhereUniqueInputObjectSchema as FriendshipRequestWhereUniqueInputObjectSchema } from './FriendshipRequestWhereUniqueInput.schema';
import { FriendshipRequestUpdateWithWhereUniqueWithoutFrom_userInputObjectSchema as FriendshipRequestUpdateWithWhereUniqueWithoutFrom_userInputObjectSchema } from './FriendshipRequestUpdateWithWhereUniqueWithoutFrom_userInput.schema';
import { FriendshipRequestUpdateManyWithWhereWithoutFrom_userInputObjectSchema as FriendshipRequestUpdateManyWithWhereWithoutFrom_userInputObjectSchema } from './FriendshipRequestUpdateManyWithWhereWithoutFrom_userInput.schema';
import { FriendshipRequestScalarWhereInputObjectSchema as FriendshipRequestScalarWhereInputObjectSchema } from './FriendshipRequestScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FriendshipRequestCreateWithoutFrom_userInputObjectSchema), z.lazy(() => FriendshipRequestCreateWithoutFrom_userInputObjectSchema).array(), z.lazy(() => FriendshipRequestUncheckedCreateWithoutFrom_userInputObjectSchema), z.lazy(() => FriendshipRequestUncheckedCreateWithoutFrom_userInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FriendshipRequestCreateOrConnectWithoutFrom_userInputObjectSchema), z.lazy(() => FriendshipRequestCreateOrConnectWithoutFrom_userInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FriendshipRequestUpsertWithWhereUniqueWithoutFrom_userInputObjectSchema), z.lazy(() => FriendshipRequestUpsertWithWhereUniqueWithoutFrom_userInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FriendshipRequestCreateManyFrom_userInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema), z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema), z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema), z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema), z.lazy(() => FriendshipRequestWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FriendshipRequestUpdateWithWhereUniqueWithoutFrom_userInputObjectSchema), z.lazy(() => FriendshipRequestUpdateWithWhereUniqueWithoutFrom_userInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FriendshipRequestUpdateManyWithWhereWithoutFrom_userInputObjectSchema), z.lazy(() => FriendshipRequestUpdateManyWithWhereWithoutFrom_userInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FriendshipRequestScalarWhereInputObjectSchema), z.lazy(() => FriendshipRequestScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FriendshipRequestUncheckedUpdateManyWithoutFrom_userNestedInputObjectSchema: z.ZodType<Prisma.FriendshipRequestUncheckedUpdateManyWithoutFrom_userNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestUncheckedUpdateManyWithoutFrom_userNestedInput>;
export const FriendshipRequestUncheckedUpdateManyWithoutFrom_userNestedInputObjectZodSchema = makeSchema();
