import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantWhereUniqueInputObjectSchema as MatchParticipantWhereUniqueInputObjectSchema } from './MatchParticipantWhereUniqueInput.schema';
import { MatchParticipantCreateWithoutMatchInputObjectSchema as MatchParticipantCreateWithoutMatchInputObjectSchema } from './MatchParticipantCreateWithoutMatchInput.schema';
import { MatchParticipantUncheckedCreateWithoutMatchInputObjectSchema as MatchParticipantUncheckedCreateWithoutMatchInputObjectSchema } from './MatchParticipantUncheckedCreateWithoutMatchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MatchParticipantCreateWithoutMatchInputObjectSchema), z.lazy(() => MatchParticipantUncheckedCreateWithoutMatchInputObjectSchema)])
}).strict();
export const MatchParticipantCreateOrConnectWithoutMatchInputObjectSchema: z.ZodType<Prisma.MatchParticipantCreateOrConnectWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantCreateOrConnectWithoutMatchInput>;
export const MatchParticipantCreateOrConnectWithoutMatchInputObjectZodSchema = makeSchema();
