import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageCreateManySolve_3InputObjectSchema as TopAverageCreateManySolve_3InputObjectSchema } from './TopAverageCreateManySolve_3Input.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TopAverageCreateManySolve_3InputObjectSchema), z.lazy(() => TopAverageCreateManySolve_3InputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TopAverageCreateManySolve_3InputEnvelopeObjectSchema: z.ZodType<Prisma.TopAverageCreateManySolve_3InputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCreateManySolve_3InputEnvelope>;
export const TopAverageCreateManySolve_3InputEnvelopeObjectZodSchema = makeSchema();
