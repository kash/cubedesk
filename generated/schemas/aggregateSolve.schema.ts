import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveOrderByWithRelationInputObjectSchema as SolveOrderByWithRelationInputObjectSchema } from './objects/SolveOrderByWithRelationInput.schema';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './objects/SolveWhereInput.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './objects/SolveWhereUniqueInput.schema';
import { SolveCountAggregateInputObjectSchema as SolveCountAggregateInputObjectSchema } from './objects/SolveCountAggregateInput.schema';
import { SolveMinAggregateInputObjectSchema as SolveMinAggregateInputObjectSchema } from './objects/SolveMinAggregateInput.schema';
import { SolveMaxAggregateInputObjectSchema as SolveMaxAggregateInputObjectSchema } from './objects/SolveMaxAggregateInput.schema';
import { SolveAvgAggregateInputObjectSchema as SolveAvgAggregateInputObjectSchema } from './objects/SolveAvgAggregateInput.schema';
import { SolveSumAggregateInputObjectSchema as SolveSumAggregateInputObjectSchema } from './objects/SolveSumAggregateInput.schema';

export const SolveAggregateSchema: z.ZodType<Prisma.SolveAggregateArgs> = z.object({ orderBy: z.union([SolveOrderByWithRelationInputObjectSchema, SolveOrderByWithRelationInputObjectSchema.array()]).optional(), where: SolveWhereInputObjectSchema.optional(), cursor: SolveWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SolveCountAggregateInputObjectSchema ]).optional(), _min: SolveMinAggregateInputObjectSchema.optional(), _max: SolveMaxAggregateInputObjectSchema.optional(), _avg: SolveAvgAggregateInputObjectSchema.optional(), _sum: SolveSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SolveAggregateArgs>;

export const SolveAggregateZodSchema = z.object({ orderBy: z.union([SolveOrderByWithRelationInputObjectSchema, SolveOrderByWithRelationInputObjectSchema.array()]).optional(), where: SolveWhereInputObjectSchema.optional(), cursor: SolveWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SolveCountAggregateInputObjectSchema ]).optional(), _min: SolveMinAggregateInputObjectSchema.optional(), _max: SolveMaxAggregateInputObjectSchema.optional(), _avg: SolveAvgAggregateInputObjectSchema.optional(), _sum: SolveSumAggregateInputObjectSchema.optional() }).strict();