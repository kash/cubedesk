import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewCreateManyViewerInputObjectSchema as SolveViewCreateManyViewerInputObjectSchema } from './SolveViewCreateManyViewerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SolveViewCreateManyViewerInputObjectSchema), z.lazy(() => SolveViewCreateManyViewerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SolveViewCreateManyViewerInputEnvelopeObjectSchema: z.ZodType<Prisma.SolveViewCreateManyViewerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewCreateManyViewerInputEnvelope>;
export const SolveViewCreateManyViewerInputEnvelopeObjectZodSchema = makeSchema();
