import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutReports_createdInputObjectSchema as UserAccountCreateNestedOneWithoutReports_createdInputObjectSchema } from './UserAccountCreateNestedOneWithoutReports_createdInput.schema';
import { UserAccountCreateNestedOneWithoutReports_forInputObjectSchema as UserAccountCreateNestedOneWithoutReports_forInputObjectSchema } from './UserAccountCreateNestedOneWithoutReports_forInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  reason: z.string().optional().nullable(),
  resolved_at: z.coerce.date().optional().nullable(),
  created_by: z.lazy(() => UserAccountCreateNestedOneWithoutReports_createdInputObjectSchema),
  reported_user: z.lazy(() => UserAccountCreateNestedOneWithoutReports_forInputObjectSchema)
}).strict();
export const ReportCreateInputObjectSchema: z.ZodType<Prisma.ReportCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateInput>;
export const ReportCreateInputObjectZodSchema = makeSchema();
