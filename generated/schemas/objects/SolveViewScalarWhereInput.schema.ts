import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const solveviewscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SolveViewScalarWhereInputObjectSchema), z.lazy(() => SolveViewScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SolveViewScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SolveViewScalarWhereInputObjectSchema), z.lazy(() => SolveViewScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  solve_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  viewer_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const SolveViewScalarWhereInputObjectSchema: z.ZodType<Prisma.SolveViewScalarWhereInput> = solveviewscalarwhereinputSchema as unknown as z.ZodType<Prisma.SolveViewScalarWhereInput>;
export const SolveViewScalarWhereInputObjectZodSchema = solveviewscalarwhereinputSchema;
