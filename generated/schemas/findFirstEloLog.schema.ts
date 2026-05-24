import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloLogIncludeObjectSchema as EloLogIncludeObjectSchema } from './objects/EloLogInclude.schema';
import { EloLogOrderByWithRelationInputObjectSchema as EloLogOrderByWithRelationInputObjectSchema } from './objects/EloLogOrderByWithRelationInput.schema';
import { EloLogWhereInputObjectSchema as EloLogWhereInputObjectSchema } from './objects/EloLogWhereInput.schema';
import { EloLogWhereUniqueInputObjectSchema as EloLogWhereUniqueInputObjectSchema } from './objects/EloLogWhereUniqueInput.schema';
import { EloLogScalarFieldEnumSchema } from './enums/EloLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EloLogFindFirstSelectSchema: z.ZodType<Prisma.EloLogSelect> = z.object({
    id: z.boolean().optional(),
    opponent_id: z.boolean().optional(),
    cube_type: z.boolean().optional(),
    elo_change: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    created_at: z.boolean().optional(),
    match_id: z.boolean().optional(),
    player_id: z.boolean().optional(),
    opponent_new_elo_rating: z.boolean().optional(),
    opponent_new_game_count: z.boolean().optional(),
    player_new_elo_rating: z.boolean().optional(),
    player_new_game_count: z.boolean().optional(),
    refunded_at: z.boolean().optional(),
    match: z.boolean().optional(),
    opponent: z.boolean().optional(),
    player: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.EloLogSelect>;

export const EloLogFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    opponent_id: z.boolean().optional(),
    cube_type: z.boolean().optional(),
    elo_change: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    created_at: z.boolean().optional(),
    match_id: z.boolean().optional(),
    player_id: z.boolean().optional(),
    opponent_new_elo_rating: z.boolean().optional(),
    opponent_new_game_count: z.boolean().optional(),
    player_new_elo_rating: z.boolean().optional(),
    player_new_game_count: z.boolean().optional(),
    refunded_at: z.boolean().optional(),
    match: z.boolean().optional(),
    opponent: z.boolean().optional(),
    player: z.boolean().optional()
  }).strict();

export const EloLogFindFirstSchema: z.ZodType<Prisma.EloLogFindFirstArgs> = z.object({ select: EloLogFindFirstSelectSchema.optional(), include: z.lazy(() => EloLogIncludeObjectSchema.optional()), orderBy: z.union([EloLogOrderByWithRelationInputObjectSchema, EloLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: EloLogWhereInputObjectSchema.optional(), cursor: EloLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EloLogScalarFieldEnumSchema, EloLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.EloLogFindFirstArgs>;

export const EloLogFindFirstZodSchema = z.object({ select: EloLogFindFirstSelectSchema.optional(), include: z.lazy(() => EloLogIncludeObjectSchema.optional()), orderBy: z.union([EloLogOrderByWithRelationInputObjectSchema, EloLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: EloLogWhereInputObjectSchema.optional(), cursor: EloLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EloLogScalarFieldEnumSchema, EloLogScalarFieldEnumSchema.array()]).optional() }).strict();