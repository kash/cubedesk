import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  reason: z.string().optional().nullable(),
  created_by_id: z.string(),
  resolved_at: z.coerce.date().optional().nullable()
}).strict();
export const ReportUncheckedCreateWithoutReported_userInputObjectSchema: z.ZodType<Prisma.ReportUncheckedCreateWithoutReported_userInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUncheckedCreateWithoutReported_userInput>;
export const ReportUncheckedCreateWithoutReported_userInputObjectZodSchema = makeSchema();
