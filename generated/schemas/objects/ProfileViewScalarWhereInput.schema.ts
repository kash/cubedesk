import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const profileviewscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProfileViewScalarWhereInputObjectSchema), z.lazy(() => ProfileViewScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProfileViewScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProfileViewScalarWhereInputObjectSchema), z.lazy(() => ProfileViewScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  viewer_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  profile_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  profile_user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const ProfileViewScalarWhereInputObjectSchema: z.ZodType<Prisma.ProfileViewScalarWhereInput> = profileviewscalarwhereinputSchema as unknown as z.ZodType<Prisma.ProfileViewScalarWhereInput>;
export const ProfileViewScalarWhereInputObjectZodSchema = profileviewscalarwhereinputSchema;
