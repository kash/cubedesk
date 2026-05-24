import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ProfileScalarRelationFilterObjectSchema as ProfileScalarRelationFilterObjectSchema } from './ProfileScalarRelationFilter.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountNullableScalarRelationFilterObjectSchema as UserAccountNullableScalarRelationFilterObjectSchema } from './UserAccountNullableScalarRelationFilter.schema'

const profileviewwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProfileViewWhereInputObjectSchema), z.lazy(() => ProfileViewWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProfileViewWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProfileViewWhereInputObjectSchema), z.lazy(() => ProfileViewWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  viewer_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  profile_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  profile_user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  profile: z.union([z.lazy(() => ProfileScalarRelationFilterObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema)]).optional(),
  profile_user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  viewer: z.union([z.lazy(() => UserAccountNullableScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const ProfileViewWhereInputObjectSchema: z.ZodType<Prisma.ProfileViewWhereInput> = profileviewwhereinputSchema as unknown as z.ZodType<Prisma.ProfileViewWhereInput>;
export const ProfileViewWhereInputObjectZodSchema = profileviewwhereinputSchema;
