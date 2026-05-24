import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReportCreateManyCreated_byInputObjectSchema as ReportCreateManyCreated_byInputObjectSchema } from './ReportCreateManyCreated_byInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportCreateManyCreated_byInputObjectSchema), z.lazy(() => ReportCreateManyCreated_byInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCreateManyCreated_byInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCreateManyCreated_byInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateManyCreated_byInputEnvelope>;
export const ReportCreateManyCreated_byInputEnvelopeObjectZodSchema = makeSchema();
