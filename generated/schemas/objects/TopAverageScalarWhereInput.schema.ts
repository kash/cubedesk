import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const topaveragescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TopAverageScalarWhereInputObjectSchema), z.lazy(() => TopAverageScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TopAverageScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TopAverageScalarWhereInputObjectSchema), z.lazy(() => TopAverageScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  time: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  cube_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  solve_1_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  solve_2_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  solve_3_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  solve_4_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  solve_5_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TopAverageScalarWhereInputObjectSchema: z.ZodType<Prisma.TopAverageScalarWhereInput> = topaveragescalarwhereinputSchema as unknown as z.ZodType<Prisma.TopAverageScalarWhereInput>;
export const TopAverageScalarWhereInputObjectZodSchema = topaveragescalarwhereinputSchema;
