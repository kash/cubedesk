import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FriendshipOrderByWithRelationInputObjectSchema as FriendshipOrderByWithRelationInputObjectSchema } from './objects/FriendshipOrderByWithRelationInput.schema';
import { FriendshipWhereInputObjectSchema as FriendshipWhereInputObjectSchema } from './objects/FriendshipWhereInput.schema';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './objects/FriendshipWhereUniqueInput.schema';
import { FriendshipCountAggregateInputObjectSchema as FriendshipCountAggregateInputObjectSchema } from './objects/FriendshipCountAggregateInput.schema';

export const FriendshipCountSchema: z.ZodType<Prisma.FriendshipCountArgs> = z.object({ orderBy: z.union([FriendshipOrderByWithRelationInputObjectSchema, FriendshipOrderByWithRelationInputObjectSchema.array()]).optional(), where: FriendshipWhereInputObjectSchema.optional(), cursor: FriendshipWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FriendshipCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.FriendshipCountArgs>;

export const FriendshipCountZodSchema = z.object({ orderBy: z.union([FriendshipOrderByWithRelationInputObjectSchema, FriendshipOrderByWithRelationInputObjectSchema.array()]).optional(), where: FriendshipWhereInputObjectSchema.optional(), cursor: FriendshipWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FriendshipCountAggregateInputObjectSchema ]).optional() }).strict();