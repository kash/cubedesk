import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchOrderByWithRelationInputObjectSchema as MatchOrderByWithRelationInputObjectSchema } from './objects/MatchOrderByWithRelationInput.schema';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './objects/MatchWhereInput.schema';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './objects/MatchWhereUniqueInput.schema';
import { MatchCountAggregateInputObjectSchema as MatchCountAggregateInputObjectSchema } from './objects/MatchCountAggregateInput.schema';

export const MatchCountSchema: z.ZodType<Prisma.MatchCountArgs> = z.object({ orderBy: z.union([MatchOrderByWithRelationInputObjectSchema, MatchOrderByWithRelationInputObjectSchema.array()]).optional(), where: MatchWhereInputObjectSchema.optional(), cursor: MatchWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MatchCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.MatchCountArgs>;

export const MatchCountZodSchema = z.object({ orderBy: z.union([MatchOrderByWithRelationInputObjectSchema, MatchOrderByWithRelationInputObjectSchema.array()]).optional(), where: MatchWhereInputObjectSchema.optional(), cursor: MatchWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MatchCountAggregateInputObjectSchema ]).optional() }).strict();