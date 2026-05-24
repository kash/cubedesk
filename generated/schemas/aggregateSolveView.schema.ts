import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveViewOrderByWithRelationInputObjectSchema as SolveViewOrderByWithRelationInputObjectSchema } from './objects/SolveViewOrderByWithRelationInput.schema';
import { SolveViewWhereInputObjectSchema as SolveViewWhereInputObjectSchema } from './objects/SolveViewWhereInput.schema';
import { SolveViewWhereUniqueInputObjectSchema as SolveViewWhereUniqueInputObjectSchema } from './objects/SolveViewWhereUniqueInput.schema';
import { SolveViewCountAggregateInputObjectSchema as SolveViewCountAggregateInputObjectSchema } from './objects/SolveViewCountAggregateInput.schema';
import { SolveViewMinAggregateInputObjectSchema as SolveViewMinAggregateInputObjectSchema } from './objects/SolveViewMinAggregateInput.schema';
import { SolveViewMaxAggregateInputObjectSchema as SolveViewMaxAggregateInputObjectSchema } from './objects/SolveViewMaxAggregateInput.schema';

export const SolveViewAggregateSchema: z.ZodType<Prisma.SolveViewAggregateArgs> = z.object({ orderBy: z.union([SolveViewOrderByWithRelationInputObjectSchema, SolveViewOrderByWithRelationInputObjectSchema.array()]).optional(), where: SolveViewWhereInputObjectSchema.optional(), cursor: SolveViewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SolveViewCountAggregateInputObjectSchema ]).optional(), _min: SolveViewMinAggregateInputObjectSchema.optional(), _max: SolveViewMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SolveViewAggregateArgs>;

export const SolveViewAggregateZodSchema = z.object({ orderBy: z.union([SolveViewOrderByWithRelationInputObjectSchema, SolveViewOrderByWithRelationInputObjectSchema.array()]).optional(), where: SolveViewWhereInputObjectSchema.optional(), cursor: SolveViewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SolveViewCountAggregateInputObjectSchema ]).optional(), _min: SolveViewMinAggregateInputObjectSchema.optional(), _max: SolveViewMaxAggregateInputObjectSchema.optional() }).strict();