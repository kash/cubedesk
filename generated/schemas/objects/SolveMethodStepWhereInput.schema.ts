import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { SolveScalarRelationFilterObjectSchema as SolveScalarRelationFilterObjectSchema } from './SolveScalarRelationFilter.schema';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema'

const solvemethodstepwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SolveMethodStepWhereInputObjectSchema), z.lazy(() => SolveMethodStepWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SolveMethodStepWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SolveMethodStepWhereInputObjectSchema), z.lazy(() => SolveMethodStepWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  solve_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  turn_count: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  turns: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  method_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  step_index: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  step_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  total_time: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  tps: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  parent_name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  recognition_time: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  skipped: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  oll_case_key: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  pll_case_key: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  solve: z.union([z.lazy(() => SolveScalarRelationFilterObjectSchema), z.lazy(() => SolveWhereInputObjectSchema)]).optional()
}).strict();
export const SolveMethodStepWhereInputObjectSchema: z.ZodType<Prisma.SolveMethodStepWhereInput> = solvemethodstepwhereinputSchema as unknown as z.ZodType<Prisma.SolveMethodStepWhereInput>;
export const SolveMethodStepWhereInputObjectZodSchema = solvemethodstepwhereinputSchema;
