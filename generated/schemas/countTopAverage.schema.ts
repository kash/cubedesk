import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopAverageOrderByWithRelationInputObjectSchema as TopAverageOrderByWithRelationInputObjectSchema } from './objects/TopAverageOrderByWithRelationInput.schema';
import { TopAverageWhereInputObjectSchema as TopAverageWhereInputObjectSchema } from './objects/TopAverageWhereInput.schema';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './objects/TopAverageWhereUniqueInput.schema';
import { TopAverageCountAggregateInputObjectSchema as TopAverageCountAggregateInputObjectSchema } from './objects/TopAverageCountAggregateInput.schema';

export const TopAverageCountSchema: z.ZodType<Prisma.TopAverageCountArgs> = z.object({ orderBy: z.union([TopAverageOrderByWithRelationInputObjectSchema, TopAverageOrderByWithRelationInputObjectSchema.array()]).optional(), where: TopAverageWhereInputObjectSchema.optional(), cursor: TopAverageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TopAverageCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TopAverageCountArgs>;

export const TopAverageCountZodSchema = z.object({ orderBy: z.union([TopAverageOrderByWithRelationInputObjectSchema, TopAverageOrderByWithRelationInputObjectSchema.array()]).optional(), where: TopAverageWhereInputObjectSchema.optional(), cursor: TopAverageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TopAverageCountAggregateInputObjectSchema ]).optional() }).strict();