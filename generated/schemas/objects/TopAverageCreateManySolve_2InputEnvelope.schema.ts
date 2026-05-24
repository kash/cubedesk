import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageCreateManySolve_2InputObjectSchema as TopAverageCreateManySolve_2InputObjectSchema } from './TopAverageCreateManySolve_2Input.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TopAverageCreateManySolve_2InputObjectSchema), z.lazy(() => TopAverageCreateManySolve_2InputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TopAverageCreateManySolve_2InputEnvelopeObjectSchema: z.ZodType<Prisma.TopAverageCreateManySolve_2InputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCreateManySolve_2InputEnvelope>;
export const TopAverageCreateManySolve_2InputEnvelopeObjectZodSchema = makeSchema();
