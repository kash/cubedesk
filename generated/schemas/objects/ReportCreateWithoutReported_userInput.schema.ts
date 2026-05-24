import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutReports_createdInputObjectSchema as UserAccountCreateNestedOneWithoutReports_createdInputObjectSchema } from './UserAccountCreateNestedOneWithoutReports_createdInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  reason: z.string().optional().nullable(),
  resolved_at: z.coerce.date().optional().nullable(),
  created_by: z.lazy(() => UserAccountCreateNestedOneWithoutReports_createdInputObjectSchema)
}).strict();
export const ReportCreateWithoutReported_userInputObjectSchema: z.ZodType<Prisma.ReportCreateWithoutReported_userInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateWithoutReported_userInput>;
export const ReportCreateWithoutReported_userInputObjectZodSchema = makeSchema();
