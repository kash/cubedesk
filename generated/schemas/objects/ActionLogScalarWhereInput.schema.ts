import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const actionlogscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ActionLogScalarWhereInputObjectSchema), z.lazy(() => ActionLogScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ActionLogScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ActionLogScalarWhereInputObjectSchema), z.lazy(() => ActionLogScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  action_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  action_details: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ActionLogScalarWhereInputObjectSchema: z.ZodType<Prisma.ActionLogScalarWhereInput> = actionlogscalarwhereinputSchema as unknown as z.ZodType<Prisma.ActionLogScalarWhereInput>;
export const ActionLogScalarWhereInputObjectZodSchema = actionlogscalarwhereinputSchema;
