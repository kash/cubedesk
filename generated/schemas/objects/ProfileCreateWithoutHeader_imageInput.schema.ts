import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloRatingCreateNestedOneWithoutProfileInputObjectSchema as EloRatingCreateNestedOneWithoutProfileInputObjectSchema } from './EloRatingCreateNestedOneWithoutProfileInput.schema';
import { ImageCreateNestedOneWithoutProfile_pfp_imageInputObjectSchema as ImageCreateNestedOneWithoutProfile_pfp_imageInputObjectSchema } from './ImageCreateNestedOneWithoutProfile_pfp_imageInput.schema';
import { UserAccountCreateNestedOneWithoutProfileInputObjectSchema as UserAccountCreateNestedOneWithoutProfileInputObjectSchema } from './UserAccountCreateNestedOneWithoutProfileInput.schema';
import { ProfileViewCreateNestedManyWithoutProfileInputObjectSchema as ProfileViewCreateNestedManyWithoutProfileInputObjectSchema } from './ProfileViewCreateNestedManyWithoutProfileInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  bio: z.string().optional().nullable(),
  favorite_event: z.string().optional().nullable(),
  main_three_cube: z.string().optional().nullable(),
  three_goal: z.string().optional().nullable(),
  three_method: z.string().optional().nullable(),
  reddit_link: z.string().optional().nullable(),
  twitch_link: z.string().optional().nullable(),
  youtube_link: z.string().optional().nullable(),
  twitter_link: z.string().optional().nullable(),
  discord_id: z.string().optional().nullable(),
  show_discord_message_button: z.boolean().optional(),
  elo_rating: z.lazy(() => EloRatingCreateNestedOneWithoutProfileInputObjectSchema).optional(),
  pfp_image: z.lazy(() => ImageCreateNestedOneWithoutProfile_pfp_imageInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutProfileInputObjectSchema),
  views: z.lazy(() => ProfileViewCreateNestedManyWithoutProfileInputObjectSchema).optional()
}).strict();
export const ProfileCreateWithoutHeader_imageInputObjectSchema: z.ZodType<Prisma.ProfileCreateWithoutHeader_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateWithoutHeader_imageInput>;
export const ProfileCreateWithoutHeader_imageInputObjectZodSchema = makeSchema();
