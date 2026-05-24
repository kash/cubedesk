import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  reason: z.boolean().optional(),
  created_by_id: z.boolean().optional(),
  reported_user_id: z.boolean().optional(),
  resolved_at: z.boolean().optional(),
  created_by: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  reported_user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const ReportSelectObjectSchema: z.ZodType<Prisma.ReportSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReportSelect>;
export const ReportSelectObjectZodSchema = makeSchema();
