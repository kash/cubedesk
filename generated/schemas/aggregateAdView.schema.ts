import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AdViewOrderByWithRelationInputObjectSchema as AdViewOrderByWithRelationInputObjectSchema } from './objects/AdViewOrderByWithRelationInput.schema';
import { AdViewWhereInputObjectSchema as AdViewWhereInputObjectSchema } from './objects/AdViewWhereInput.schema';
import { AdViewWhereUniqueInputObjectSchema as AdViewWhereUniqueInputObjectSchema } from './objects/AdViewWhereUniqueInput.schema';
import { AdViewCountAggregateInputObjectSchema as AdViewCountAggregateInputObjectSchema } from './objects/AdViewCountAggregateInput.schema';
import { AdViewMinAggregateInputObjectSchema as AdViewMinAggregateInputObjectSchema } from './objects/AdViewMinAggregateInput.schema';
import { AdViewMaxAggregateInputObjectSchema as AdViewMaxAggregateInputObjectSchema } from './objects/AdViewMaxAggregateInput.schema';
import { AdViewAvgAggregateInputObjectSchema as AdViewAvgAggregateInputObjectSchema } from './objects/AdViewAvgAggregateInput.schema';
import { AdViewSumAggregateInputObjectSchema as AdViewSumAggregateInputObjectSchema } from './objects/AdViewSumAggregateInput.schema';

export const AdViewAggregateSchema: z.ZodType<Prisma.AdViewAggregateArgs> = z.object({ orderBy: z.union([AdViewOrderByWithRelationInputObjectSchema, AdViewOrderByWithRelationInputObjectSchema.array()]).optional(), where: AdViewWhereInputObjectSchema.optional(), cursor: AdViewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AdViewCountAggregateInputObjectSchema ]).optional(), _min: AdViewMinAggregateInputObjectSchema.optional(), _max: AdViewMaxAggregateInputObjectSchema.optional(), _avg: AdViewAvgAggregateInputObjectSchema.optional(), _sum: AdViewSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AdViewAggregateArgs>;

export const AdViewAggregateZodSchema = z.object({ orderBy: z.union([AdViewOrderByWithRelationInputObjectSchema, AdViewOrderByWithRelationInputObjectSchema.array()]).optional(), where: AdViewWhereInputObjectSchema.optional(), cursor: AdViewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AdViewCountAggregateInputObjectSchema ]).optional(), _min: AdViewMinAggregateInputObjectSchema.optional(), _max: AdViewMaxAggregateInputObjectSchema.optional(), _avg: AdViewAvgAggregateInputObjectSchema.optional(), _sum: AdViewSumAggregateInputObjectSchema.optional() }).strict();