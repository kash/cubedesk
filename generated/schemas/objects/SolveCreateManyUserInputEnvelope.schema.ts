import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateManyUserInputObjectSchema as SolveCreateManyUserInputObjectSchema } from './SolveCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SolveCreateManyUserInputObjectSchema), z.lazy(() => SolveCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SolveCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.SolveCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateManyUserInputEnvelope>;
export const SolveCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
