import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  created_by: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  reported_user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const ReportIncludeObjectSchema: z.ZodType<Prisma.ReportInclude> = makeSchema() as unknown as z.ZodType<Prisma.ReportInclude>;
export const ReportIncludeObjectZodSchema = makeSchema();
