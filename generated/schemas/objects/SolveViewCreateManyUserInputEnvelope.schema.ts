import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewCreateManyUserInputObjectSchema as SolveViewCreateManyUserInputObjectSchema } from './SolveViewCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SolveViewCreateManyUserInputObjectSchema), z.lazy(() => SolveViewCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SolveViewCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.SolveViewCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewCreateManyUserInputEnvelope>;
export const SolveViewCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
