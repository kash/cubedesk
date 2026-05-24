import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const badgescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => BadgeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BadgeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BadgeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BadgeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BadgeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  badge_type_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const BadgeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BadgeScalarWhereWithAggregatesInput> = badgescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.BadgeScalarWhereWithAggregatesInput>;
export const BadgeScalarWhereWithAggregatesInputObjectZodSchema = badgescalarwherewithaggregatesinputSchema;
