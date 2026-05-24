import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeOrderByWithRelationInputObjectSchema as BadgeOrderByWithRelationInputObjectSchema } from './objects/BadgeOrderByWithRelationInput.schema';
import { BadgeWhereInputObjectSchema as BadgeWhereInputObjectSchema } from './objects/BadgeWhereInput.schema';
import { BadgeWhereUniqueInputObjectSchema as BadgeWhereUniqueInputObjectSchema } from './objects/BadgeWhereUniqueInput.schema';
import { BadgeCountAggregateInputObjectSchema as BadgeCountAggregateInputObjectSchema } from './objects/BadgeCountAggregateInput.schema';

export const BadgeCountSchema: z.ZodType<Prisma.BadgeCountArgs> = z.object({ orderBy: z.union([BadgeOrderByWithRelationInputObjectSchema, BadgeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BadgeWhereInputObjectSchema.optional(), cursor: BadgeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BadgeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BadgeCountArgs>;

export const BadgeCountZodSchema = z.object({ orderBy: z.union([BadgeOrderByWithRelationInputObjectSchema, BadgeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BadgeWhereInputObjectSchema.optional(), cursor: BadgeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BadgeCountAggregateInputObjectSchema ]).optional() }).strict();