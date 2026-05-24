import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReportCreateManyReported_userInputObjectSchema as ReportCreateManyReported_userInputObjectSchema } from './ReportCreateManyReported_userInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportCreateManyReported_userInputObjectSchema), z.lazy(() => ReportCreateManyReported_userInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCreateManyReported_userInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCreateManyReported_userInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateManyReported_userInputEnvelope>;
export const ReportCreateManyReported_userInputEnvelopeObjectZodSchema = makeSchema();
