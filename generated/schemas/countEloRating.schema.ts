import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloRatingOrderByWithRelationInputObjectSchema as EloRatingOrderByWithRelationInputObjectSchema } from './objects/EloRatingOrderByWithRelationInput.schema';
import { EloRatingWhereInputObjectSchema as EloRatingWhereInputObjectSchema } from './objects/EloRatingWhereInput.schema';
import { EloRatingWhereUniqueInputObjectSchema as EloRatingWhereUniqueInputObjectSchema } from './objects/EloRatingWhereUniqueInput.schema';
import { EloRatingCountAggregateInputObjectSchema as EloRatingCountAggregateInputObjectSchema } from './objects/EloRatingCountAggregateInput.schema';

export const EloRatingCountSchema: z.ZodType<Prisma.EloRatingCountArgs> = z.object({ orderBy: z.union([EloRatingOrderByWithRelationInputObjectSchema, EloRatingOrderByWithRelationInputObjectSchema.array()]).optional(), where: EloRatingWhereInputObjectSchema.optional(), cursor: EloRatingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EloRatingCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.EloRatingCountArgs>;

export const EloRatingCountZodSchema = z.object({ orderBy: z.union([EloRatingOrderByWithRelationInputObjectSchema, EloRatingOrderByWithRelationInputObjectSchema.array()]).optional(), where: EloRatingWhereInputObjectSchema.optional(), cursor: EloRatingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EloRatingCountAggregateInputObjectSchema ]).optional() }).strict();