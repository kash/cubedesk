import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const topsolvescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TopSolveScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TopSolveScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TopSolveScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TopSolveScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TopSolveScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  time: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  solve_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  cube_type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TopSolveScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TopSolveScalarWhereWithAggregatesInput> = topsolvescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TopSolveScalarWhereWithAggregatesInput>;
export const TopSolveScalarWhereWithAggregatesInputObjectZodSchema = topsolvescalarwherewithaggregatesinputSchema;
