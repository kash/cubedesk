import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema';
import { MatchCreateWithoutParticipantsInputObjectSchema as MatchCreateWithoutParticipantsInputObjectSchema } from './MatchCreateWithoutParticipantsInput.schema';
import { MatchUncheckedCreateWithoutParticipantsInputObjectSchema as MatchUncheckedCreateWithoutParticipantsInputObjectSchema } from './MatchUncheckedCreateWithoutParticipantsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MatchCreateWithoutParticipantsInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutParticipantsInputObjectSchema)])
}).strict();
export const MatchCreateOrConnectWithoutParticipantsInputObjectSchema: z.ZodType<Prisma.MatchCreateOrConnectWithoutParticipantsInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchCreateOrConnectWithoutParticipantsInput>;
export const MatchCreateOrConnectWithoutParticipantsInputObjectZodSchema = makeSchema();
