import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageCreateManySolve_4InputObjectSchema as TopAverageCreateManySolve_4InputObjectSchema } from './TopAverageCreateManySolve_4Input.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TopAverageCreateManySolve_4InputObjectSchema), z.lazy(() => TopAverageCreateManySolve_4InputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TopAverageCreateManySolve_4InputEnvelopeObjectSchema: z.ZodType<Prisma.TopAverageCreateManySolve_4InputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCreateManySolve_4InputEnvelope>;
export const TopAverageCreateManySolve_4InputEnvelopeObjectZodSchema = makeSchema();
