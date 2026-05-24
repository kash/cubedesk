import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantCreateWithoutUserInputObjectSchema as MatchParticipantCreateWithoutUserInputObjectSchema } from './MatchParticipantCreateWithoutUserInput.schema';
import { MatchParticipantUncheckedCreateWithoutUserInputObjectSchema as MatchParticipantUncheckedCreateWithoutUserInputObjectSchema } from './MatchParticipantUncheckedCreateWithoutUserInput.schema';
import { MatchParticipantCreateOrConnectWithoutUserInputObjectSchema as MatchParticipantCreateOrConnectWithoutUserInputObjectSchema } from './MatchParticipantCreateOrConnectWithoutUserInput.schema';
import { MatchParticipantCreateManyUserInputEnvelopeObjectSchema as MatchParticipantCreateManyUserInputEnvelopeObjectSchema } from './MatchParticipantCreateManyUserInputEnvelope.schema';
import { MatchParticipantWhereUniqueInputObjectSchema as MatchParticipantWhereUniqueInputObjectSchema } from './MatchParticipantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchParticipantCreateWithoutUserInputObjectSchema), z.lazy(() => MatchParticipantCreateWithoutUserInputObjectSchema).array(), z.lazy(() => MatchParticipantUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => MatchParticipantUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MatchParticipantCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => MatchParticipantCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MatchParticipantCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema), z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MatchParticipantUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.MatchParticipantUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantUncheckedCreateNestedManyWithoutUserInput>;
export const MatchParticipantUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
