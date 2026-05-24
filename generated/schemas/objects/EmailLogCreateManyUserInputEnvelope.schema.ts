import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EmailLogCreateManyUserInputObjectSchema as EmailLogCreateManyUserInputObjectSchema } from './EmailLogCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => EmailLogCreateManyUserInputObjectSchema), z.lazy(() => EmailLogCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const EmailLogCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.EmailLogCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.EmailLogCreateManyUserInputEnvelope>;
export const EmailLogCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
