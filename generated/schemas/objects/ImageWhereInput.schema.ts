import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { ProfileNullableScalarRelationFilterObjectSchema as ProfileNullableScalarRelationFilterObjectSchema } from './ProfileNullableScalarRelationFilter.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

const imagewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ImageWhereInputObjectSchema), z.lazy(() => ImageWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ImageWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ImageWhereInputObjectSchema), z.lazy(() => ImageWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  storage_path: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  profile_header_image: z.union([z.lazy(() => ProfileNullableScalarRelationFilterObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema)]).optional(),
  profile_pfp_image: z.union([z.lazy(() => ProfileNullableScalarRelationFilterObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema)]).optional()
}).strict();
export const ImageWhereInputObjectSchema: z.ZodType<Prisma.ImageWhereInput> = imagewhereinputSchema as unknown as z.ZodType<Prisma.ImageWhereInput>;
export const ImageWhereInputObjectZodSchema = imagewhereinputSchema;
