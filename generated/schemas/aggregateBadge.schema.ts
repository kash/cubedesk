import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeOrderByWithRelationInputObjectSchema as BadgeOrderByWithRelationInputObjectSchema } from './objects/BadgeOrderByWithRelationInput.schema';
import { BadgeWhereInputObjectSchema as BadgeWhereInputObjectSchema } from './objects/BadgeWhereInput.schema';
import { BadgeWhereUniqueInputObjectSchema as BadgeWhereUniqueInputObjectSchema } from './objects/BadgeWhereUniqueInput.schema';
import { BadgeCountAggregateInputObjectSchema as BadgeCountAggregateInputObjectSchema } from './objects/BadgeCountAggregateInput.schema';
import { BadgeMinAggregateInputObjectSchema as BadgeMinAggregateInputObjectSchema } from './objects/BadgeMinAggregateInput.schema';
import { BadgeMaxAggregateInputObjectSchema as BadgeMaxAggregateInputObjectSchema } from './objects/BadgeMaxAggregateInput.schema';

export const BadgeAggregateSchema: z.ZodType<Prisma.BadgeAggregateArgs> = z.object({ orderBy: z.union([BadgeOrderByWithRelationInputObjectSchema, BadgeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BadgeWhereInputObjectSchema.optional(), cursor: BadgeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BadgeCountAggregateInputObjectSchema ]).optional(), _min: BadgeMinAggregateInputObjectSchema.optional(), _max: BadgeMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BadgeAggregateArgs>;

export const BadgeAggregateZodSchema = z.object({ orderBy: z.union([BadgeOrderByWithRelationInputObjectSchema, BadgeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BadgeWhereInputObjectSchema.optional(), cursor: BadgeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BadgeCountAggregateInputObjectSchema ]).optional(), _min: BadgeMinAggregateInputObjectSchema.optional(), _max: BadgeMaxAggregateInputObjectSchema.optional() }).strict();