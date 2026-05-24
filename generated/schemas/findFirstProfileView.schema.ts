import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileViewIncludeObjectSchema as ProfileViewIncludeObjectSchema } from './objects/ProfileViewInclude.schema';
import { ProfileViewOrderByWithRelationInputObjectSchema as ProfileViewOrderByWithRelationInputObjectSchema } from './objects/ProfileViewOrderByWithRelationInput.schema';
import { ProfileViewWhereInputObjectSchema as ProfileViewWhereInputObjectSchema } from './objects/ProfileViewWhereInput.schema';
import { ProfileViewWhereUniqueInputObjectSchema as ProfileViewWhereUniqueInputObjectSchema } from './objects/ProfileViewWhereUniqueInput.schema';
import { ProfileViewScalarFieldEnumSchema } from './enums/ProfileViewScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProfileViewFindFirstSelectSchema: z.ZodType<Prisma.ProfileViewSelect> = z.object({
    id: z.boolean().optional(),
    viewer_id: z.boolean().optional(),
    profile_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    profile_user_id: z.boolean().optional(),
    profile: z.boolean().optional(),
    profile_user: z.boolean().optional(),
    viewer: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProfileViewSelect>;

export const ProfileViewFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    viewer_id: z.boolean().optional(),
    profile_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    profile_user_id: z.boolean().optional(),
    profile: z.boolean().optional(),
    profile_user: z.boolean().optional(),
    viewer: z.boolean().optional()
  }).strict();

export const ProfileViewFindFirstSchema: z.ZodType<Prisma.ProfileViewFindFirstArgs> = z.object({ select: ProfileViewFindFirstSelectSchema.optional(), include: z.lazy(() => ProfileViewIncludeObjectSchema.optional()), orderBy: z.union([ProfileViewOrderByWithRelationInputObjectSchema, ProfileViewOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProfileViewWhereInputObjectSchema.optional(), cursor: ProfileViewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProfileViewScalarFieldEnumSchema, ProfileViewScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProfileViewFindFirstArgs>;

export const ProfileViewFindFirstZodSchema = z.object({ select: ProfileViewFindFirstSelectSchema.optional(), include: z.lazy(() => ProfileViewIncludeObjectSchema.optional()), orderBy: z.union([ProfileViewOrderByWithRelationInputObjectSchema, ProfileViewOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProfileViewWhereInputObjectSchema.optional(), cursor: ProfileViewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProfileViewScalarFieldEnumSchema, ProfileViewScalarFieldEnumSchema.array()]).optional() }).strict();