import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const solvemethodstepscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SolveMethodStepScalarWhereInputObjectSchema), z.lazy(() => SolveMethodStepScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SolveMethodStepScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SolveMethodStepScalarWhereInputObjectSchema), z.lazy(() => SolveMethodStepScalarWhereInputObjectSchema).array()]).optional(),
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
  pll_case_key: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const SolveMethodStepScalarWhereInputObjectSchema: z.ZodType<Prisma.SolveMethodStepScalarWhereInput> = solvemethodstepscalarwhereinputSchema as unknown as z.ZodType<Prisma.SolveMethodStepScalarWhereInput>;
export const SolveMethodStepScalarWhereInputObjectZodSchema = solvemethodstepscalarwhereinputSchema;
