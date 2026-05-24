import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileViewIncludeObjectSchema as ProfileViewIncludeObjectSchema } from './objects/ProfileViewInclude.schema';
import { ProfileViewOrderByWithRelationInputObjectSchema as ProfileViewOrderByWithRelationInputObjectSchema } from './objects/ProfileViewOrderByWithRelationInput.schema';
import { ProfileViewWhereInputObjectSchema as ProfileViewWhereInputObjectSchema } from './objects/ProfileViewWhereInput.schema';
import { ProfileViewWhereUniqueInputObjectSchema as ProfileViewWhereUniqueInputObjectSchema } from './objects/ProfileViewWhereUniqueInput.schema';
import { ProfileViewScalarFieldEnumSchema } from './enums/ProfileViewScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProfileViewFindManySelectSchema: z.ZodType<Prisma.ProfileViewSelect> = z.object({
    id: z.boolean().optional(),
    viewer_id: z.boolean().optional(),
    profile_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    profile_user_id: z.boolean().optional(),
    profile: z.boolean().optional(),
    profile_user: z.boolean().optional(),
    viewer: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProfileViewSelect>;

export const ProfileViewFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    viewer_id: z.boolean().optional(),
    profile_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    profile_user_id: z.boolean().optional(),
    profile: z.boolean().optional(),
    profile_user: z.boolean().optional(),
    viewer: z.boolean().optional()
  }).strict();

export const ProfileViewFindManySchema: z.ZodType<Prisma.ProfileViewFindManyArgs> = z.object({ select: ProfileViewFindManySelectSchema.optional(), include: z.lazy(() => ProfileViewIncludeObjectSchema.optional()), orderBy: z.union([ProfileViewOrderByWithRelationInputObjectSchema, ProfileViewOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProfileViewWhereInputObjectSchema.optional(), cursor: ProfileViewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProfileViewScalarFieldEnumSchema, ProfileViewScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProfileViewFindManyArgs>;

export const ProfileViewFindManyZodSchema = z.object({ select: ProfileViewFindManySelectSchema.optional(), include: z.lazy(() => ProfileViewIncludeObjectSchema.optional()), orderBy: z.union([ProfileViewOrderByWithRelationInputObjectSchema, ProfileViewOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProfileViewWhereInputObjectSchema.optional(), cursor: ProfileViewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProfileViewScalarFieldEnumSchema, ProfileViewScalarFieldEnumSchema.array()]).optional() }).strict();