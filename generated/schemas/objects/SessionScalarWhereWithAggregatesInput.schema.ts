import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const sessionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => SessionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SessionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SessionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SessionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SessionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  order: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const SessionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> = sessionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput>;
export const SessionScalarWhereWithAggregatesInputObjectZodSchema = sessionscalarwherewithaggregatesinputSchema;
