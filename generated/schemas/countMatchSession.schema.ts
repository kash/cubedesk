import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchSessionOrderByWithRelationInputObjectSchema as MatchSessionOrderByWithRelationInputObjectSchema } from './objects/MatchSessionOrderByWithRelationInput.schema';
import { MatchSessionWhereInputObjectSchema as MatchSessionWhereInputObjectSchema } from './objects/MatchSessionWhereInput.schema';
import { MatchSessionWhereUniqueInputObjectSchema as MatchSessionWhereUniqueInputObjectSchema } from './objects/MatchSessionWhereUniqueInput.schema';
import { MatchSessionCountAggregateInputObjectSchema as MatchSessionCountAggregateInputObjectSchema } from './objects/MatchSessionCountAggregateInput.schema';

export const MatchSessionCountSchema: z.ZodType<Prisma.MatchSessionCountArgs> = z.object({ orderBy: z.union([MatchSessionOrderByWithRelationInputObjectSchema, MatchSessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: MatchSessionWhereInputObjectSchema.optional(), cursor: MatchSessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MatchSessionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.MatchSessionCountArgs>;

export const MatchSessionCountZodSchema = z.object({ orderBy: z.union([MatchSessionOrderByWithRelationInputObjectSchema, MatchSessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: MatchSessionWhereInputObjectSchema.optional(), cursor: MatchSessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MatchSessionCountAggregateInputObjectSchema ]).optional() }).strict();