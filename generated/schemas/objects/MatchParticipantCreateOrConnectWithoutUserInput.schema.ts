import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantWhereUniqueInputObjectSchema as MatchParticipantWhereUniqueInputObjectSchema } from './MatchParticipantWhereUniqueInput.schema';
import { MatchParticipantCreateWithoutUserInputObjectSchema as MatchParticipantCreateWithoutUserInputObjectSchema } from './MatchParticipantCreateWithoutUserInput.schema';
import { MatchParticipantUncheckedCreateWithoutUserInputObjectSchema as MatchParticipantUncheckedCreateWithoutUserInputObjectSchema } from './MatchParticipantUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MatchParticipantCreateWithoutUserInputObjectSchema), z.lazy(() => MatchParticipantUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const MatchParticipantCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.MatchParticipantCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantCreateOrConnectWithoutUserInput>;
export const MatchParticipantCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
