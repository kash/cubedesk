import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntegrationCreateManyUserInputObjectSchema as IntegrationCreateManyUserInputObjectSchema } from './IntegrationCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => IntegrationCreateManyUserInputObjectSchema), z.lazy(() => IntegrationCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const IntegrationCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.IntegrationCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationCreateManyUserInputEnvelope>;
export const IntegrationCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
