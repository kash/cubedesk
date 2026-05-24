import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const badgescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BadgeScalarWhereInputObjectSchema), z.lazy(() => BadgeScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BadgeScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BadgeScalarWhereInputObjectSchema), z.lazy(() => BadgeScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  badge_type_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const BadgeScalarWhereInputObjectSchema: z.ZodType<Prisma.BadgeScalarWhereInput> = badgescalarwhereinputSchema as unknown as z.ZodType<Prisma.BadgeScalarWhereInput>;
export const BadgeScalarWhereInputObjectZodSchema = badgescalarwhereinputSchema;
