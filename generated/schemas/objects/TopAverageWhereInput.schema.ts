import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { SolveScalarRelationFilterObjectSchema as SolveScalarRelationFilterObjectSchema } from './SolveScalarRelationFilter.schema';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const topaveragewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TopAverageWhereInputObjectSchema), z.lazy(() => TopAverageWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TopAverageWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TopAverageWhereInputObjectSchema), z.lazy(() => TopAverageWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  time: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  cube_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  solve_1_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  solve_2_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  solve_3_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  solve_4_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  solve_5_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  solve_1: z.union([z.lazy(() => SolveScalarRelationFilterObjectSchema), z.lazy(() => SolveWhereInputObjectSchema)]).optional(),
  solve_2: z.union([z.lazy(() => SolveScalarRelationFilterObjectSchema), z.lazy(() => SolveWhereInputObjectSchema)]).optional(),
  solve_3: z.union([z.lazy(() => SolveScalarRelationFilterObjectSchema), z.lazy(() => SolveWhereInputObjectSchema)]).optional(),
  solve_4: z.union([z.lazy(() => SolveScalarRelationFilterObjectSchema), z.lazy(() => SolveWhereInputObjectSchema)]).optional(),
  solve_5: z.union([z.lazy(() => SolveScalarRelationFilterObjectSchema), z.lazy(() => SolveWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const TopAverageWhereInputObjectSchema: z.ZodType<Prisma.TopAverageWhereInput> = topaveragewhereinputSchema as unknown as z.ZodType<Prisma.TopAverageWhereInput>;
export const TopAverageWhereInputObjectZodSchema = topaveragewhereinputSchema;
