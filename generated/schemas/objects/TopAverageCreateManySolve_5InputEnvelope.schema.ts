import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageCreateManySolve_5InputObjectSchema as TopAverageCreateManySolve_5InputObjectSchema } from './TopAverageCreateManySolve_5Input.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TopAverageCreateManySolve_5InputObjectSchema), z.lazy(() => TopAverageCreateManySolve_5InputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TopAverageCreateManySolve_5InputEnvelopeObjectSchema: z.ZodType<Prisma.TopAverageCreateManySolve_5InputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCreateManySolve_5InputEnvelope>;
export const TopAverageCreateManySolve_5InputEnvelopeObjectZodSchema = makeSchema();
