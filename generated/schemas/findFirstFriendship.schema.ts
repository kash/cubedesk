import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FriendshipIncludeObjectSchema as FriendshipIncludeObjectSchema } from './objects/FriendshipInclude.schema';
import { FriendshipOrderByWithRelationInputObjectSchema as FriendshipOrderByWithRelationInputObjectSchema } from './objects/FriendshipOrderByWithRelationInput.schema';
import { FriendshipWhereInputObjectSchema as FriendshipWhereInputObjectSchema } from './objects/FriendshipWhereInput.schema';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './objects/FriendshipWhereUniqueInput.schema';
import { FriendshipScalarFieldEnumSchema } from './enums/FriendshipScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FriendshipFindFirstSelectSchema: z.ZodType<Prisma.FriendshipSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    other_user_id: z.boolean().optional(),
    friendship_request_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    friendship_request: z.boolean().optional(),
    other_user: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.FriendshipSelect>;

export const FriendshipFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    other_user_id: z.boolean().optional(),
    friendship_request_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    friendship_request: z.boolean().optional(),
    other_user: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const FriendshipFindFirstSchema: z.ZodType<Prisma.FriendshipFindFirstArgs> = z.object({ select: FriendshipFindFirstSelectSchema.optional(), include: z.lazy(() => FriendshipIncludeObjectSchema.optional()), orderBy: z.union([FriendshipOrderByWithRelationInputObjectSchema, FriendshipOrderByWithRelationInputObjectSchema.array()]).optional(), where: FriendshipWhereInputObjectSchema.optional(), cursor: FriendshipWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FriendshipScalarFieldEnumSchema, FriendshipScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.FriendshipFindFirstArgs>;

export const FriendshipFindFirstZodSchema = z.object({ select: FriendshipFindFirstSelectSchema.optional(), include: z.lazy(() => FriendshipIncludeObjectSchema.optional()), orderBy: z.union([FriendshipOrderByWithRelationInputObjectSchema, FriendshipOrderByWithRelationInputObjectSchema.array()]).optional(), where: FriendshipWhereInputObjectSchema.optional(), cursor: FriendshipWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FriendshipScalarFieldEnumSchema, FriendshipScalarFieldEnumSchema.array()]).optional() }).strict();