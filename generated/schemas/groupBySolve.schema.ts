import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './objects/SolveWhereInput.schema';
import { SolveOrderByWithAggregationInputObjectSchema as SolveOrderByWithAggregationInputObjectSchema } from './objects/SolveOrderByWithAggregationInput.schema';
import { SolveScalarWhereWithAggregatesInputObjectSchema as SolveScalarWhereWithAggregatesInputObjectSchema } from './objects/SolveScalarWhereWithAggregatesInput.schema';
import { SolveScalarFieldEnumSchema } from './enums/SolveScalarFieldEnum.schema';
import { SolveCountAggregateInputObjectSchema as SolveCountAggregateInputObjectSchema } from './objects/SolveCountAggregateInput.schema';
import { SolveMinAggregateInputObjectSchema as SolveMinAggregateInputObjectSchema } from './objects/SolveMinAggregateInput.schema';
import { SolveMaxAggregateInputObjectSchema as SolveMaxAggregateInputObjectSchema } from './objects/SolveMaxAggregateInput.schema';
import { SolveAvgAggregateInputObjectSchema as SolveAvgAggregateInputObjectSchema } from './objects/SolveAvgAggregateInput.schema';
import { SolveSumAggregateInputObjectSchema as SolveSumAggregateInputObjectSchema } from './objects/SolveSumAggregateInput.schema';

export const SolveGroupBySchema: z.ZodType<Prisma.SolveGroupByArgs> = z.object({ where: SolveWhereInputObjectSchema.optional(), orderBy: z.union([SolveOrderByWithAggregationInputObjectSchema, SolveOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SolveScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SolveScalarFieldEnumSchema), _count: z.union([ z.literal(true), SolveCountAggregateInputObjectSchema ]).optional(), _min: SolveMinAggregateInputObjectSchema.optional(), _max: SolveMaxAggregateInputObjectSchema.optional(), _avg: SolveAvgAggregateInputObjectSchema.optional(), _sum: SolveSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SolveGroupByArgs>;

export const SolveGroupByZodSchema = z.object({ where: SolveWhereInputObjectSchema.optional(), orderBy: z.union([SolveOrderByWithAggregationInputObjectSchema, SolveOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SolveScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SolveScalarFieldEnumSchema), _count: z.union([ z.literal(true), SolveCountAggregateInputObjectSchema ]).optional(), _min: SolveMinAggregateInputObjectSchema.optional(), _max: SolveMaxAggregateInputObjectSchema.optional(), _avg: SolveAvgAggregateInputObjectSchema.optional(), _sum: SolveSumAggregateInputObjectSchema.optional() }).strict();