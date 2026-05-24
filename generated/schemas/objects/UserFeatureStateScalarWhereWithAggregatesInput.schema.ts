import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const userfeaturestatescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => UserFeatureStateScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserFeatureStateScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserFeatureStateScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserFeatureStateScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserFeatureStateScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  received_welcome_screen: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const UserFeatureStateScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.UserFeatureStateScalarWhereWithAggregatesInput> = userfeaturestatescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.UserFeatureStateScalarWhereWithAggregatesInput>;
export const UserFeatureStateScalarWhereWithAggregatesInputObjectZodSchema = userfeaturestatescalarwherewithaggregatesinputSchema;
