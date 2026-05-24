import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AdViewCreateManyUserInputObjectSchema as AdViewCreateManyUserInputObjectSchema } from './AdViewCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AdViewCreateManyUserInputObjectSchema), z.lazy(() => AdViewCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AdViewCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.AdViewCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AdViewCreateManyUserInputEnvelope>;
export const AdViewCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
