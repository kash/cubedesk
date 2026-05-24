import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloLogOrderByWithRelationInputObjectSchema as EloLogOrderByWithRelationInputObjectSchema } from './objects/EloLogOrderByWithRelationInput.schema';
import { EloLogWhereInputObjectSchema as EloLogWhereInputObjectSchema } from './objects/EloLogWhereInput.schema';
import { EloLogWhereUniqueInputObjectSchema as EloLogWhereUniqueInputObjectSchema } from './objects/EloLogWhereUniqueInput.schema';
import { EloLogCountAggregateInputObjectSchema as EloLogCountAggregateInputObjectSchema } from './objects/EloLogCountAggregateInput.schema';
import { EloLogMinAggregateInputObjectSchema as EloLogMinAggregateInputObjectSchema } from './objects/EloLogMinAggregateInput.schema';
import { EloLogMaxAggregateInputObjectSchema as EloLogMaxAggregateInputObjectSchema } from './objects/EloLogMaxAggregateInput.schema';
import { EloLogAvgAggregateInputObjectSchema as EloLogAvgAggregateInputObjectSchema } from './objects/EloLogAvgAggregateInput.schema';
import { EloLogSumAggregateInputObjectSchema as EloLogSumAggregateInputObjectSchema } from './objects/EloLogSumAggregateInput.schema';

export const EloLogAggregateSchema: z.ZodType<Prisma.EloLogAggregateArgs> = z.object({ orderBy: z.union([EloLogOrderByWithRelationInputObjectSchema, EloLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: EloLogWhereInputObjectSchema.optional(), cursor: EloLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), EloLogCountAggregateInputObjectSchema ]).optional(), _min: EloLogMinAggregateInputObjectSchema.optional(), _max: EloLogMaxAggregateInputObjectSchema.optional(), _avg: EloLogAvgAggregateInputObjectSchema.optional(), _sum: EloLogSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EloLogAggregateArgs>;

export const EloLogAggregateZodSchema = z.object({ orderBy: z.union([EloLogOrderByWithRelationInputObjectSchema, EloLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: EloLogWhereInputObjectSchema.optional(), cursor: EloLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), EloLogCountAggregateInputObjectSchema ]).optional(), _min: EloLogMinAggregateInputObjectSchema.optional(), _max: EloLogMaxAggregateInputObjectSchema.optional(), _avg: EloLogAvgAggregateInputObjectSchema.optional(), _sum: EloLogSumAggregateInputObjectSchema.optional() }).strict();