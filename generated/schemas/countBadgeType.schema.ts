import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeTypeOrderByWithRelationInputObjectSchema as BadgeTypeOrderByWithRelationInputObjectSchema } from './objects/BadgeTypeOrderByWithRelationInput.schema';
import { BadgeTypeWhereInputObjectSchema as BadgeTypeWhereInputObjectSchema } from './objects/BadgeTypeWhereInput.schema';
import { BadgeTypeWhereUniqueInputObjectSchema as BadgeTypeWhereUniqueInputObjectSchema } from './objects/BadgeTypeWhereUniqueInput.schema';
import { BadgeTypeCountAggregateInputObjectSchema as BadgeTypeCountAggregateInputObjectSchema } from './objects/BadgeTypeCountAggregateInput.schema';

export const BadgeTypeCountSchema: z.ZodType<Prisma.BadgeTypeCountArgs> = z.object({ orderBy: z.union([BadgeTypeOrderByWithRelationInputObjectSchema, BadgeTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BadgeTypeWhereInputObjectSchema.optional(), cursor: BadgeTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BadgeTypeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BadgeTypeCountArgs>;

export const BadgeTypeCountZodSchema = z.object({ orderBy: z.union([BadgeTypeOrderByWithRelationInputObjectSchema, BadgeTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BadgeTypeWhereInputObjectSchema.optional(), cursor: BadgeTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BadgeTypeCountAggregateInputObjectSchema ]).optional() }).strict();