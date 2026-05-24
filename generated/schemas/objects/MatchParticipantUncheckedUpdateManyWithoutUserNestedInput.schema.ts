import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantCreateWithoutUserInputObjectSchema as MatchParticipantCreateWithoutUserInputObjectSchema } from './MatchParticipantCreateWithoutUserInput.schema';
import { MatchParticipantUncheckedCreateWithoutUserInputObjectSchema as MatchParticipantUncheckedCreateWithoutUserInputObjectSchema } from './MatchParticipantUncheckedCreateWithoutUserInput.schema';
import { MatchParticipantCreateOrConnectWithoutUserInputObjectSchema as MatchParticipantCreateOrConnectWithoutUserInputObjectSchema } from './MatchParticipantCreateOrConnectWithoutUserInput.schema';
import { MatchParticipantUpsertWithWhereUniqueWithoutUserInputObjectSchema as MatchParticipantUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './MatchParticipantUpsertWithWhereUniqueWithoutUserInput.schema';
import { MatchParticipantCreateManyUserInputEnvelopeObjectSchema as MatchParticipantCreateManyUserInputEnvelopeObjectSchema } from './MatchParticipantCreateManyUserInputEnvelope.schema';
import { MatchParticipantWhereUniqueInputObjectSchema as MatchParticipantWhereUniqueInputObjectSchema } from './MatchParticipantWhereUniqueInput.schema';
import { MatchParticipantUpdateWithWhereUniqueWithoutUserInputObjectSchema as MatchParticipantUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './MatchParticipantUpdateWithWhereUniqueWithoutUserInput.schema';
import { MatchParticipantUpdateManyWithWhereWithoutUserInputObjectSchema as MatchParticipantUpdateManyWithWhereWithoutUserInputObjectSchema } from './MatchParticipantUpdateManyWithWhereWithoutUserInput.schema';
import { MatchParticipantScalarWhereInputObjectSchema as MatchParticipantScalarWhereInputObjectSchema } from './MatchParticipantScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchParticipantCreateWithoutUserInputObjectSchema), z.lazy(() => MatchParticipantCreateWithoutUserInputObjectSchema).array(), z.lazy(() => MatchParticipantUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => MatchParticipantUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MatchParticipantCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => MatchParticipantCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MatchParticipantUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => MatchParticipantUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MatchParticipantCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema), z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema), z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema), z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema), z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MatchParticipantUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => MatchParticipantUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MatchParticipantUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => MatchParticipantUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MatchParticipantScalarWhereInputObjectSchema), z.lazy(() => MatchParticipantScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MatchParticipantUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.MatchParticipantUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantUncheckedUpdateManyWithoutUserNestedInput>;
export const MatchParticipantUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
