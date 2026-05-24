import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { SolveScalarRelationFilterObjectSchema as SolveScalarRelationFilterObjectSchema } from './SolveScalarRelationFilter.schema';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const topsolvewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TopSolveWhereInputObjectSchema), z.lazy(() => TopSolveWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TopSolveWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TopSolveWhereInputObjectSchema), z.lazy(() => TopSolveWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  time: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  solve_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  cube_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  solve: z.union([z.lazy(() => SolveScalarRelationFilterObjectSchema), z.lazy(() => SolveWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const TopSolveWhereInputObjectSchema: z.ZodType<Prisma.TopSolveWhereInput> = topsolvewhereinputSchema as unknown as z.ZodType<Prisma.TopSolveWhereInput>;
export const TopSolveWhereInputObjectZodSchema = topsolvewhereinputSchema;
