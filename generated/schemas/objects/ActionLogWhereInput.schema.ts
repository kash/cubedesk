import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserAccountNullableScalarRelationFilterObjectSchema as UserAccountNullableScalarRelationFilterObjectSchema } from './UserAccountNullableScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const actionlogwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ActionLogWhereInputObjectSchema), z.lazy(() => ActionLogWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ActionLogWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ActionLogWhereInputObjectSchema), z.lazy(() => ActionLogWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  action_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  action_details: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserAccountNullableScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const ActionLogWhereInputObjectSchema: z.ZodType<Prisma.ActionLogWhereInput> = actionlogwhereinputSchema as unknown as z.ZodType<Prisma.ActionLogWhereInput>;
export const ActionLogWhereInputObjectZodSchema = actionlogwhereinputSchema;
