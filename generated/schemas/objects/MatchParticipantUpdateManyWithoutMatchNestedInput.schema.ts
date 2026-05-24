import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantCreateWithoutMatchInputObjectSchema as MatchParticipantCreateWithoutMatchInputObjectSchema } from './MatchParticipantCreateWithoutMatchInput.schema';
import { MatchParticipantUncheckedCreateWithoutMatchInputObjectSchema as MatchParticipantUncheckedCreateWithoutMatchInputObjectSchema } from './MatchParticipantUncheckedCreateWithoutMatchInput.schema';
import { MatchParticipantCreateOrConnectWithoutMatchInputObjectSchema as MatchParticipantCreateOrConnectWithoutMatchInputObjectSchema } from './MatchParticipantCreateOrConnectWithoutMatchInput.schema';
import { MatchParticipantUpsertWithWhereUniqueWithoutMatchInputObjectSchema as MatchParticipantUpsertWithWhereUniqueWithoutMatchInputObjectSchema } from './MatchParticipantUpsertWithWhereUniqueWithoutMatchInput.schema';
import { MatchParticipantCreateManyMatchInputEnvelopeObjectSchema as MatchParticipantCreateManyMatchInputEnvelopeObjectSchema } from './MatchParticipantCreateManyMatchInputEnvelope.schema';
import { MatchParticipantWhereUniqueInputObjectSchema as MatchParticipantWhereUniqueInputObjectSchema } from './MatchParticipantWhereUniqueInput.schema';
import { MatchParticipantUpdateWithWhereUniqueWithoutMatchInputObjectSchema as MatchParticipantUpdateWithWhereUniqueWithoutMatchInputObjectSchema } from './MatchParticipantUpdateWithWhereUniqueWithoutMatchInput.schema';
import { MatchParticipantUpdateManyWithWhereWithoutMatchInputObjectSchema as MatchParticipantUpdateManyWithWhereWithoutMatchInputObjectSchema } from './MatchParticipantUpdateManyWithWhereWithoutMatchInput.schema';
import { MatchParticipantScalarWhereInputObjectSchema as MatchParticipantScalarWhereInputObjectSchema } from './MatchParticipantScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchParticipantCreateWithoutMatchInputObjectSchema), z.lazy(() => MatchParticipantCreateWithoutMatchInputObjectSchema).array(), z.lazy(() => MatchParticipantUncheckedCreateWithoutMatchInputObjectSchema), z.lazy(() => MatchParticipantUncheckedCreateWithoutMatchInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MatchParticipantCreateOrConnectWithoutMatchInputObjectSchema), z.lazy(() => MatchParticipantCreateOrConnectWithoutMatchInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MatchParticipantUpsertWithWhereUniqueWithoutMatchInputObjectSchema), z.lazy(() => MatchParticipantUpsertWithWhereUniqueWithoutMatchInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MatchParticipantCreateManyMatchInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema), z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema), z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema), z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema), z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MatchParticipantUpdateWithWhereUniqueWithoutMatchInputObjectSchema), z.lazy(() => MatchParticipantUpdateWithWhereUniqueWithoutMatchInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MatchParticipantUpdateManyWithWhereWithoutMatchInputObjectSchema), z.lazy(() => MatchParticipantUpdateManyWithWhereWithoutMatchInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MatchParticipantScalarWhereInputObjectSchema), z.lazy(() => MatchParticipantScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MatchParticipantUpdateManyWithoutMatchNestedInputObjectSchema: z.ZodType<Prisma.MatchParticipantUpdateManyWithoutMatchNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantUpdateManyWithoutMatchNestedInput>;
export const MatchParticipantUpdateManyWithoutMatchNestedInputObjectZodSchema = makeSchema();
