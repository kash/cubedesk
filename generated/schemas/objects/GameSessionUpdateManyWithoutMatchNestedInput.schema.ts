import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionCreateWithoutMatchInputObjectSchema as GameSessionCreateWithoutMatchInputObjectSchema } from './GameSessionCreateWithoutMatchInput.schema';
import { GameSessionUncheckedCreateWithoutMatchInputObjectSchema as GameSessionUncheckedCreateWithoutMatchInputObjectSchema } from './GameSessionUncheckedCreateWithoutMatchInput.schema';
import { GameSessionCreateOrConnectWithoutMatchInputObjectSchema as GameSessionCreateOrConnectWithoutMatchInputObjectSchema } from './GameSessionCreateOrConnectWithoutMatchInput.schema';
import { GameSessionUpsertWithWhereUniqueWithoutMatchInputObjectSchema as GameSessionUpsertWithWhereUniqueWithoutMatchInputObjectSchema } from './GameSessionUpsertWithWhereUniqueWithoutMatchInput.schema';
import { GameSessionCreateManyMatchInputEnvelopeObjectSchema as GameSessionCreateManyMatchInputEnvelopeObjectSchema } from './GameSessionCreateManyMatchInputEnvelope.schema';
import { GameSessionWhereUniqueInputObjectSchema as GameSessionWhereUniqueInputObjectSchema } from './GameSessionWhereUniqueInput.schema';
import { GameSessionUpdateWithWhereUniqueWithoutMatchInputObjectSchema as GameSessionUpdateWithWhereUniqueWithoutMatchInputObjectSchema } from './GameSessionUpdateWithWhereUniqueWithoutMatchInput.schema';
import { GameSessionUpdateManyWithWhereWithoutMatchInputObjectSchema as GameSessionUpdateManyWithWhereWithoutMatchInputObjectSchema } from './GameSessionUpdateManyWithWhereWithoutMatchInput.schema';
import { GameSessionScalarWhereInputObjectSchema as GameSessionScalarWhereInputObjectSchema } from './GameSessionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GameSessionCreateWithoutMatchInputObjectSchema), z.lazy(() => GameSessionCreateWithoutMatchInputObjectSchema).array(), z.lazy(() => GameSessionUncheckedCreateWithoutMatchInputObjectSchema), z.lazy(() => GameSessionUncheckedCreateWithoutMatchInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GameSessionCreateOrConnectWithoutMatchInputObjectSchema), z.lazy(() => GameSessionCreateOrConnectWithoutMatchInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => GameSessionUpsertWithWhereUniqueWithoutMatchInputObjectSchema), z.lazy(() => GameSessionUpsertWithWhereUniqueWithoutMatchInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GameSessionCreateManyMatchInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => GameSessionWhereUniqueInputObjectSchema), z.lazy(() => GameSessionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => GameSessionWhereUniqueInputObjectSchema), z.lazy(() => GameSessionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => GameSessionWhereUniqueInputObjectSchema), z.lazy(() => GameSessionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GameSessionWhereUniqueInputObjectSchema), z.lazy(() => GameSessionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => GameSessionUpdateWithWhereUniqueWithoutMatchInputObjectSchema), z.lazy(() => GameSessionUpdateWithWhereUniqueWithoutMatchInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => GameSessionUpdateManyWithWhereWithoutMatchInputObjectSchema), z.lazy(() => GameSessionUpdateManyWithWhereWithoutMatchInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => GameSessionScalarWhereInputObjectSchema), z.lazy(() => GameSessionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const GameSessionUpdateManyWithoutMatchNestedInputObjectSchema: z.ZodType<Prisma.GameSessionUpdateManyWithoutMatchNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionUpdateManyWithoutMatchNestedInput>;
export const GameSessionUpdateManyWithoutMatchNestedInputObjectZodSchema = makeSchema();
