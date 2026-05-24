import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloLogOrderByWithRelationInputObjectSchema as EloLogOrderByWithRelationInputObjectSchema } from './objects/EloLogOrderByWithRelationInput.schema';
import { EloLogWhereInputObjectSchema as EloLogWhereInputObjectSchema } from './objects/EloLogWhereInput.schema';
import { EloLogWhereUniqueInputObjectSchema as EloLogWhereUniqueInputObjectSchema } from './objects/EloLogWhereUniqueInput.schema';
import { EloLogCountAggregateInputObjectSchema as EloLogCountAggregateInputObjectSchema } from './objects/EloLogCountAggregateInput.schema';

export const EloLogCountSchema: z.ZodType<Prisma.EloLogCountArgs> = z.object({ orderBy: z.union([EloLogOrderByWithRelationInputObjectSchema, EloLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: EloLogWhereInputObjectSchema.optional(), cursor: EloLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EloLogCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.EloLogCountArgs>;

export const EloLogCountZodSchema = z.object({ orderBy: z.union([EloLogOrderByWithRelationInputObjectSchema, EloLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: EloLogWhereInputObjectSchema.optional(), cursor: EloLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EloLogCountAggregateInputObjectSchema ]).optional() }).strict();