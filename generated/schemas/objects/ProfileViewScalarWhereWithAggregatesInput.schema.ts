import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const profileviewscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ProfileViewScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProfileViewScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProfileViewScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProfileViewScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProfileViewScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  viewer_id: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  profile_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  profile_user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const ProfileViewScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ProfileViewScalarWhereWithAggregatesInput> = profileviewscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ProfileViewScalarWhereWithAggregatesInput>;
export const ProfileViewScalarWhereWithAggregatesInputObjectZodSchema = profileviewscalarwherewithaggregatesinputSchema;
