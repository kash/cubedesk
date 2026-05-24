import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const solveviewscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => SolveViewScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SolveViewScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SolveViewScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SolveViewScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SolveViewScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  solve_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  viewer_id: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const SolveViewScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SolveViewScalarWhereWithAggregatesInput> = solveviewscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SolveViewScalarWhereWithAggregatesInput>;
export const SolveViewScalarWhereWithAggregatesInputObjectZodSchema = solveviewscalarwherewithaggregatesinputSchema;
