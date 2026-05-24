import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageCreateManySolve_1InputObjectSchema as TopAverageCreateManySolve_1InputObjectSchema } from './TopAverageCreateManySolve_1Input.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TopAverageCreateManySolve_1InputObjectSchema), z.lazy(() => TopAverageCreateManySolve_1InputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TopAverageCreateManySolve_1InputEnvelopeObjectSchema: z.ZodType<Prisma.TopAverageCreateManySolve_1InputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCreateManySolve_1InputEnvelope>;
export const TopAverageCreateManySolve_1InputEnvelopeObjectZodSchema = makeSchema();
