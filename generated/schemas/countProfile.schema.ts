import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileOrderByWithRelationInputObjectSchema as ProfileOrderByWithRelationInputObjectSchema } from './objects/ProfileOrderByWithRelationInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './objects/ProfileWhereInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './objects/ProfileWhereUniqueInput.schema';
import { ProfileCountAggregateInputObjectSchema as ProfileCountAggregateInputObjectSchema } from './objects/ProfileCountAggregateInput.schema';

export const ProfileCountSchema: z.ZodType<Prisma.ProfileCountArgs> = z.object({ orderBy: z.union([ProfileOrderByWithRelationInputObjectSchema, ProfileOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProfileWhereInputObjectSchema.optional(), cursor: ProfileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProfileCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ProfileCountArgs>;

export const ProfileCountZodSchema = z.object({ orderBy: z.union([ProfileOrderByWithRelationInputObjectSchema, ProfileOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProfileWhereInputObjectSchema.optional(), cursor: ProfileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProfileCountAggregateInputObjectSchema ]).optional() }).strict();