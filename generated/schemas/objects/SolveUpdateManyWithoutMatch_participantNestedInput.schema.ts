import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutMatch_participantInputObjectSchema as SolveCreateWithoutMatch_participantInputObjectSchema } from './SolveCreateWithoutMatch_participantInput.schema';
import { SolveUncheckedCreateWithoutMatch_participantInputObjectSchema as SolveUncheckedCreateWithoutMatch_participantInputObjectSchema } from './SolveUncheckedCreateWithoutMatch_participantInput.schema';
import { SolveCreateOrConnectWithoutMatch_participantInputObjectSchema as SolveCreateOrConnectWithoutMatch_participantInputObjectSchema } from './SolveCreateOrConnectWithoutMatch_participantInput.schema';
import { SolveUpsertWithWhereUniqueWithoutMatch_participantInputObjectSchema as SolveUpsertWithWhereUniqueWithoutMatch_participantInputObjectSchema } from './SolveUpsertWithWhereUniqueWithoutMatch_participantInput.schema';
import { SolveCreateManyMatch_participantInputEnvelopeObjectSchema as SolveCreateManyMatch_participantInputEnvelopeObjectSchema } from './SolveCreateManyMatch_participantInputEnvelope.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateWithWhereUniqueWithoutMatch_participantInputObjectSchema as SolveUpdateWithWhereUniqueWithoutMatch_participantInputObjectSchema } from './SolveUpdateWithWhereUniqueWithoutMatch_participantInput.schema';
import { SolveUpdateManyWithWhereWithoutMatch_participantInputObjectSchema as SolveUpdateManyWithWhereWithoutMatch_participantInputObjectSchema } from './SolveUpdateManyWithWhereWithoutMatch_participantInput.schema';
import { SolveScalarWhereInputObjectSchema as SolveScalarWhereInputObjectSchema } from './SolveScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutMatch_participantInputObjectSchema), z.lazy(() => SolveCreateWithoutMatch_participantInputObjectSchema).array(), z.lazy(() => SolveUncheckedCreateWithoutMatch_participantInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutMatch_participantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SolveCreateOrConnectWithoutMatch_participantInputObjectSchema), z.lazy(() => SolveCreateOrConnectWithoutMatch_participantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SolveUpsertWithWhereUniqueWithoutMatch_participantInputObjectSchema), z.lazy(() => SolveUpsertWithWhereUniqueWithoutMatch_participantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SolveCreateManyMatch_participantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SolveUpdateWithWhereUniqueWithoutMatch_participantInputObjectSchema), z.lazy(() => SolveUpdateWithWhereUniqueWithoutMatch_participantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SolveUpdateManyWithWhereWithoutMatch_participantInputObjectSchema), z.lazy(() => SolveUpdateManyWithWhereWithoutMatch_participantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SolveScalarWhereInputObjectSchema), z.lazy(() => SolveScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SolveUpdateManyWithoutMatch_participantNestedInputObjectSchema: z.ZodType<Prisma.SolveUpdateManyWithoutMatch_participantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateManyWithoutMatch_participantNestedInput>;
export const SolveUpdateManyWithoutMatch_participantNestedInputObjectZodSchema = makeSchema();
