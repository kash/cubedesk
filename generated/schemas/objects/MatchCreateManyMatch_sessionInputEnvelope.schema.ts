import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchCreateManyMatch_sessionInputObjectSchema as MatchCreateManyMatch_sessionInputObjectSchema } from './MatchCreateManyMatch_sessionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MatchCreateManyMatch_sessionInputObjectSchema), z.lazy(() => MatchCreateManyMatch_sessionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MatchCreateManyMatch_sessionInputEnvelopeObjectSchema: z.ZodType<Prisma.MatchCreateManyMatch_sessionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MatchCreateManyMatch_sessionInputEnvelope>;
export const MatchCreateManyMatch_sessionInputEnvelopeObjectZodSchema = makeSchema();
