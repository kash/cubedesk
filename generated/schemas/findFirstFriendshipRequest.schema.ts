import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FriendshipRequestIncludeObjectSchema as FriendshipRequestIncludeObjectSchema } from './objects/FriendshipRequestInclude.schema';
import { FriendshipRequestOrderByWithRelationInputObjectSchema as FriendshipRequestOrderByWithRelationInputObjectSchema } from './objects/FriendshipRequestOrderByWithRelationInput.schema';
import { FriendshipRequestWhereInputObjectSchema as FriendshipRequestWhereInputObjectSchema } from './objects/FriendshipRequestWhereInput.schema';
import { FriendshipRequestWhereUniqueInputObjectSchema as FriendshipRequestWhereUniqueInputObjectSchema } from './objects/FriendshipRequestWhereUniqueInput.schema';
import { FriendshipRequestScalarFieldEnumSchema } from './enums/FriendshipRequestScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FriendshipRequestFindFirstSelectSchema: z.ZodType<Prisma.FriendshipRequestSelect> = z.object({
    id: z.boolean().optional(),
    from_id: z.boolean().optional(),
    to_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    accepted_at: z.boolean().optional(),
    friendship: z.boolean().optional(),
    from_user: z.boolean().optional(),
    to_user: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.FriendshipRequestSelect>;

export const FriendshipRequestFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    from_id: z.boolean().optional(),
    to_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    accepted_at: z.boolean().optional(),
    friendship: z.boolean().optional(),
    from_user: z.boolean().optional(),
    to_user: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const FriendshipRequestFindFirstSchema: z.ZodType<Prisma.FriendshipRequestFindFirstArgs> = z.object({ select: FriendshipRequestFindFirstSelectSchema.optional(), include: z.lazy(() => FriendshipRequestIncludeObjectSchema.optional()), orderBy: z.union([FriendshipRequestOrderByWithRelationInputObjectSchema, FriendshipRequestOrderByWithRelationInputObjectSchema.array()]).optional(), where: FriendshipRequestWhereInputObjectSchema.optional(), cursor: FriendshipRequestWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FriendshipRequestScalarFieldEnumSchema, FriendshipRequestScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.FriendshipRequestFindFirstArgs>;

export const FriendshipRequestFindFirstZodSchema = z.object({ select: FriendshipRequestFindFirstSelectSchema.optional(), include: z.lazy(() => FriendshipRequestIncludeObjectSchema.optional()), orderBy: z.union([FriendshipRequestOrderByWithRelationInputObjectSchema, FriendshipRequestOrderByWithRelationInputObjectSchema.array()]).optional(), where: FriendshipRequestWhereInputObjectSchema.optional(), cursor: FriendshipRequestWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FriendshipRequestScalarFieldEnumSchema, FriendshipRequestScalarFieldEnumSchema.array()]).optional() }).strict();