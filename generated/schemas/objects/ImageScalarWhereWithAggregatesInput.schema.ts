import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const imagescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ImageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ImageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ImageScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ImageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ImageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  storage_path: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ImageScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ImageScalarWhereWithAggregatesInput> = imagescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ImageScalarWhereWithAggregatesInput>;
export const ImageScalarWhereWithAggregatesInputObjectZodSchema = imagescalarwherewithaggregatesinputSchema;
