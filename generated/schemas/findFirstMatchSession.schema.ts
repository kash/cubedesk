import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchSessionIncludeObjectSchema as MatchSessionIncludeObjectSchema } from './objects/MatchSessionInclude.schema';
import { MatchSessionOrderByWithRelationInputObjectSchema as MatchSessionOrderByWithRelationInputObjectSchema } from './objects/MatchSessionOrderByWithRelationInput.schema';
import { MatchSessionWhereInputObjectSchema as MatchSessionWhereInputObjectSchema } from './objects/MatchSessionWhereInput.schema';
import { MatchSessionWhereUniqueInputObjectSchema as MatchSessionWhereUniqueInputObjectSchema } from './objects/MatchSessionWhereUniqueInput.schema';
import { MatchSessionScalarFieldEnumSchema } from './enums/MatchSessionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MatchSessionFindFirstSelectSchema: z.ZodType<Prisma.MatchSessionSelect> = z.object({
    id: z.boolean().optional(),
    min_players: z.boolean().optional(),
    max_players: z.boolean().optional(),
    match_type: z.boolean().optional(),
    custom_match: z.boolean().optional(),
    created_at: z.boolean().optional(),
    created_by_id: z.boolean().optional(),
    rated: z.boolean().optional(),
    chat_messages: z.boolean().optional(),
    game_options: z.boolean().optional(),
    matches: z.boolean().optional(),
    created_by: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MatchSessionSelect>;

export const MatchSessionFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    min_players: z.boolean().optional(),
    max_players: z.boolean().optional(),
    match_type: z.boolean().optional(),
    custom_match: z.boolean().optional(),
    created_at: z.boolean().optional(),
    created_by_id: z.boolean().optional(),
    rated: z.boolean().optional(),
    chat_messages: z.boolean().optional(),
    game_options: z.boolean().optional(),
    matches: z.boolean().optional(),
    created_by: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const MatchSessionFindFirstSchema: z.ZodType<Prisma.MatchSessionFindFirstArgs> = z.object({ select: MatchSessionFindFirstSelectSchema.optional(), include: z.lazy(() => MatchSessionIncludeObjectSchema.optional()), orderBy: z.union([MatchSessionOrderByWithRelationInputObjectSchema, MatchSessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: MatchSessionWhereInputObjectSchema.optional(), cursor: MatchSessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MatchSessionScalarFieldEnumSchema, MatchSessionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MatchSessionFindFirstArgs>;

export const MatchSessionFindFirstZodSchema = z.object({ select: MatchSessionFindFirstSelectSchema.optional(), include: z.lazy(() => MatchSessionIncludeObjectSchema.optional()), orderBy: z.union([MatchSessionOrderByWithRelationInputObjectSchema, MatchSessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: MatchSessionWhereInputObjectSchema.optional(), cursor: MatchSessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MatchSessionScalarFieldEnumSchema, MatchSessionScalarFieldEnumSchema.array()]).optional() }).strict();