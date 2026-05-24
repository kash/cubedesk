import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantWhereUniqueInputObjectSchema as MatchParticipantWhereUniqueInputObjectSchema } from './MatchParticipantWhereUniqueInput.schema';
import { MatchParticipantUpdateWithoutUserInputObjectSchema as MatchParticipantUpdateWithoutUserInputObjectSchema } from './MatchParticipantUpdateWithoutUserInput.schema';
import { MatchParticipantUncheckedUpdateWithoutUserInputObjectSchema as MatchParticipantUncheckedUpdateWithoutUserInputObjectSchema } from './MatchParticipantUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MatchParticipantUpdateWithoutUserInputObjectSchema), z.lazy(() => MatchParticipantUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const MatchParticipantUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.MatchParticipantUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantUpdateWithWhereUniqueWithoutUserInput>;
export const MatchParticipantUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
