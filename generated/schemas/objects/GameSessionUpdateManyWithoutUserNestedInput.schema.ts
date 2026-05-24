import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionCreateWithoutUserInputObjectSchema as GameSessionCreateWithoutUserInputObjectSchema } from './GameSessionCreateWithoutUserInput.schema';
import { GameSessionUncheckedCreateWithoutUserInputObjectSchema as GameSessionUncheckedCreateWithoutUserInputObjectSchema } from './GameSessionUncheckedCreateWithoutUserInput.schema';
import { GameSessionCreateOrConnectWithoutUserInputObjectSchema as GameSessionCreateOrConnectWithoutUserInputObjectSchema } from './GameSessionCreateOrConnectWithoutUserInput.schema';
import { GameSessionUpsertWithWhereUniqueWithoutUserInputObjectSchema as GameSessionUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './GameSessionUpsertWithWhereUniqueWithoutUserInput.schema';
import { GameSessionCreateManyUserInputEnvelopeObjectSchema as GameSessionCreateManyUserInputEnvelopeObjectSchema } from './GameSessionCreateManyUserInputEnvelope.schema';
import { GameSessionWhereUniqueInputObjectSchema as GameSessionWhereUniqueInputObjectSchema } from './GameSessionWhereUniqueInput.schema';
import { GameSessionUpdateWithWhereUniqueWithoutUserInputObjectSchema as GameSessionUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './GameSessionUpdateWithWhereUniqueWithoutUserInput.schema';
import { GameSessionUpdateManyWithWhereWithoutUserInputObjectSchema as GameSessionUpdateManyWithWhereWithoutUserInputObjectSchema } from './GameSessionUpdateManyWithWhereWithoutUserInput.schema';
import { GameSessionScalarWhereInputObjectSchema as GameSessionScalarWhereInputObjectSchema } from './GameSessionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GameSessionCreateWithoutUserInputObjectSchema), z.lazy(() => GameSessionCreateWithoutUserInputObjectSchema).array(), z.lazy(() => GameSessionUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => GameSessionUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GameSessionCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => GameSessionCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => GameSessionUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => GameSessionUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GameSessionCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => GameSessionWhereUniqueInputObjectSchema), z.lazy(() => GameSessionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => GameSessionWhereUniqueInputObjectSchema), z.lazy(() => GameSessionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => GameSessionWhereUniqueInputObjectSchema), z.lazy(() => GameSessionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GameSessionWhereUniqueInputObjectSchema), z.lazy(() => GameSessionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => GameSessionUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => GameSessionUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => GameSessionUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => GameSessionUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => GameSessionScalarWhereInputObjectSchema), z.lazy(() => GameSessionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const GameSessionUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.GameSessionUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionUpdateManyWithoutUserNestedInput>;
export const GameSessionUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
