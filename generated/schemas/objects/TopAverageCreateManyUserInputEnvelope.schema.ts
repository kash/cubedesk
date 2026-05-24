import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageCreateManyUserInputObjectSchema as TopAverageCreateManyUserInputObjectSchema } from './TopAverageCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TopAverageCreateManyUserInputObjectSchema), z.lazy(() => TopAverageCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TopAverageCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.TopAverageCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCreateManyUserInputEnvelope>;
export const TopAverageCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
