import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const imagescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ImageScalarWhereInputObjectSchema), z.lazy(() => ImageScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ImageScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ImageScalarWhereInputObjectSchema), z.lazy(() => ImageScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  storage_path: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ImageScalarWhereInputObjectSchema: z.ZodType<Prisma.ImageScalarWhereInput> = imagescalarwhereinputSchema as unknown as z.ZodType<Prisma.ImageScalarWhereInput>;
export const ImageScalarWhereInputObjectZodSchema = imagescalarwhereinputSchema;
