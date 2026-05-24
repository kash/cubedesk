import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileViewOrderByWithRelationInputObjectSchema as ProfileViewOrderByWithRelationInputObjectSchema } from './objects/ProfileViewOrderByWithRelationInput.schema';
import { ProfileViewWhereInputObjectSchema as ProfileViewWhereInputObjectSchema } from './objects/ProfileViewWhereInput.schema';
import { ProfileViewWhereUniqueInputObjectSchema as ProfileViewWhereUniqueInputObjectSchema } from './objects/ProfileViewWhereUniqueInput.schema';
import { ProfileViewCountAggregateInputObjectSchema as ProfileViewCountAggregateInputObjectSchema } from './objects/ProfileViewCountAggregateInput.schema';

export const ProfileViewCountSchema: z.ZodType<Prisma.ProfileViewCountArgs> = z.object({ orderBy: z.union([ProfileViewOrderByWithRelationInputObjectSchema, ProfileViewOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProfileViewWhereInputObjectSchema.optional(), cursor: ProfileViewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProfileViewCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ProfileViewCountArgs>;

export const ProfileViewCountZodSchema = z.object({ orderBy: z.union([ProfileViewOrderByWithRelationInputObjectSchema, ProfileViewOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProfileViewWhereInputObjectSchema.optional(), cursor: ProfileViewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProfileViewCountAggregateInputObjectSchema ]).optional() }).strict();