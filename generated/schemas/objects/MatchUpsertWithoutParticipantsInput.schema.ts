import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchUpdateWithoutParticipantsInputObjectSchema as MatchUpdateWithoutParticipantsInputObjectSchema } from './MatchUpdateWithoutParticipantsInput.schema';
import { MatchUncheckedUpdateWithoutParticipantsInputObjectSchema as MatchUncheckedUpdateWithoutParticipantsInputObjectSchema } from './MatchUncheckedUpdateWithoutParticipantsInput.schema';
import { MatchCreateWithoutParticipantsInputObjectSchema as MatchCreateWithoutParticipantsInputObjectSchema } from './MatchCreateWithoutParticipantsInput.schema';
import { MatchUncheckedCreateWithoutParticipantsInputObjectSchema as MatchUncheckedCreateWithoutParticipantsInputObjectSchema } from './MatchUncheckedCreateWithoutParticipantsInput.schema';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './MatchWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MatchUpdateWithoutParticipantsInputObjectSchema), z.lazy(() => MatchUncheckedUpdateWithoutParticipantsInputObjectSchema)]),
  create: z.union([z.lazy(() => MatchCreateWithoutParticipantsInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutParticipantsInputObjectSchema)]),
  where: z.lazy(() => MatchWhereInputObjectSchema).optional()
}).strict();
export const MatchUpsertWithoutParticipantsInputObjectSchema: z.ZodType<Prisma.MatchUpsertWithoutParticipantsInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpsertWithoutParticipantsInput>;
export const MatchUpsertWithoutParticipantsInputObjectZodSchema = makeSchema();
