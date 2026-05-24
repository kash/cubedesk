import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MetricLogSelectObjectSchema as MetricLogSelectObjectSchema } from './MetricLogSelect.schema';
import { MetricLogIncludeObjectSchema as MetricLogIncludeObjectSchema } from './MetricLogInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MetricLogSelectObjectSchema).optional(),
  include: z.lazy(() => MetricLogIncludeObjectSchema).optional()
}).strict();
export const MetricLogArgsObjectSchema = makeSchema();
export const MetricLogArgsObjectZodSchema = makeSchema();
