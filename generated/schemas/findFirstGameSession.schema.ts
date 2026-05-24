import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GameSessionIncludeObjectSchema as GameSessionIncludeObjectSchema } from './objects/GameSessionInclude.schema';
import { GameSessionOrderByWithRelationInputObjectSchema as GameSessionOrderByWithRelationInputObjectSchema } from './objects/GameSessionOrderByWithRelationInput.schema';
import { GameSessionWhereInputObjectSchema as GameSessionWhereInputObjectSchema } from './objects/GameSessionWhereInput.schema';
import { GameSessionWhereUniqueInputObjectSchema as GameSessionWhereUniqueInputObjectSchema } from './objects/GameSessionWhereUniqueInput.schema';
import { GameSessionScalarFieldEnumSchema } from './enums/GameSessionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GameSessionFindFirstSelectSchema: z.ZodType<Prisma.GameSessionSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    match_id: z.boolean().optional(),
    game_type: z.boolean().optional(),
    solve_count: z.boolean().optional(),
    total_time: z.boolean().optional(),
    created_at: z.boolean().optional(),
    game_options: z.boolean().optional(),
    match: z.boolean().optional(),
    user: z.boolean().optional(),
    solves: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.GameSessionSelect>;

export const GameSessionFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    match_id: z.boolean().optional(),
    game_type: z.boolean().optional(),
    solve_count: z.boolean().optional(),
    total_time: z.boolean().optional(),
    created_at: z.boolean().optional(),
    game_options: z.boolean().optional(),
    match: z.boolean().optional(),
    user: z.boolean().optional(),
    solves: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const GameSessionFindFirstSchema: z.ZodType<Prisma.GameSessionFindFirstArgs> = z.object({ select: GameSessionFindFirstSelectSchema.optional(), include: z.lazy(() => GameSessionIncludeObjectSchema.optional()), orderBy: z.union([GameSessionOrderByWithRelationInputObjectSchema, GameSessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: GameSessionWhereInputObjectSchema.optional(), cursor: GameSessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GameSessionScalarFieldEnumSchema, GameSessionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.GameSessionFindFirstArgs>;

export const GameSessionFindFirstZodSchema = z.object({ select: GameSessionFindFirstSelectSchema.optional(), include: z.lazy(() => GameSessionIncludeObjectSchema.optional()), orderBy: z.union([GameSessionOrderByWithRelationInputObjectSchema, GameSessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: GameSessionWhereInputObjectSchema.optional(), cursor: GameSessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GameSessionScalarFieldEnumSchema, GameSessionScalarFieldEnumSchema.array()]).optional() }).strict();