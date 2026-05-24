import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveMethodStepCreateManySolveInputObjectSchema as SolveMethodStepCreateManySolveInputObjectSchema } from './SolveMethodStepCreateManySolveInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SolveMethodStepCreateManySolveInputObjectSchema), z.lazy(() => SolveMethodStepCreateManySolveInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SolveMethodStepCreateManySolveInputEnvelopeObjectSchema: z.ZodType<Prisma.SolveMethodStepCreateManySolveInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SolveMethodStepCreateManySolveInputEnvelope>;
export const SolveMethodStepCreateManySolveInputEnvelopeObjectZodSchema = makeSchema();
