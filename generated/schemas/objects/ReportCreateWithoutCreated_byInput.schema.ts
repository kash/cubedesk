import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutReports_forInputObjectSchema as UserAccountCreateNestedOneWithoutReports_forInputObjectSchema } from './UserAccountCreateNestedOneWithoutReports_forInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  reason: z.string().optional().nullable(),
  resolved_at: z.coerce.date().optional().nullable(),
  reported_user: z.lazy(() => UserAccountCreateNestedOneWithoutReports_forInputObjectSchema)
}).strict();
export const ReportCreateWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.ReportCreateWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateWithoutCreated_byInput>;
export const ReportCreateWithoutCreated_byInputObjectZodSchema = makeSchema();
