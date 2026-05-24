import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MetricLogWhereInputObjectSchema as MetricLogWhereInputObjectSchema } from './MetricLogWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => MetricLogWhereInputObjectSchema).optional(),
  some: z.lazy(() => MetricLogWhereInputObjectSchema).optional(),
  none: z.lazy(() => MetricLogWhereInputObjectSchema).optional()
}).strict();
export const MetricLogListRelationFilterObjectSchema: z.ZodType<Prisma.MetricLogListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogListRelationFilter>;
export const MetricLogListRelationFilterObjectZodSchema = makeSchema();
