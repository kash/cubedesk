import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveOrderByWithRelationInputObjectSchema as SolveOrderByWithRelationInputObjectSchema } from './objects/SolveOrderByWithRelationInput.schema';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './objects/SolveWhereInput.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './objects/SolveWhereUniqueInput.schema';
import { SolveCountAggregateInputObjectSchema as SolveCountAggregateInputObjectSchema } from './objects/SolveCountAggregateInput.schema';

export const SolveCountSchema: z.ZodType<Prisma.SolveCountArgs> = z.object({ orderBy: z.union([SolveOrderByWithRelationInputObjectSchema, SolveOrderByWithRelationInputObjectSchema.array()]).optional(), where: SolveWhereInputObjectSchema.optional(), cursor: SolveWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SolveCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SolveCountArgs>;

export const SolveCountZodSchema = z.object({ orderBy: z.union([SolveOrderByWithRelationInputObjectSchema, SolveOrderByWithRelationInputObjectSchema.array()]).optional(), where: SolveWhereInputObjectSchema.optional(), cursor: SolveWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SolveCountAggregateInputObjectSchema ]).optional() }).strict();