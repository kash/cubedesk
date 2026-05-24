import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { BigIntNullableFilterObjectSchema as BigIntNullableFilterObjectSchema } from './BigIntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const demosolvewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DemoSolveWhereInputObjectSchema), z.lazy(() => DemoSolveWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DemoSolveWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DemoSolveWhereInputObjectSchema), z.lazy(() => DemoSolveWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  demo_session_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  ip_address: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  raw_time: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  cube_type: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  scramble: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  started_at: z.union([z.lazy(() => BigIntNullableFilterObjectSchema), z.bigint()]).optional().nullable(),
  ended_at: z.union([z.lazy(() => BigIntNullableFilterObjectSchema), z.bigint()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DemoSolveWhereInputObjectSchema: z.ZodType<Prisma.DemoSolveWhereInput> = demosolvewhereinputSchema as unknown as z.ZodType<Prisma.DemoSolveWhereInput>;
export const DemoSolveWhereInputObjectZodSchema = demosolvewhereinputSchema;
