import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantCreateManyMatchInputObjectSchema as MatchParticipantCreateManyMatchInputObjectSchema } from './MatchParticipantCreateManyMatchInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MatchParticipantCreateManyMatchInputObjectSchema), z.lazy(() => MatchParticipantCreateManyMatchInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MatchParticipantCreateManyMatchInputEnvelopeObjectSchema: z.ZodType<Prisma.MatchParticipantCreateManyMatchInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantCreateManyMatchInputEnvelope>;
export const MatchParticipantCreateManyMatchInputEnvelopeObjectZodSchema = makeSchema();
