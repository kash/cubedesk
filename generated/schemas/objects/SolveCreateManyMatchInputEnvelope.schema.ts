import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateManyMatchInputObjectSchema as SolveCreateManyMatchInputObjectSchema } from './SolveCreateManyMatchInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SolveCreateManyMatchInputObjectSchema), z.lazy(() => SolveCreateManyMatchInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SolveCreateManyMatchInputEnvelopeObjectSchema: z.ZodType<Prisma.SolveCreateManyMatchInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateManyMatchInputEnvelope>;
export const SolveCreateManyMatchInputEnvelopeObjectZodSchema = makeSchema();
