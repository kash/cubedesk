import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateManyGame_sessionInputObjectSchema as SolveCreateManyGame_sessionInputObjectSchema } from './SolveCreateManyGame_sessionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SolveCreateManyGame_sessionInputObjectSchema), z.lazy(() => SolveCreateManyGame_sessionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SolveCreateManyGame_sessionInputEnvelopeObjectSchema: z.ZodType<Prisma.SolveCreateManyGame_sessionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateManyGame_sessionInputEnvelope>;
export const SolveCreateManyGame_sessionInputEnvelopeObjectZodSchema = makeSchema();
