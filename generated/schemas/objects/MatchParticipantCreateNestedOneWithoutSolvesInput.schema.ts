import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantCreateWithoutSolvesInputObjectSchema as MatchParticipantCreateWithoutSolvesInputObjectSchema } from './MatchParticipantCreateWithoutSolvesInput.schema';
import { MatchParticipantUncheckedCreateWithoutSolvesInputObjectSchema as MatchParticipantUncheckedCreateWithoutSolvesInputObjectSchema } from './MatchParticipantUncheckedCreateWithoutSolvesInput.schema';
import { MatchParticipantCreateOrConnectWithoutSolvesInputObjectSchema as MatchParticipantCreateOrConnectWithoutSolvesInputObjectSchema } from './MatchParticipantCreateOrConnectWithoutSolvesInput.schema';
import { MatchParticipantWhereUniqueInputObjectSchema as MatchParticipantWhereUniqueInputObjectSchema } from './MatchParticipantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchParticipantCreateWithoutSolvesInputObjectSchema), z.lazy(() => MatchParticipantUncheckedCreateWithoutSolvesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MatchParticipantCreateOrConnectWithoutSolvesInputObjectSchema).optional(),
  connect: z.lazy(() => MatchParticipantWhereUniqueInputObjectSchema).optional()
}).strict();
export const MatchParticipantCreateNestedOneWithoutSolvesInputObjectSchema: z.ZodType<Prisma.MatchParticipantCreateNestedOneWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantCreateNestedOneWithoutSolvesInput>;
export const MatchParticipantCreateNestedOneWithoutSolvesInputObjectZodSchema = makeSchema();
