import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DemoSolveOrderByWithRelationInputObjectSchema as DemoSolveOrderByWithRelationInputObjectSchema } from './objects/DemoSolveOrderByWithRelationInput.schema';
import { DemoSolveWhereInputObjectSchema as DemoSolveWhereInputObjectSchema } from './objects/DemoSolveWhereInput.schema';
import { DemoSolveWhereUniqueInputObjectSchema as DemoSolveWhereUniqueInputObjectSchema } from './objects/DemoSolveWhereUniqueInput.schema';
import { DemoSolveCountAggregateInputObjectSchema as DemoSolveCountAggregateInputObjectSchema } from './objects/DemoSolveCountAggregateInput.schema';

export const DemoSolveCountSchema: z.ZodType<Prisma.DemoSolveCountArgs> = z.object({ orderBy: z.union([DemoSolveOrderByWithRelationInputObjectSchema, DemoSolveOrderByWithRelationInputObjectSchema.array()]).optional(), where: DemoSolveWhereInputObjectSchema.optional(), cursor: DemoSolveWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DemoSolveCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DemoSolveCountArgs>;

export const DemoSolveCountZodSchema = z.object({ orderBy: z.union([DemoSolveOrderByWithRelationInputObjectSchema, DemoSolveOrderByWithRelationInputObjectSchema.array()]).optional(), where: DemoSolveWhereInputObjectSchema.optional(), cursor: DemoSolveWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DemoSolveCountAggregateInputObjectSchema ]).optional() }).strict();