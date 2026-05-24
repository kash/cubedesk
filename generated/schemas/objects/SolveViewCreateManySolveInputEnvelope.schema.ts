import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewCreateManySolveInputObjectSchema as SolveViewCreateManySolveInputObjectSchema } from './SolveViewCreateManySolveInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SolveViewCreateManySolveInputObjectSchema), z.lazy(() => SolveViewCreateManySolveInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SolveViewCreateManySolveInputEnvelopeObjectSchema: z.ZodType<Prisma.SolveViewCreateManySolveInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewCreateManySolveInputEnvelope>;
export const SolveViewCreateManySolveInputEnvelopeObjectZodSchema = makeSchema();
