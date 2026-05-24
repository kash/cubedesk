import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameOptionsIncludeObjectSchema as GameOptionsIncludeObjectSchema } from './objects/GameOptionsInclude.schema';
import { GameOptionsOrderByWithRelationInputObjectSchema as GameOptionsOrderByWithRelationInputObjectSchema } from './objects/GameOptionsOrderByWithRelationInput.schema';
import { GameOptionsWhereInputObjectSchema as GameOptionsWhereInputObjectSchema } from './objects/GameOptionsWhereInput.schema';
import { GameOptionsWhereUniqueInputObjectSchema as GameOptionsWhereUniqueInputObjectSchema } from './objects/GameOptionsWhereUniqueInput.schema';
import { GameOptionsScalarFieldEnumSchema } from './enums/GameOptionsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GameOptionsFindFirstOrThrowSelectSchema: z.ZodType<Prisma.GameOptionsSelect> = z.object({
    id: z.boolean().optional(),
    game_session_id: z.boolean().optional(),
    match_session_id: z.boolean().optional(),
    game_type: z.boolean().optional(),
    cube_type: z.boolean().optional(),
    elimination_starting_time_seconds: z.boolean().optional(),
    elimination_percent_change_rate: z.boolean().optional(),
    head_to_head_target_win_count: z.boolean().optional(),
    gauntlet_time_multiplier: z.boolean().optional(),
    created_at: z.boolean().optional(),
    game_session: z.boolean().optional(),
    match_session: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.GameOptionsSelect>;

export const GameOptionsFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    game_session_id: z.boolean().optional(),
    match_session_id: z.boolean().optional(),
    game_type: z.boolean().optional(),
    cube_type: z.boolean().optional(),
    elimination_starting_time_seconds: z.boolean().optional(),
    elimination_percent_change_rate: z.boolean().optional(),
    head_to_head_target_win_count: z.boolean().optional(),
    gauntlet_time_multiplier: z.boolean().optional(),
    created_at: z.boolean().optional(),
    game_session: z.boolean().optional(),
    match_session: z.boolean().optional()
  }).strict();

export const GameOptionsFindFirstOrThrowSchema: z.ZodType<Prisma.GameOptionsFindFirstOrThrowArgs> = z.object({ select: GameOptionsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => GameOptionsIncludeObjectSchema.optional()), orderBy: z.union([GameOptionsOrderByWithRelationInputObjectSchema, GameOptionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: GameOptionsWhereInputObjectSchema.optional(), cursor: GameOptionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GameOptionsScalarFieldEnumSchema, GameOptionsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.GameOptionsFindFirstOrThrowArgs>;

export const GameOptionsFindFirstOrThrowZodSchema = z.object({ select: GameOptionsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => GameOptionsIncludeObjectSchema.optional()), orderBy: z.union([GameOptionsOrderByWithRelationInputObjectSchema, GameOptionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: GameOptionsWhereInputObjectSchema.optional(), cursor: GameOptionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GameOptionsScalarFieldEnumSchema, GameOptionsScalarFieldEnumSchema.array()]).optional() }).strict();