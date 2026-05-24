import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloRatingIncludeObjectSchema as EloRatingIncludeObjectSchema } from './objects/EloRatingInclude.schema';
import { EloRatingOrderByWithRelationInputObjectSchema as EloRatingOrderByWithRelationInputObjectSchema } from './objects/EloRatingOrderByWithRelationInput.schema';
import { EloRatingWhereInputObjectSchema as EloRatingWhereInputObjectSchema } from './objects/EloRatingWhereInput.schema';
import { EloRatingWhereUniqueInputObjectSchema as EloRatingWhereUniqueInputObjectSchema } from './objects/EloRatingWhereUniqueInput.schema';
import { EloRatingScalarFieldEnumSchema } from './enums/EloRatingScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EloRatingFindFirstSelectSchema: z.ZodType<Prisma.EloRatingSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    elo_222_rating: z.boolean().optional(),
    elo_333_rating: z.boolean().optional(),
    elo_444_rating: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    created_at: z.boolean().optional(),
    elo_overall_rating: z.boolean().optional(),
    profile_id: z.boolean().optional(),
    games_222_count: z.boolean().optional(),
    games_333_count: z.boolean().optional(),
    games_444_count: z.boolean().optional(),
    games_overall_count: z.boolean().optional(),
    profile: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.EloRatingSelect>;

export const EloRatingFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    elo_222_rating: z.boolean().optional(),
    elo_333_rating: z.boolean().optional(),
    elo_444_rating: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    created_at: z.boolean().optional(),
    elo_overall_rating: z.boolean().optional(),
    profile_id: z.boolean().optional(),
    games_222_count: z.boolean().optional(),
    games_333_count: z.boolean().optional(),
    games_444_count: z.boolean().optional(),
    games_overall_count: z.boolean().optional(),
    profile: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const EloRatingFindFirstSchema: z.ZodType<Prisma.EloRatingFindFirstArgs> = z.object({ select: EloRatingFindFirstSelectSchema.optional(), include: z.lazy(() => EloRatingIncludeObjectSchema.optional()), orderBy: z.union([EloRatingOrderByWithRelationInputObjectSchema, EloRatingOrderByWithRelationInputObjectSchema.array()]).optional(), where: EloRatingWhereInputObjectSchema.optional(), cursor: EloRatingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EloRatingScalarFieldEnumSchema, EloRatingScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.EloRatingFindFirstArgs>;

export const EloRatingFindFirstZodSchema = z.object({ select: EloRatingFindFirstSelectSchema.optional(), include: z.lazy(() => EloRatingIncludeObjectSchema.optional()), orderBy: z.union([EloRatingOrderByWithRelationInputObjectSchema, EloRatingOrderByWithRelationInputObjectSchema.array()]).optional(), where: EloRatingWhereInputObjectSchema.optional(), cursor: EloRatingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EloRatingScalarFieldEnumSchema, EloRatingScalarFieldEnumSchema.array()]).optional() }).strict();