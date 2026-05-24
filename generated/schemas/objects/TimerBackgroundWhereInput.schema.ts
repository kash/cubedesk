import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const timerbackgroundwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TimerBackgroundWhereInputObjectSchema), z.lazy(() => TimerBackgroundWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TimerBackgroundWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TimerBackgroundWhereInputObjectSchema), z.lazy(() => TimerBackgroundWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  storage_path: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  hex: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const TimerBackgroundWhereInputObjectSchema: z.ZodType<Prisma.TimerBackgroundWhereInput> = timerbackgroundwhereinputSchema as unknown as z.ZodType<Prisma.TimerBackgroundWhereInput>;
export const TimerBackgroundWhereInputObjectZodSchema = timerbackgroundwhereinputSchema;
