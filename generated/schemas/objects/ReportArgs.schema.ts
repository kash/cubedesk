import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ReportSelectObjectSchema as ReportSelectObjectSchema } from './ReportSelect.schema';
import { ReportIncludeObjectSchema as ReportIncludeObjectSchema } from './ReportInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ReportSelectObjectSchema).optional(),
  include: z.lazy(() => ReportIncludeObjectSchema).optional()
}).strict();
export const ReportArgsObjectSchema = makeSchema();
export const ReportArgsObjectZodSchema = makeSchema();
