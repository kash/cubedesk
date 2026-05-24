import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchOrderByWithRelationInputObjectSchema as MatchOrderByWithRelationInputObjectSchema } from './objects/MatchOrderByWithRelationInput.schema';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './objects/MatchWhereInput.schema';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './objects/MatchWhereUniqueInput.schema';
import { MatchCountAggregateInputObjectSchema as MatchCountAggregateInputObjectSchema } from './objects/MatchCountAggregateInput.schema';
import { MatchMinAggregateInputObjectSchema as MatchMinAggregateInputObjectSchema } from './objects/MatchMinAggregateInput.schema';
import { MatchMaxAggregateInputObjectSchema as MatchMaxAggregateInputObjectSchema } from './objects/MatchMaxAggregateInput.schema';

export const MatchAggregateSchema: z.ZodType<Prisma.MatchAggregateArgs> = z.object({ orderBy: z.union([MatchOrderByWithRelationInputObjectSchema, MatchOrderByWithRelationInputObjectSchema.array()]).optional(), where: MatchWhereInputObjectSchema.optional(), cursor: MatchWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MatchCountAggregateInputObjectSchema ]).optional(), _min: MatchMinAggregateInputObjectSchema.optional(), _max: MatchMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MatchAggregateArgs>;

export const MatchAggregateZodSchema = z.object({ orderBy: z.union([MatchOrderByWithRelationInputObjectSchema, MatchOrderByWithRelationInputObjectSchema.array()]).optional(), where: MatchWhereInputObjectSchema.optional(), cursor: MatchWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MatchCountAggregateInputObjectSchema ]).optional(), _min: MatchMinAggregateInputObjectSchema.optional(), _max: MatchMaxAggregateInputObjectSchema.optional() }).strict();