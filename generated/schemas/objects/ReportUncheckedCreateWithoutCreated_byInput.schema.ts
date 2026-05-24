import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  reason: z.string().optional().nullable(),
  reported_user_id: z.string(),
  resolved_at: z.coerce.date().optional().nullable()
}).strict();
export const ReportUncheckedCreateWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.ReportUncheckedCreateWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUncheckedCreateWithoutCreated_byInput>;
export const ReportUncheckedCreateWithoutCreated_byInputObjectZodSchema = makeSchema();
