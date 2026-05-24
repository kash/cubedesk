import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  reason: z.literal(true).optional(),
  created_by_id: z.literal(true).optional(),
  reported_user_id: z.literal(true).optional(),
  resolved_at: z.literal(true).optional()
}).strict();
export const ReportMinAggregateInputObjectSchema: z.ZodType<Prisma.ReportMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportMinAggregateInputType>;
export const ReportMinAggregateInputObjectZodSchema = makeSchema();
