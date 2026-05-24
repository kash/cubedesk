import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { BigIntNullableWithAggregatesFilterObjectSchema as BigIntNullableWithAggregatesFilterObjectSchema } from './BigIntNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const demosolvescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DemoSolveScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DemoSolveScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DemoSolveScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DemoSolveScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DemoSolveScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  demo_session_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  ip_address: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  raw_time: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  cube_type: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  scramble: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  started_at: z.union([z.lazy(() => BigIntNullableWithAggregatesFilterObjectSchema), z.bigint()]).optional().nullable(),
  ended_at: z.union([z.lazy(() => BigIntNullableWithAggregatesFilterObjectSchema), z.bigint()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DemoSolveScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DemoSolveScalarWhereWithAggregatesInput> = demosolvescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DemoSolveScalarWhereWithAggregatesInput>;
export const DemoSolveScalarWhereWithAggregatesInputObjectZodSchema = demosolvescalarwherewithaggregatesinputSchema;
