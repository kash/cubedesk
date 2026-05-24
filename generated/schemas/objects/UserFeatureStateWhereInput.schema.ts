import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const userfeaturestatewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserFeatureStateWhereInputObjectSchema), z.lazy(() => UserFeatureStateWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserFeatureStateWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserFeatureStateWhereInputObjectSchema), z.lazy(() => UserFeatureStateWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  received_welcome_screen: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const UserFeatureStateWhereInputObjectSchema: z.ZodType<Prisma.UserFeatureStateWhereInput> = userfeaturestatewhereinputSchema as unknown as z.ZodType<Prisma.UserFeatureStateWhereInput>;
export const UserFeatureStateWhereInputObjectZodSchema = userfeaturestatewhereinputSchema;
