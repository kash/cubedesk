import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ForgotPasswordCreateManyUserInputObjectSchema as ForgotPasswordCreateManyUserInputObjectSchema } from './ForgotPasswordCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ForgotPasswordCreateManyUserInputObjectSchema), z.lazy(() => ForgotPasswordCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ForgotPasswordCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ForgotPasswordCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordCreateManyUserInputEnvelope>;
export const ForgotPasswordCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
