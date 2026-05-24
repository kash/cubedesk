import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const actionlogscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ActionLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ActionLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ActionLogScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ActionLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ActionLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_email: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  action_type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  action_details: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ActionLogScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ActionLogScalarWhereWithAggregatesInput> = actionlogscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ActionLogScalarWhereWithAggregatesInput>;
export const ActionLogScalarWhereWithAggregatesInputObjectZodSchema = actionlogscalarwherewithaggregatesinputSchema;
