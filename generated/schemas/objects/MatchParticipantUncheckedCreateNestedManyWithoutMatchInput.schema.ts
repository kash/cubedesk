import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantCreateWithoutMatchInputObjectSchema as MatchParticipantCreateWithoutMatchInputObjectSchema } from './MatchParticipantCreateWithoutMatchInput.schema';
import { MatchParticipantUncheckedCreateWithoutMatchInputObjectSchema as MatchParticipantUncheckedCreateWithoutMatchInputObjectSchema } from './MatchParticipantUncheckedCreateWithoutMatchInput.schema';
import { MatchParticipantCreateOrConnectWithoutMatchInputObjectSchema as MatchParticipantCreateOrConnectWithoutMatchInputObjectSchema } from './MatchParticipantCreateOrConnectWithoutMatchInput.schema';
import { MatchParticipantCreateManyMatchInputEnvelopeObjectSchema as MatchParticipantCreateManyMatchInputEnvelopeObjectSchema } from './MatchParticipantCreateManyMatchInputEnvelope.schema';
import { MatchParticipantWhereUniqueInputObjectSchema as MatchParticipantWhereUniqueInputObjectSchema } from './MatchParticipantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchParticipantCreateWithoutMatchInputObjectSchema), z.lazy(() => MatchParticipantCreateWithoutMatchInputObjectSchema).array(), z.lazy(() => MatchParticipantUncheckedCreateWithoutMatchInputObjectSchema), z.lazy(() => MatchParticipantUncheckedCreateWithoutMatchInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MatchParticipantCreateOrConnectWithoutMatchInputObjectSchema), z.lazy(() => MatchParticipantCreateOrConnectWithoutMatchInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MatchParticipantCreateManyMatchInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema), z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MatchParticipantUncheckedCreateNestedManyWithoutMatchInputObjectSchema: z.ZodType<Prisma.MatchParticipantUncheckedCreateNestedManyWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantUncheckedCreateNestedManyWithoutMatchInput>;
export const MatchParticipantUncheckedCreateNestedManyWithoutMatchInputObjectZodSchema = makeSchema();
