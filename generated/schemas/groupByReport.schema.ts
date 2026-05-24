import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ReportWhereInputObjectSchema as ReportWhereInputObjectSchema } from './objects/ReportWhereInput.schema';
import { ReportOrderByWithAggregationInputObjectSchema as ReportOrderByWithAggregationInputObjectSchema } from './objects/ReportOrderByWithAggregationInput.schema';
import { ReportScalarWhereWithAggregatesInputObjectSchema as ReportScalarWhereWithAggregatesInputObjectSchema } from './objects/ReportScalarWhereWithAggregatesInput.schema';
import { ReportScalarFieldEnumSchema } from './enums/ReportScalarFieldEnum.schema';
import { ReportCountAggregateInputObjectSchema as ReportCountAggregateInputObjectSchema } from './objects/ReportCountAggregateInput.schema';
import { ReportMinAggregateInputObjectSchema as ReportMinAggregateInputObjectSchema } from './objects/ReportMinAggregateInput.schema';
import { ReportMaxAggregateInputObjectSchema as ReportMaxAggregateInputObjectSchema } from './objects/ReportMaxAggregateInput.schema';

export const ReportGroupBySchema: z.ZodType<Prisma.ReportGroupByArgs> = z.object({ where: ReportWhereInputObjectSchema.optional(), orderBy: z.union([ReportOrderByWithAggregationInputObjectSchema, ReportOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ReportScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ReportScalarFieldEnumSchema), _count: z.union([ z.literal(true), ReportCountAggregateInputObjectSchema ]).optional(), _min: ReportMinAggregateInputObjectSchema.optional(), _max: ReportMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReportGroupByArgs>;

export const ReportGroupByZodSchema = z.object({ where: ReportWhereInputObjectSchema.optional(), orderBy: z.union([ReportOrderByWithAggregationInputObjectSchema, ReportOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ReportScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ReportScalarFieldEnumSchema), _count: z.union([ z.literal(true), ReportCountAggregateInputObjectSchema ]).optional(), _min: ReportMinAggregateInputObjectSchema.optional(), _max: ReportMaxAggregateInputObjectSchema.optional() }).strict();