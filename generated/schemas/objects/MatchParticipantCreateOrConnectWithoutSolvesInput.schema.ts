import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantWhereUniqueInputObjectSchema as MatchParticipantWhereUniqueInputObjectSchema } from './MatchParticipantWhereUniqueInput.schema';
import { MatchParticipantCreateWithoutSolvesInputObjectSchema as MatchParticipantCreateWithoutSolvesInputObjectSchema } from './MatchParticipantCreateWithoutSolvesInput.schema';
import { MatchParticipantUncheckedCreateWithoutSolvesInputObjectSchema as MatchParticipantUncheckedCreateWithoutSolvesInputObjectSchema } from './MatchParticipantUncheckedCreateWithoutSolvesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MatchParticipantCreateWithoutSolvesInputObjectSchema), z.lazy(() => MatchParticipantUncheckedCreateWithoutSolvesInputObjectSchema)])
}).strict();
export const MatchParticipantCreateOrConnectWithoutSolvesInputObjectSchema: z.ZodType<Prisma.MatchParticipantCreateOrConnectWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantCreateOrConnectWithoutSolvesInput>;
export const MatchParticipantCreateOrConnectWithoutSolvesInputObjectZodSchema = makeSchema();
