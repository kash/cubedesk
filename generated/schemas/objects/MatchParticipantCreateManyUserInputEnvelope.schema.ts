import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantCreateManyUserInputObjectSchema as MatchParticipantCreateManyUserInputObjectSchema } from './MatchParticipantCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MatchParticipantCreateManyUserInputObjectSchema), z.lazy(() => MatchParticipantCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MatchParticipantCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.MatchParticipantCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantCreateManyUserInputEnvelope>;
export const MatchParticipantCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
