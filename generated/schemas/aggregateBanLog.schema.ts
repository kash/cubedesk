import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BanLogOrderByWithRelationInputObjectSchema as BanLogOrderByWithRelationInputObjectSchema } from './objects/BanLogOrderByWithRelationInput.schema';
import { BanLogWhereInputObjectSchema as BanLogWhereInputObjectSchema } from './objects/BanLogWhereInput.schema';
import { BanLogWhereUniqueInputObjectSchema as BanLogWhereUniqueInputObjectSchema } from './objects/BanLogWhereUniqueInput.schema';
import { BanLogCountAggregateInputObjectSchema as BanLogCountAggregateInputObjectSchema } from './objects/BanLogCountAggregateInput.schema';
import { BanLogMinAggregateInputObjectSchema as BanLogMinAggregateInputObjectSchema } from './objects/BanLogMinAggregateInput.schema';
import { BanLogMaxAggregateInputObjectSchema as BanLogMaxAggregateInputObjectSchema } from './objects/BanLogMaxAggregateInput.schema';
import { BanLogAvgAggregateInputObjectSchema as BanLogAvgAggregateInputObjectSchema } from './objects/BanLogAvgAggregateInput.schema';
import { BanLogSumAggregateInputObjectSchema as BanLogSumAggregateInputObjectSchema } from './objects/BanLogSumAggregateInput.schema';

export const BanLogAggregateSchema: z.ZodType<Prisma.BanLogAggregateArgs> = z.object({ orderBy: z.union([BanLogOrderByWithRelationInputObjectSchema, BanLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BanLogWhereInputObjectSchema.optional(), cursor: BanLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BanLogCountAggregateInputObjectSchema ]).optional(), _min: BanLogMinAggregateInputObjectSchema.optional(), _max: BanLogMaxAggregateInputObjectSchema.optional(), _avg: BanLogAvgAggregateInputObjectSchema.optional(), _sum: BanLogSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BanLogAggregateArgs>;

export const BanLogAggregateZodSchema = z.object({ orderBy: z.union([BanLogOrderByWithRelationInputObjectSchema, BanLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BanLogWhereInputObjectSchema.optional(), cursor: BanLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BanLogCountAggregateInputObjectSchema ]).optional(), _min: BanLogMinAggregateInputObjectSchema.optional(), _max: BanLogMaxAggregateInputObjectSchema.optional(), _avg: BanLogAvgAggregateInputObjectSchema.optional(), _sum: BanLogSumAggregateInputObjectSchema.optional() }).strict();