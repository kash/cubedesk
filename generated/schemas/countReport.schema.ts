import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ReportOrderByWithRelationInputObjectSchema as ReportOrderByWithRelationInputObjectSchema } from './objects/ReportOrderByWithRelationInput.schema';
import { ReportWhereInputObjectSchema as ReportWhereInputObjectSchema } from './objects/ReportWhereInput.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './objects/ReportWhereUniqueInput.schema';
import { ReportCountAggregateInputObjectSchema as ReportCountAggregateInputObjectSchema } from './objects/ReportCountAggregateInput.schema';

export const ReportCountSchema: z.ZodType<Prisma.ReportCountArgs> = z.object({ orderBy: z.union([ReportOrderByWithRelationInputObjectSchema, ReportOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportWhereInputObjectSchema.optional(), cursor: ReportWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReportCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ReportCountArgs>;

export const ReportCountZodSchema = z.object({ orderBy: z.union([ReportOrderByWithRelationInputObjectSchema, ReportOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportWhereInputObjectSchema.optional(), cursor: ReportWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReportCountAggregateInputObjectSchema ]).optional() }).strict();