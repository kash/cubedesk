import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  reason: z.string().optional().nullable(),
  reported_user_id: z.string(),
  resolved_at: z.coerce.date().optional().nullable()
}).strict();
export const ReportCreateManyCreated_byInputObjectSchema: z.ZodType<Prisma.ReportCreateManyCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateManyCreated_byInput>;
export const ReportCreateManyCreated_byInputObjectZodSchema = makeSchema();
