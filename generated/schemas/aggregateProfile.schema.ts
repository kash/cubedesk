import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileOrderByWithRelationInputObjectSchema as ProfileOrderByWithRelationInputObjectSchema } from './objects/ProfileOrderByWithRelationInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './objects/ProfileWhereInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './objects/ProfileWhereUniqueInput.schema';
import { ProfileCountAggregateInputObjectSchema as ProfileCountAggregateInputObjectSchema } from './objects/ProfileCountAggregateInput.schema';
import { ProfileMinAggregateInputObjectSchema as ProfileMinAggregateInputObjectSchema } from './objects/ProfileMinAggregateInput.schema';
import { ProfileMaxAggregateInputObjectSchema as ProfileMaxAggregateInputObjectSchema } from './objects/ProfileMaxAggregateInput.schema';

export const ProfileAggregateSchema: z.ZodType<Prisma.ProfileAggregateArgs> = z.object({ orderBy: z.union([ProfileOrderByWithRelationInputObjectSchema, ProfileOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProfileWhereInputObjectSchema.optional(), cursor: ProfileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ProfileCountAggregateInputObjectSchema ]).optional(), _min: ProfileMinAggregateInputObjectSchema.optional(), _max: ProfileMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProfileAggregateArgs>;

export const ProfileAggregateZodSchema = z.object({ orderBy: z.union([ProfileOrderByWithRelationInputObjectSchema, ProfileOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProfileWhereInputObjectSchema.optional(), cursor: ProfileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ProfileCountAggregateInputObjectSchema ]).optional(), _min: ProfileMinAggregateInputObjectSchema.optional(), _max: ProfileMaxAggregateInputObjectSchema.optional() }).strict();