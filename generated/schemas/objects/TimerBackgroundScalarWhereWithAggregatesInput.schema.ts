import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const timerbackgroundscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TimerBackgroundScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TimerBackgroundScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TimerBackgroundScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TimerBackgroundScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TimerBackgroundScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  storage_path: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  hex: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TimerBackgroundScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TimerBackgroundScalarWhereWithAggregatesInput> = timerbackgroundscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TimerBackgroundScalarWhereWithAggregatesInput>;
export const TimerBackgroundScalarWhereWithAggregatesInputObjectZodSchema = timerbackgroundscalarwherewithaggregatesinputSchema;
