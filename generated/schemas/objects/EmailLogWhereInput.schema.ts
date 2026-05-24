import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserAccountNullableScalarRelationFilterObjectSchema as UserAccountNullableScalarRelationFilterObjectSchema } from './UserAccountNullableScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const emaillogwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => EmailLogWhereInputObjectSchema), z.lazy(() => EmailLogWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EmailLogWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EmailLogWhereInputObjectSchema), z.lazy(() => EmailLogWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  subject: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  template: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  vars: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user: z.union([z.lazy(() => UserAccountNullableScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const EmailLogWhereInputObjectSchema: z.ZodType<Prisma.EmailLogWhereInput> = emaillogwhereinputSchema as unknown as z.ZodType<Prisma.EmailLogWhereInput>;
export const EmailLogWhereInputObjectZodSchema = emaillogwhereinputSchema;
