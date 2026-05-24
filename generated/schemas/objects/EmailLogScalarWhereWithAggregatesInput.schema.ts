import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const emaillogscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => EmailLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EmailLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EmailLogScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EmailLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EmailLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  subject: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  template: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  vars: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const EmailLogScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.EmailLogScalarWhereWithAggregatesInput> = emaillogscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.EmailLogScalarWhereWithAggregatesInput>;
export const EmailLogScalarWhereWithAggregatesInputObjectZodSchema = emaillogscalarwherewithaggregatesinputSchema;
