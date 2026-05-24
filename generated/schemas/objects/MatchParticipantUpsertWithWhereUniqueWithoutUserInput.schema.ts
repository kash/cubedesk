import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantWhereUniqueInputObjectSchema as MatchParticipantWhereUniqueInputObjectSchema } from './MatchParticipantWhereUniqueInput.schema';
import { MatchParticipantUpdateWithoutUserInputObjectSchema as MatchParticipantUpdateWithoutUserInputObjectSchema } from './MatchParticipantUpdateWithoutUserInput.schema';
import { MatchParticipantUncheckedUpdateWithoutUserInputObjectSchema as MatchParticipantUncheckedUpdateWithoutUserInputObjectSchema } from './MatchParticipantUncheckedUpdateWithoutUserInput.schema';
import { MatchParticipantCreateWithoutUserInputObjectSchema as MatchParticipantCreateWithoutUserInputObjectSchema } from './MatchParticipantCreateWithoutUserInput.schema';
import { MatchParticipantUncheckedCreateWithoutUserInputObjectSchema as MatchParticipantUncheckedCreateWithoutUserInputObjectSchema } from './MatchParticipantUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MatchParticipantUpdateWithoutUserInputObjectSchema), z.lazy(() => MatchParticipantUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => MatchParticipantCreateWithoutUserInputObjectSchema), z.lazy(() => MatchParticipantUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const MatchParticipantUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.MatchParticipantUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantUpsertWithWhereUniqueWithoutUserInput>;
export const MatchParticipantUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
