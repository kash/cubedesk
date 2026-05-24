import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const customcubetypescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomCubeTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CustomCubeTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomCubeTypeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomCubeTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CustomCubeTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  scramble: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  private: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const CustomCubeTypeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CustomCubeTypeScalarWhereWithAggregatesInput> = customcubetypescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CustomCubeTypeScalarWhereWithAggregatesInput>;
export const CustomCubeTypeScalarWhereWithAggregatesInputObjectZodSchema = customcubetypescalarwherewithaggregatesinputSchema;
