import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const banlogwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BanLogWhereInputObjectSchema), z.lazy(() => BanLogWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BanLogWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BanLogWhereInputObjectSchema), z.lazy(() => BanLogWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_by_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  banned_user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  reason: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  active: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  banned_until: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  minutes: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  forever: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  banned_user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  created_by: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const BanLogWhereInputObjectSchema: z.ZodType<Prisma.BanLogWhereInput> = banlogwhereinputSchema as unknown as z.ZodType<Prisma.BanLogWhereInput>;
export const BanLogWhereInputObjectZodSchema = banlogwhereinputSchema;
