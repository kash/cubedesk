import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionCreateManyUserInputObjectSchema as SessionCreateManyUserInputObjectSchema } from './SessionCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SessionCreateManyUserInputObjectSchema), z.lazy(() => SessionCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SessionCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateManyUserInputEnvelope>;
export const SessionCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
