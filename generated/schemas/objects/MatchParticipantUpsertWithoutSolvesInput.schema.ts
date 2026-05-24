import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantUpdateWithoutSolvesInputObjectSchema as MatchParticipantUpdateWithoutSolvesInputObjectSchema } from './MatchParticipantUpdateWithoutSolvesInput.schema';
import { MatchParticipantUncheckedUpdateWithoutSolvesInputObjectSchema as MatchParticipantUncheckedUpdateWithoutSolvesInputObjectSchema } from './MatchParticipantUncheckedUpdateWithoutSolvesInput.schema';
import { MatchParticipantCreateWithoutSolvesInputObjectSchema as MatchParticipantCreateWithoutSolvesInputObjectSchema } from './MatchParticipantCreateWithoutSolvesInput.schema';
import { MatchParticipantUncheckedCreateWithoutSolvesInputObjectSchema as MatchParticipantUncheckedCreateWithoutSolvesInputObjectSchema } from './MatchParticipantUncheckedCreateWithoutSolvesInput.schema';
import { MatchParticipantWhereInputObjectSchema as MatchParticipantWhereInputObjectSchema } from './MatchParticipantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MatchParticipantUpdateWithoutSolvesInputObjectSchema), z.lazy(() => MatchParticipantUncheckedUpdateWithoutSolvesInputObjectSchema)]),
  create: z.union([z.lazy(() => MatchParticipantCreateWithoutSolvesInputObjectSchema), z.lazy(() => MatchParticipantUncheckedCreateWithoutSolvesInputObjectSchema)]),
  where: z.lazy(() => MatchParticipantWhereInputObjectSchema).optional()
}).strict();
export const MatchParticipantUpsertWithoutSolvesInputObjectSchema: z.ZodType<Prisma.MatchParticipantUpsertWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantUpsertWithoutSolvesInput>;
export const MatchParticipantUpsertWithoutSolvesInputObjectZodSchema = makeSchema();
