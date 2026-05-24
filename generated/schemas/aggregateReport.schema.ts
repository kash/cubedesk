import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ReportOrderByWithRelationInputObjectSchema as ReportOrderByWithRelationInputObjectSchema } from './objects/ReportOrderByWithRelationInput.schema';
import { ReportWhereInputObjectSchema as ReportWhereInputObjectSchema } from './objects/ReportWhereInput.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './objects/ReportWhereUniqueInput.schema';
import { ReportCountAggregateInputObjectSchema as ReportCountAggregateInputObjectSchema } from './objects/ReportCountAggregateInput.schema';
import { ReportMinAggregateInputObjectSchema as ReportMinAggregateInputObjectSchema } from './objects/ReportMinAggregateInput.schema';
import { ReportMaxAggregateInputObjectSchema as ReportMaxAggregateInputObjectSchema } from './objects/ReportMaxAggregateInput.schema';

export const ReportAggregateSchema: z.ZodType<Prisma.ReportAggregateArgs> = z.object({ orderBy: z.union([ReportOrderByWithRelationInputObjectSchema, ReportOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportWhereInputObjectSchema.optional(), cursor: ReportWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ReportCountAggregateInputObjectSchema ]).optional(), _min: ReportMinAggregateInputObjectSchema.optional(), _max: ReportMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReportAggregateArgs>;

export const ReportAggregateZodSchema = z.object({ orderBy: z.union([ReportOrderByWithRelationInputObjectSchema, ReportOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportWhereInputObjectSchema.optional(), cursor: ReportWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ReportCountAggregateInputObjectSchema ]).optional(), _min: ReportMinAggregateInputObjectSchema.optional(), _max: ReportMaxAggregateInputObjectSchema.optional() }).strict();