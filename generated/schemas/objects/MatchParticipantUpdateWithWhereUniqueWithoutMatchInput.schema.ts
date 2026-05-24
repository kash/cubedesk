import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantWhereUniqueInputObjectSchema as MatchParticipantWhereUniqueInputObjectSchema } from './MatchParticipantWhereUniqueInput.schema';
import { MatchParticipantUpdateWithoutMatchInputObjectSchema as MatchParticipantUpdateWithoutMatchInputObjectSchema } from './MatchParticipantUpdateWithoutMatchInput.schema';
import { MatchParticipantUncheckedUpdateWithoutMatchInputObjectSchema as MatchParticipantUncheckedUpdateWithoutMatchInputObjectSchema } from './MatchParticipantUncheckedUpdateWithoutMatchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MatchParticipantUpdateWithoutMatchInputObjectSchema), z.lazy(() => MatchParticipantUncheckedUpdateWithoutMatchInputObjectSchema)])
}).strict();
export const MatchParticipantUpdateWithWhereUniqueWithoutMatchInputObjectSchema: z.ZodType<Prisma.MatchParticipantUpdateWithWhereUniqueWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantUpdateWithWhereUniqueWithoutMatchInput>;
export const MatchParticipantUpdateWithWhereUniqueWithoutMatchInputObjectZodSchema = makeSchema();
