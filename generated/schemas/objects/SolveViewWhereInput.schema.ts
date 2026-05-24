import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { SolveScalarRelationFilterObjectSchema as SolveScalarRelationFilterObjectSchema } from './SolveScalarRelationFilter.schema';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountNullableScalarRelationFilterObjectSchema as UserAccountNullableScalarRelationFilterObjectSchema } from './UserAccountNullableScalarRelationFilter.schema'

const solveviewwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SolveViewWhereInputObjectSchema), z.lazy(() => SolveViewWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SolveViewWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SolveViewWhereInputObjectSchema), z.lazy(() => SolveViewWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  solve_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  viewer_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  solve: z.union([z.lazy(() => SolveScalarRelationFilterObjectSchema), z.lazy(() => SolveWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  viewer: z.union([z.lazy(() => UserAccountNullableScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const SolveViewWhereInputObjectSchema: z.ZodType<Prisma.SolveViewWhereInput> = solveviewwhereinputSchema as unknown as z.ZodType<Prisma.SolveViewWhereInput>;
export const SolveViewWhereInputObjectZodSchema = solveviewwhereinputSchema;
