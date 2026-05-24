import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const algorithmoverridescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AlgorithmOverrideScalarWhereInputObjectSchema), z.lazy(() => AlgorithmOverrideScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AlgorithmOverrideScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AlgorithmOverrideScalarWhereInputObjectSchema), z.lazy(() => AlgorithmOverrideScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  rotate: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  cube_key: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  solution: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  scrambles: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const AlgorithmOverrideScalarWhereInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideScalarWhereInput> = algorithmoverridescalarwhereinputSchema as unknown as z.ZodType<Prisma.AlgorithmOverrideScalarWhereInput>;
export const AlgorithmOverrideScalarWhereInputObjectZodSchema = algorithmoverridescalarwhereinputSchema;
