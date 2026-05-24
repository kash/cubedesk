import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveViewOrderByWithRelationInputObjectSchema as SolveViewOrderByWithRelationInputObjectSchema } from './objects/SolveViewOrderByWithRelationInput.schema';
import { SolveViewWhereInputObjectSchema as SolveViewWhereInputObjectSchema } from './objects/SolveViewWhereInput.schema';
import { SolveViewWhereUniqueInputObjectSchema as SolveViewWhereUniqueInputObjectSchema } from './objects/SolveViewWhereUniqueInput.schema';
import { SolveViewCountAggregateInputObjectSchema as SolveViewCountAggregateInputObjectSchema } from './objects/SolveViewCountAggregateInput.schema';

export const SolveViewCountSchema: z.ZodType<Prisma.SolveViewCountArgs> = z.object({ orderBy: z.union([SolveViewOrderByWithRelationInputObjectSchema, SolveViewOrderByWithRelationInputObjectSchema.array()]).optional(), where: SolveViewWhereInputObjectSchema.optional(), cursor: SolveViewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SolveViewCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SolveViewCountArgs>;

export const SolveViewCountZodSchema = z.object({ orderBy: z.union([SolveViewOrderByWithRelationInputObjectSchema, SolveViewOrderByWithRelationInputObjectSchema.array()]).optional(), where: SolveViewWhereInputObjectSchema.optional(), cursor: SolveViewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SolveViewCountAggregateInputObjectSchema ]).optional() }).strict();