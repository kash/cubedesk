import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchCreateManyWinnerInputObjectSchema as MatchCreateManyWinnerInputObjectSchema } from './MatchCreateManyWinnerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MatchCreateManyWinnerInputObjectSchema), z.lazy(() => MatchCreateManyWinnerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MatchCreateManyWinnerInputEnvelopeObjectSchema: z.ZodType<Prisma.MatchCreateManyWinnerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MatchCreateManyWinnerInputEnvelope>;
export const MatchCreateManyWinnerInputEnvelopeObjectZodSchema = makeSchema();
