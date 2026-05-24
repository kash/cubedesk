import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const algorithmoverridescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AlgorithmOverrideScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AlgorithmOverrideScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AlgorithmOverrideScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AlgorithmOverrideScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AlgorithmOverrideScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  rotate: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  cube_key: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  solution: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  name: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  scrambles: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const AlgorithmOverrideScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideScalarWhereWithAggregatesInput> = algorithmoverridescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AlgorithmOverrideScalarWhereWithAggregatesInput>;
export const AlgorithmOverrideScalarWhereWithAggregatesInputObjectZodSchema = algorithmoverridescalarwherewithaggregatesinputSchema;
