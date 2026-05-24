import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_email: z.boolean().optional(),
  metric_type: z.boolean().optional(),
  metric_value: z.boolean().optional(),
  metric_details: z.boolean().optional(),
  created_at: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const MetricLogSelectObjectSchema: z.ZodType<Prisma.MetricLogSelect> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogSelect>;
export const MetricLogSelectObjectZodSchema = makeSchema();
