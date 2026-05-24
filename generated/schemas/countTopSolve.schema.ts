import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopSolveOrderByWithRelationInputObjectSchema as TopSolveOrderByWithRelationInputObjectSchema } from './objects/TopSolveOrderByWithRelationInput.schema';
import { TopSolveWhereInputObjectSchema as TopSolveWhereInputObjectSchema } from './objects/TopSolveWhereInput.schema';
import { TopSolveWhereUniqueInputObjectSchema as TopSolveWhereUniqueInputObjectSchema } from './objects/TopSolveWhereUniqueInput.schema';
import { TopSolveCountAggregateInputObjectSchema as TopSolveCountAggregateInputObjectSchema } from './objects/TopSolveCountAggregateInput.schema';

export const TopSolveCountSchema: z.ZodType<Prisma.TopSolveCountArgs> = z.object({ orderBy: z.union([TopSolveOrderByWithRelationInputObjectSchema, TopSolveOrderByWithRelationInputObjectSchema.array()]).optional(), where: TopSolveWhereInputObjectSchema.optional(), cursor: TopSolveWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TopSolveCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TopSolveCountArgs>;

export const TopSolveCountZodSchema = z.object({ orderBy: z.union([TopSolveOrderByWithRelationInputObjectSchema, TopSolveOrderByWithRelationInputObjectSchema.array()]).optional(), where: TopSolveWhereInputObjectSchema.optional(), cursor: TopSolveWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TopSolveCountAggregateInputObjectSchema ]).optional() }).strict();