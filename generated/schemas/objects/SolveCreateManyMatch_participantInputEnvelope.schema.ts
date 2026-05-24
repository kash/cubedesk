import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateManyMatch_participantInputObjectSchema as SolveCreateManyMatch_participantInputObjectSchema } from './SolveCreateManyMatch_participantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SolveCreateManyMatch_participantInputObjectSchema), z.lazy(() => SolveCreateManyMatch_participantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SolveCreateManyMatch_participantInputEnvelopeObjectSchema: z.ZodType<Prisma.SolveCreateManyMatch_participantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateManyMatch_participantInputEnvelope>;
export const SolveCreateManyMatch_participantInputEnvelopeObjectZodSchema = makeSchema();
