import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BadgeTypeScalarRelationFilterObjectSchema as BadgeTypeScalarRelationFilterObjectSchema } from './BadgeTypeScalarRelationFilter.schema';
import { BadgeTypeWhereInputObjectSchema as BadgeTypeWhereInputObjectSchema } from './BadgeTypeWhereInput.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const badgewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BadgeWhereInputObjectSchema), z.lazy(() => BadgeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BadgeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BadgeWhereInputObjectSchema), z.lazy(() => BadgeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  badge_type_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  badge_type: z.union([z.lazy(() => BadgeTypeScalarRelationFilterObjectSchema), z.lazy(() => BadgeTypeWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const BadgeWhereInputObjectSchema: z.ZodType<Prisma.BadgeWhereInput> = badgewhereinputSchema as unknown as z.ZodType<Prisma.BadgeWhereInput>;
export const BadgeWhereInputObjectZodSchema = badgewhereinputSchema;
