import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileIncludeObjectSchema as ProfileIncludeObjectSchema } from './objects/ProfileInclude.schema';
import { ProfileOrderByWithRelationInputObjectSchema as ProfileOrderByWithRelationInputObjectSchema } from './objects/ProfileOrderByWithRelationInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './objects/ProfileWhereInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './objects/ProfileWhereUniqueInput.schema';
import { ProfileScalarFieldEnumSchema } from './enums/ProfileScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProfileFindFirstSelectSchema: z.ZodType<Prisma.ProfileSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    header_image_id: z.boolean().optional(),
    pfp_image_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    bio: z.boolean().optional(),
    favorite_event: z.boolean().optional(),
    main_three_cube: z.boolean().optional(),
    three_goal: z.boolean().optional(),
    three_method: z.boolean().optional(),
    reddit_link: z.boolean().optional(),
    twitch_link: z.boolean().optional(),
    youtube_link: z.boolean().optional(),
    twitter_link: z.boolean().optional(),
    discord_id: z.boolean().optional(),
    show_discord_message_button: z.boolean().optional(),
    elo_rating: z.boolean().optional(),
    header_image: z.boolean().optional(),
    pfp_image: z.boolean().optional(),
    user: z.boolean().optional(),
    views: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProfileSelect>;

export const ProfileFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    header_image_id: z.boolean().optional(),
    pfp_image_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    bio: z.boolean().optional(),
    favorite_event: z.boolean().optional(),
    main_three_cube: z.boolean().optional(),
    three_goal: z.boolean().optional(),
    three_method: z.boolean().optional(),
    reddit_link: z.boolean().optional(),
    twitch_link: z.boolean().optional(),
    youtube_link: z.boolean().optional(),
    twitter_link: z.boolean().optional(),
    discord_id: z.boolean().optional(),
    show_discord_message_button: z.boolean().optional(),
    elo_rating: z.boolean().optional(),
    header_image: z.boolean().optional(),
    pfp_image: z.boolean().optional(),
    user: z.boolean().optional(),
    views: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ProfileFindFirstSchema: z.ZodType<Prisma.ProfileFindFirstArgs> = z.object({ select: ProfileFindFirstSelectSchema.optional(), include: z.lazy(() => ProfileIncludeObjectSchema.optional()), orderBy: z.union([ProfileOrderByWithRelationInputObjectSchema, ProfileOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProfileWhereInputObjectSchema.optional(), cursor: ProfileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProfileScalarFieldEnumSchema, ProfileScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProfileFindFirstArgs>;

export const ProfileFindFirstZodSchema = z.object({ select: ProfileFindFirstSelectSchema.optional(), include: z.lazy(() => ProfileIncludeObjectSchema.optional()), orderBy: z.union([ProfileOrderByWithRelationInputObjectSchema, ProfileOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProfileWhereInputObjectSchema.optional(), cursor: ProfileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProfileScalarFieldEnumSchema, ProfileScalarFieldEnumSchema.array()]).optional() }).strict();