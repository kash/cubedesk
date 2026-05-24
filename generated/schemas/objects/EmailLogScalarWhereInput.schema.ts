import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const emaillogscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => EmailLogScalarWhereInputObjectSchema), z.lazy(() => EmailLogScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EmailLogScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EmailLogScalarWhereInputObjectSchema), z.lazy(() => EmailLogScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  subject: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  template: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  vars: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const EmailLogScalarWhereInputObjectSchema: z.ZodType<Prisma.EmailLogScalarWhereInput> = emaillogscalarwhereinputSchema as unknown as z.ZodType<Prisma.EmailLogScalarWhereInput>;
export const EmailLogScalarWhereInputObjectZodSchema = emaillogscalarwhereinputSchema;
