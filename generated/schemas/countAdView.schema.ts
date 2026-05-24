import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AdViewOrderByWithRelationInputObjectSchema as AdViewOrderByWithRelationInputObjectSchema } from './objects/AdViewOrderByWithRelationInput.schema';
import { AdViewWhereInputObjectSchema as AdViewWhereInputObjectSchema } from './objects/AdViewWhereInput.schema';
import { AdViewWhereUniqueInputObjectSchema as AdViewWhereUniqueInputObjectSchema } from './objects/AdViewWhereUniqueInput.schema';
import { AdViewCountAggregateInputObjectSchema as AdViewCountAggregateInputObjectSchema } from './objects/AdViewCountAggregateInput.schema';

export const AdViewCountSchema: z.ZodType<Prisma.AdViewCountArgs> = z.object({ orderBy: z.union([AdViewOrderByWithRelationInputObjectSchema, AdViewOrderByWithRelationInputObjectSchema.array()]).optional(), where: AdViewWhereInputObjectSchema.optional(), cursor: AdViewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AdViewCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AdViewCountArgs>;

export const AdViewCountZodSchema = z.object({ orderBy: z.union([AdViewOrderByWithRelationInputObjectSchema, AdViewOrderByWithRelationInputObjectSchema.array()]).optional(), where: AdViewWhereInputObjectSchema.optional(), cursor: AdViewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AdViewCountAggregateInputObjectSchema ]).optional() }).strict();