import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { EloRatingNullableScalarRelationFilterObjectSchema as EloRatingNullableScalarRelationFilterObjectSchema } from './EloRatingNullableScalarRelationFilter.schema';
import { EloRatingWhereInputObjectSchema as EloRatingWhereInputObjectSchema } from './EloRatingWhereInput.schema';
import { ImageNullableScalarRelationFilterObjectSchema as ImageNullableScalarRelationFilterObjectSchema } from './ImageNullableScalarRelationFilter.schema';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './ImageWhereInput.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { ProfileViewListRelationFilterObjectSchema as ProfileViewListRelationFilterObjectSchema } from './ProfileViewListRelationFilter.schema'

const profilewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProfileWhereInputObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProfileWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProfileWhereInputObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  header_image_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  pfp_image_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  bio: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  favorite_event: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  main_three_cube: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  three_goal: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  three_method: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  reddit_link: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  twitch_link: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  youtube_link: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  twitter_link: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  discord_id: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  show_discord_message_button: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  elo_rating: z.union([z.lazy(() => EloRatingNullableScalarRelationFilterObjectSchema), z.lazy(() => EloRatingWhereInputObjectSchema)]).optional(),
  header_image: z.union([z.lazy(() => ImageNullableScalarRelationFilterObjectSchema), z.lazy(() => ImageWhereInputObjectSchema)]).optional(),
  pfp_image: z.union([z.lazy(() => ImageNullableScalarRelationFilterObjectSchema), z.lazy(() => ImageWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  views: z.lazy(() => ProfileViewListRelationFilterObjectSchema).optional()
}).strict();
export const ProfileWhereInputObjectSchema: z.ZodType<Prisma.ProfileWhereInput> = profilewhereinputSchema as unknown as z.ZodType<Prisma.ProfileWhereInput>;
export const ProfileWhereInputObjectZodSchema = profilewhereinputSchema;
