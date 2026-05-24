import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchLobbyIncludeObjectSchema as MatchLobbyIncludeObjectSchema } from './objects/MatchLobbyInclude.schema';
import { MatchLobbyOrderByWithRelationInputObjectSchema as MatchLobbyOrderByWithRelationInputObjectSchema } from './objects/MatchLobbyOrderByWithRelationInput.schema';
import { MatchLobbyWhereInputObjectSchema as MatchLobbyWhereInputObjectSchema } from './objects/MatchLobbyWhereInput.schema';
import { MatchLobbyWhereUniqueInputObjectSchema as MatchLobbyWhereUniqueInputObjectSchema } from './objects/MatchLobbyWhereUniqueInput.schema';
import { MatchLobbyScalarFieldEnumSchema } from './enums/MatchLobbyScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MatchLobbyFindManySelectSchema: z.ZodType<Prisma.MatchLobbySelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    cube_type: z.boolean().optional(),
    game_type: z.boolean().optional(),
    player_count: z.boolean().optional(),
    elo: z.boolean().optional(),
    created_at: z.boolean().optional(),
    client_id: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MatchLobbySelect>;

export const MatchLobbyFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    cube_type: z.boolean().optional(),
    game_type: z.boolean().optional(),
    player_count: z.boolean().optional(),
    elo: z.boolean().optional(),
    created_at: z.boolean().optional(),
    client_id: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const MatchLobbyFindManySchema: z.ZodType<Prisma.MatchLobbyFindManyArgs> = z.object({ select: MatchLobbyFindManySelectSchema.optional(), include: z.lazy(() => MatchLobbyIncludeObjectSchema.optional()), orderBy: z.union([MatchLobbyOrderByWithRelationInputObjectSchema, MatchLobbyOrderByWithRelationInputObjectSchema.array()]).optional(), where: MatchLobbyWhereInputObjectSchema.optional(), cursor: MatchLobbyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MatchLobbyScalarFieldEnumSchema, MatchLobbyScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MatchLobbyFindManyArgs>;

export const MatchLobbyFindManyZodSchema = z.object({ select: MatchLobbyFindManySelectSchema.optional(), include: z.lazy(() => MatchLobbyIncludeObjectSchema.optional()), orderBy: z.union([MatchLobbyOrderByWithRelationInputObjectSchema, MatchLobbyOrderByWithRelationInputObjectSchema.array()]).optional(), where: MatchLobbyWhereInputObjectSchema.optional(), cursor: MatchLobbyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MatchLobbyScalarFieldEnumSchema, MatchLobbyScalarFieldEnumSchema.array()]).optional() }).strict();