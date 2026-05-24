import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateManySmart_deviceInputObjectSchema as SolveCreateManySmart_deviceInputObjectSchema } from './SolveCreateManySmart_deviceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SolveCreateManySmart_deviceInputObjectSchema), z.lazy(() => SolveCreateManySmart_deviceInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SolveCreateManySmart_deviceInputEnvelopeObjectSchema: z.ZodType<Prisma.SolveCreateManySmart_deviceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateManySmart_deviceInputEnvelope>;
export const SolveCreateManySmart_deviceInputEnvelopeObjectZodSchema = makeSchema();
