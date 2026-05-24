import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameOptionsOrderByWithRelationInputObjectSchema as GameOptionsOrderByWithRelationInputObjectSchema } from './objects/GameOptionsOrderByWithRelationInput.schema';
import { GameOptionsWhereInputObjectSchema as GameOptionsWhereInputObjectSchema } from './objects/GameOptionsWhereInput.schema';
import { GameOptionsWhereUniqueInputObjectSchema as GameOptionsWhereUniqueInputObjectSchema } from './objects/GameOptionsWhereUniqueInput.schema';
import { GameOptionsCountAggregateInputObjectSchema as GameOptionsCountAggregateInputObjectSchema } from './objects/GameOptionsCountAggregateInput.schema';

export const GameOptionsCountSchema: z.ZodType<Prisma.GameOptionsCountArgs> = z.object({ orderBy: z.union([GameOptionsOrderByWithRelationInputObjectSchema, GameOptionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: GameOptionsWhereInputObjectSchema.optional(), cursor: GameOptionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GameOptionsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.GameOptionsCountArgs>;

export const GameOptionsCountZodSchema = z.object({ orderBy: z.union([GameOptionsOrderByWithRelationInputObjectSchema, GameOptionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: GameOptionsWhereInputObjectSchema.optional(), cursor: GameOptionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GameOptionsCountAggregateInputObjectSchema ]).optional() }).strict();