import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MetricLogOrderByWithRelationInputObjectSchema as MetricLogOrderByWithRelationInputObjectSchema } from './objects/MetricLogOrderByWithRelationInput.schema';
import { MetricLogWhereInputObjectSchema as MetricLogWhereInputObjectSchema } from './objects/MetricLogWhereInput.schema';
import { MetricLogWhereUniqueInputObjectSchema as MetricLogWhereUniqueInputObjectSchema } from './objects/MetricLogWhereUniqueInput.schema';
import { MetricLogCountAggregateInputObjectSchema as MetricLogCountAggregateInputObjectSchema } from './objects/MetricLogCountAggregateInput.schema';

export const MetricLogCountSchema: z.ZodType<Prisma.MetricLogCountArgs> = z.object({ orderBy: z.union([MetricLogOrderByWithRelationInputObjectSchema, MetricLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: MetricLogWhereInputObjectSchema.optional(), cursor: MetricLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MetricLogCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.MetricLogCountArgs>;

export const MetricLogCountZodSchema = z.object({ orderBy: z.union([MetricLogOrderByWithRelationInputObjectSchema, MetricLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: MetricLogWhereInputObjectSchema.optional(), cursor: MetricLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MetricLogCountAggregateInputObjectSchema ]).optional() }).strict();