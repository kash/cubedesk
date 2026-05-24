import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AlgorithmOverrideCreateManyUserInputObjectSchema as AlgorithmOverrideCreateManyUserInputObjectSchema } from './AlgorithmOverrideCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AlgorithmOverrideCreateManyUserInputObjectSchema), z.lazy(() => AlgorithmOverrideCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AlgorithmOverrideCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.AlgorithmOverrideCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideCreateManyUserInputEnvelope>;
export const AlgorithmOverrideCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
