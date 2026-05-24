import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchParticipantIncludeObjectSchema as MatchParticipantIncludeObjectSchema } from './objects/MatchParticipantInclude.schema';
import { MatchParticipantOrderByWithRelationInputObjectSchema as MatchParticipantOrderByWithRelationInputObjectSchema } from './objects/MatchParticipantOrderByWithRelationInput.schema';
import { MatchParticipantWhereInputObjectSchema as MatchParticipantWhereInputObjectSchema } from './objects/MatchParticipantWhereInput.schema';
import { MatchParticipantWhereUniqueInputObjectSchema as MatchParticipantWhereUniqueInputObjectSchema } from './objects/MatchParticipantWhereUniqueInput.schema';
import { MatchParticipantScalarFieldEnumSchema } from './enums/MatchParticipantScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MatchParticipantFindManySelectSchema: z.ZodType<Prisma.MatchParticipantSelect> = z.object({
    id: z.boolean().optional(),
    match_id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    resigned: z.boolean().optional(),
    forfeited: z.boolean().optional(),
    position: z.boolean().optional(),
    won: z.boolean().optional(),
    lost: z.boolean().optional(),
    abandoned: z.boolean().optional(),
    aborted: z.boolean().optional(),
    match: z.boolean().optional(),
    user: z.boolean().optional(),
    solves: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MatchParticipantSelect>;

export const MatchParticipantFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    match_id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    resigned: z.boolean().optional(),
    forfeited: z.boolean().optional(),
    position: z.boolean().optional(),
    won: z.boolean().optional(),
    lost: z.boolean().optional(),
    abandoned: z.boolean().optional(),
    aborted: z.boolean().optional(),
    match: z.boolean().optional(),
    user: z.boolean().optional(),
    solves: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const MatchParticipantFindManySchema: z.ZodType<Prisma.MatchParticipantFindManyArgs> = z.object({ select: MatchParticipantFindManySelectSchema.optional(), include: z.lazy(() => MatchParticipantIncludeObjectSchema.optional()), orderBy: z.union([MatchParticipantOrderByWithRelationInputObjectSchema, MatchParticipantOrderByWithRelationInputObjectSchema.array()]).optional(), where: MatchParticipantWhereInputObjectSchema.optional(), cursor: MatchParticipantWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MatchParticipantScalarFieldEnumSchema, MatchParticipantScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MatchParticipantFindManyArgs>;

export const MatchParticipantFindManyZodSchema = z.object({ select: MatchParticipantFindManySelectSchema.optional(), include: z.lazy(() => MatchParticipantIncludeObjectSchema.optional()), orderBy: z.union([MatchParticipantOrderByWithRelationInputObjectSchema, MatchParticipantOrderByWithRelationInputObjectSchema.array()]).optional(), where: MatchParticipantWhereInputObjectSchema.optional(), cursor: MatchParticipantWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MatchParticipantScalarFieldEnumSchema, MatchParticipantScalarFieldEnumSchema.array()]).optional() }).strict();