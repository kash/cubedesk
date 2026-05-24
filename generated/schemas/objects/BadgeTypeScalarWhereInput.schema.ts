import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const badgetypescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BadgeTypeScalarWhereInputObjectSchema), z.lazy(() => BadgeTypeScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BadgeTypeScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BadgeTypeScalarWhereInputObjectSchema), z.lazy(() => BadgeTypeScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  priority: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  color: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_by_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const BadgeTypeScalarWhereInputObjectSchema: z.ZodType<Prisma.BadgeTypeScalarWhereInput> = badgetypescalarwhereinputSchema as unknown as z.ZodType<Prisma.BadgeTypeScalarWhereInput>;
export const BadgeTypeScalarWhereInputObjectZodSchema = badgetypescalarwhereinputSchema;
