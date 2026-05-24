import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionCreateWithoutCreated_byInputObjectSchema as MatchSessionCreateWithoutCreated_byInputObjectSchema } from './MatchSessionCreateWithoutCreated_byInput.schema';
import { MatchSessionUncheckedCreateWithoutCreated_byInputObjectSchema as MatchSessionUncheckedCreateWithoutCreated_byInputObjectSchema } from './MatchSessionUncheckedCreateWithoutCreated_byInput.schema';
import { MatchSessionCreateOrConnectWithoutCreated_byInputObjectSchema as MatchSessionCreateOrConnectWithoutCreated_byInputObjectSchema } from './MatchSessionCreateOrConnectWithoutCreated_byInput.schema';
import { MatchSessionUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema as MatchSessionUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema } from './MatchSessionUpsertWithWhereUniqueWithoutCreated_byInput.schema';
import { MatchSessionCreateManyCreated_byInputEnvelopeObjectSchema as MatchSessionCreateManyCreated_byInputEnvelopeObjectSchema } from './MatchSessionCreateManyCreated_byInputEnvelope.schema';
import { MatchSessionWhereUniqueInputObjectSchema as MatchSessionWhereUniqueInputObjectSchema } from './MatchSessionWhereUniqueInput.schema';
import { MatchSessionUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema as MatchSessionUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema } from './MatchSessionUpdateWithWhereUniqueWithoutCreated_byInput.schema';
import { MatchSessionUpdateManyWithWhereWithoutCreated_byInputObjectSchema as MatchSessionUpdateManyWithWhereWithoutCreated_byInputObjectSchema } from './MatchSessionUpdateManyWithWhereWithoutCreated_byInput.schema';
import { MatchSessionScalarWhereInputObjectSchema as MatchSessionScalarWhereInputObjectSchema } from './MatchSessionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchSessionCreateWithoutCreated_byInputObjectSchema), z.lazy(() => MatchSessionCreateWithoutCreated_byInputObjectSchema).array(), z.lazy(() => MatchSessionUncheckedCreateWithoutCreated_byInputObjectSchema), z.lazy(() => MatchSessionUncheckedCreateWithoutCreated_byInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MatchSessionCreateOrConnectWithoutCreated_byInputObjectSchema), z.lazy(() => MatchSessionCreateOrConnectWithoutCreated_byInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MatchSessionUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema), z.lazy(() => MatchSessionUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MatchSessionCreateManyCreated_byInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MatchSessionWhereUniqueInputObjectSchema), z.lazy(() => MatchSessionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MatchSessionWhereUniqueInputObjectSchema), z.lazy(() => MatchSessionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MatchSessionWhereUniqueInputObjectSchema), z.lazy(() => MatchSessionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MatchSessionWhereUniqueInputObjectSchema), z.lazy(() => MatchSessionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MatchSessionUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema), z.lazy(() => MatchSessionUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MatchSessionUpdateManyWithWhereWithoutCreated_byInputObjectSchema), z.lazy(() => MatchSessionUpdateManyWithWhereWithoutCreated_byInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MatchSessionScalarWhereInputObjectSchema), z.lazy(() => MatchSessionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MatchSessionUncheckedUpdateManyWithoutCreated_byNestedInputObjectSchema: z.ZodType<Prisma.MatchSessionUncheckedUpdateManyWithoutCreated_byNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionUncheckedUpdateManyWithoutCreated_byNestedInput>;
export const MatchSessionUncheckedUpdateManyWithoutCreated_byNestedInputObjectZodSchema = makeSchema();
