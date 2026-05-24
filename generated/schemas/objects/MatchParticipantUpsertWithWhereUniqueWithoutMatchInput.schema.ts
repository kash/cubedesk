import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantWhereUniqueInputObjectSchema as MatchParticipantWhereUniqueInputObjectSchema } from './MatchParticipantWhereUniqueInput.schema';
import { MatchParticipantUpdateWithoutMatchInputObjectSchema as MatchParticipantUpdateWithoutMatchInputObjectSchema } from './MatchParticipantUpdateWithoutMatchInput.schema';
import { MatchParticipantUncheckedUpdateWithoutMatchInputObjectSchema as MatchParticipantUncheckedUpdateWithoutMatchInputObjectSchema } from './MatchParticipantUncheckedUpdateWithoutMatchInput.schema';
import { MatchParticipantCreateWithoutMatchInputObjectSchema as MatchParticipantCreateWithoutMatchInputObjectSchema } from './MatchParticipantCreateWithoutMatchInput.schema';
import { MatchParticipantUncheckedCreateWithoutMatchInputObjectSchema as MatchParticipantUncheckedCreateWithoutMatchInputObjectSchema } from './MatchParticipantUncheckedCreateWithoutMatchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MatchParticipantUpdateWithoutMatchInputObjectSchema), z.lazy(() => MatchParticipantUncheckedUpdateWithoutMatchInputObjectSchema)]),
  create: z.union([z.lazy(() => MatchParticipantCreateWithoutMatchInputObjectSchema), z.lazy(() => MatchParticipantUncheckedCreateWithoutMatchInputObjectSchema)])
}).strict();
export const MatchParticipantUpsertWithWhereUniqueWithoutMatchInputObjectSchema: z.ZodType<Prisma.MatchParticipantUpsertWithWhereUniqueWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantUpsertWithWhereUniqueWithoutMatchInput>;
export const MatchParticipantUpsertWithWhereUniqueWithoutMatchInputObjectZodSchema = makeSchema();
