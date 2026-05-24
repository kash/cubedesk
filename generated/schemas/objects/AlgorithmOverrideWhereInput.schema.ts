import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const algorithmoverridewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AlgorithmOverrideWhereInputObjectSchema), z.lazy(() => AlgorithmOverrideWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AlgorithmOverrideWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AlgorithmOverrideWhereInputObjectSchema), z.lazy(() => AlgorithmOverrideWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  rotate: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  cube_key: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  solution: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  scrambles: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const AlgorithmOverrideWhereInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideWhereInput> = algorithmoverridewhereinputSchema as unknown as z.ZodType<Prisma.AlgorithmOverrideWhereInput>;
export const AlgorithmOverrideWhereInputObjectZodSchema = algorithmoverridewhereinputSchema;
