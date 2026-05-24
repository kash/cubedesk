import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateManySessionInputObjectSchema as SolveCreateManySessionInputObjectSchema } from './SolveCreateManySessionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SolveCreateManySessionInputObjectSchema), z.lazy(() => SolveCreateManySessionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SolveCreateManySessionInputEnvelopeObjectSchema: z.ZodType<Prisma.SolveCreateManySessionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateManySessionInputEnvelope>;
export const SolveCreateManySessionInputEnvelopeObjectZodSchema = makeSchema();
