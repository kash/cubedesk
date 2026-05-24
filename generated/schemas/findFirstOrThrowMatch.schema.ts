import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchIncludeObjectSchema as MatchIncludeObjectSchema } from './objects/MatchInclude.schema';
import { MatchOrderByWithRelationInputObjectSchema as MatchOrderByWithRelationInputObjectSchema } from './objects/MatchOrderByWithRelationInput.schema';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './objects/MatchWhereInput.schema';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './objects/MatchWhereUniqueInput.schema';
import { MatchScalarFieldEnumSchema } from './enums/MatchScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MatchFindFirstOrThrowSelectSchema: z.ZodType<Prisma.MatchSelect> = z.object({
    id: z.boolean().optional(),
    winner_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    link_code: z.boolean().optional(),
    match_session_id: z.boolean().optional(),
    ended_at: z.boolean().optional(),
    started_at: z.boolean().optional(),
    spectate_code: z.boolean().optional(),
    aborted: z.boolean().optional(),
    elo_log: z.boolean().optional(),
    game_session: z.boolean().optional(),
    match_session: z.boolean().optional(),
    winner: z.boolean().optional(),
    participants: z.boolean().optional(),
    solves: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MatchSelect>;

export const MatchFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    winner_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    link_code: z.boolean().optional(),
    match_session_id: z.boolean().optional(),
    ended_at: z.boolean().optional(),
    started_at: z.boolean().optional(),
    spectate_code: z.boolean().optional(),
    aborted: z.boolean().optional(),
    elo_log: z.boolean().optional(),
    game_session: z.boolean().optional(),
    match_session: z.boolean().optional(),
    winner: z.boolean().optional(),
    participants: z.boolean().optional(),
    solves: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const MatchFindFirstOrThrowSchema: z.ZodType<Prisma.MatchFindFirstOrThrowArgs> = z.object({ select: MatchFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => MatchIncludeObjectSchema.optional()), orderBy: z.union([MatchOrderByWithRelationInputObjectSchema, MatchOrderByWithRelationInputObjectSchema.array()]).optional(), where: MatchWhereInputObjectSchema.optional(), cursor: MatchWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MatchScalarFieldEnumSchema, MatchScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MatchFindFirstOrThrowArgs>;

export const MatchFindFirstOrThrowZodSchema = z.object({ select: MatchFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => MatchIncludeObjectSchema.optional()), orderBy: z.union([MatchOrderByWithRelationInputObjectSchema, MatchOrderByWithRelationInputObjectSchema.array()]).optional(), where: MatchWhereInputObjectSchema.optional(), cursor: MatchWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MatchScalarFieldEnumSchema, MatchScalarFieldEnumSchema.array()]).optional() }).strict();