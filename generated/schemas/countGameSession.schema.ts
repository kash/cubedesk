import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameSessionOrderByWithRelationInputObjectSchema as GameSessionOrderByWithRelationInputObjectSchema } from './objects/GameSessionOrderByWithRelationInput.schema';
import { GameSessionWhereInputObjectSchema as GameSessionWhereInputObjectSchema } from './objects/GameSessionWhereInput.schema';
import { GameSessionWhereUniqueInputObjectSchema as GameSessionWhereUniqueInputObjectSchema } from './objects/GameSessionWhereUniqueInput.schema';
import { GameSessionCountAggregateInputObjectSchema as GameSessionCountAggregateInputObjectSchema } from './objects/GameSessionCountAggregateInput.schema';

export const GameSessionCountSchema: z.ZodType<Prisma.GameSessionCountArgs> = z.object({ orderBy: z.union([GameSessionOrderByWithRelationInputObjectSchema, GameSessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: GameSessionWhereInputObjectSchema.optional(), cursor: GameSessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GameSessionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.GameSessionCountArgs>;

export const GameSessionCountZodSchema = z.object({ orderBy: z.union([GameSessionOrderByWithRelationInputObjectSchema, GameSessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: GameSessionWhereInputObjectSchema.optional(), cursor: GameSessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GameSessionCountAggregateInputObjectSchema ]).optional() }).strict();