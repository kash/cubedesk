import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BadgeListRelationFilterObjectSchema as BadgeListRelationFilterObjectSchema } from './BadgeListRelationFilter.schema';
import { UserAccountNullableScalarRelationFilterObjectSchema as UserAccountNullableScalarRelationFilterObjectSchema } from './UserAccountNullableScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const badgetypewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BadgeTypeWhereInputObjectSchema), z.lazy(() => BadgeTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BadgeTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BadgeTypeWhereInputObjectSchema), z.lazy(() => BadgeTypeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  priority: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  color: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_by_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  badges: z.lazy(() => BadgeListRelationFilterObjectSchema).optional(),
  created_by: z.union([z.lazy(() => UserAccountNullableScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const BadgeTypeWhereInputObjectSchema: z.ZodType<Prisma.BadgeTypeWhereInput> = badgetypewhereinputSchema as unknown as z.ZodType<Prisma.BadgeTypeWhereInput>;
export const BadgeTypeWhereInputObjectZodSchema = badgetypewhereinputSchema;
