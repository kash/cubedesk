import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopSolveCreateManySolveInputObjectSchema as TopSolveCreateManySolveInputObjectSchema } from './TopSolveCreateManySolveInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TopSolveCreateManySolveInputObjectSchema), z.lazy(() => TopSolveCreateManySolveInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TopSolveCreateManySolveInputEnvelopeObjectSchema: z.ZodType<Prisma.TopSolveCreateManySolveInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveCreateManySolveInputEnvelope>;
export const TopSolveCreateManySolveInputEnvelopeObjectZodSchema = makeSchema();
