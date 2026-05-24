import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantWhereInputObjectSchema as MatchParticipantWhereInputObjectSchema } from './MatchParticipantWhereInput.schema';
import { MatchParticipantUpdateWithoutSolvesInputObjectSchema as MatchParticipantUpdateWithoutSolvesInputObjectSchema } from './MatchParticipantUpdateWithoutSolvesInput.schema';
import { MatchParticipantUncheckedUpdateWithoutSolvesInputObjectSchema as MatchParticipantUncheckedUpdateWithoutSolvesInputObjectSchema } from './MatchParticipantUncheckedUpdateWithoutSolvesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchParticipantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MatchParticipantUpdateWithoutSolvesInputObjectSchema), z.lazy(() => MatchParticipantUncheckedUpdateWithoutSolvesInputObjectSchema)])
}).strict();
export const MatchParticipantUpdateToOneWithWhereWithoutSolvesInputObjectSchema: z.ZodType<Prisma.MatchParticipantUpdateToOneWithWhereWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantUpdateToOneWithWhereWithoutSolvesInput>;
export const MatchParticipantUpdateToOneWithWhereWithoutSolvesInputObjectZodSchema = makeSchema();
