import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchLobbyOrderByWithRelationInputObjectSchema as MatchLobbyOrderByWithRelationInputObjectSchema } from './objects/MatchLobbyOrderByWithRelationInput.schema';
import { MatchLobbyWhereInputObjectSchema as MatchLobbyWhereInputObjectSchema } from './objects/MatchLobbyWhereInput.schema';
import { MatchLobbyWhereUniqueInputObjectSchema as MatchLobbyWhereUniqueInputObjectSchema } from './objects/MatchLobbyWhereUniqueInput.schema';
import { MatchLobbyCountAggregateInputObjectSchema as MatchLobbyCountAggregateInputObjectSchema } from './objects/MatchLobbyCountAggregateInput.schema';

export const MatchLobbyCountSchema: z.ZodType<Prisma.MatchLobbyCountArgs> = z.object({ orderBy: z.union([MatchLobbyOrderByWithRelationInputObjectSchema, MatchLobbyOrderByWithRelationInputObjectSchema.array()]).optional(), where: MatchLobbyWhereInputObjectSchema.optional(), cursor: MatchLobbyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MatchLobbyCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.MatchLobbyCountArgs>;

export const MatchLobbyCountZodSchema = z.object({ orderBy: z.union([MatchLobbyOrderByWithRelationInputObjectSchema, MatchLobbyOrderByWithRelationInputObjectSchema.array()]).optional(), where: MatchLobbyWhereInputObjectSchema.optional(), cursor: MatchLobbyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MatchLobbyCountAggregateInputObjectSchema ]).optional() }).strict();