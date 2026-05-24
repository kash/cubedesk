import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const topaveragescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TopAverageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TopAverageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TopAverageScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TopAverageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TopAverageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  time: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  cube_type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  solve_1_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  solve_2_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  solve_3_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  solve_4_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  solve_5_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TopAverageScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TopAverageScalarWhereWithAggregatesInput> = topaveragescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TopAverageScalarWhereWithAggregatesInput>;
export const TopAverageScalarWhereWithAggregatesInputObjectZodSchema = topaveragescalarwherewithaggregatesinputSchema;
