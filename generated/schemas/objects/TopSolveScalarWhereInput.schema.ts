import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const topsolvescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TopSolveScalarWhereInputObjectSchema), z.lazy(() => TopSolveScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TopSolveScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TopSolveScalarWhereInputObjectSchema), z.lazy(() => TopSolveScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  time: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  solve_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  cube_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TopSolveScalarWhereInputObjectSchema: z.ZodType<Prisma.TopSolveScalarWhereInput> = topsolvescalarwhereinputSchema as unknown as z.ZodType<Prisma.TopSolveScalarWhereInput>;
export const TopSolveScalarWhereInputObjectZodSchema = topsolvescalarwhereinputSchema;
