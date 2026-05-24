import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloRatingIncludeObjectSchema as EloRatingIncludeObjectSchema } from './objects/EloRatingInclude.schema';
import { EloRatingOrderByWithRelationInputObjectSchema as EloRatingOrderByWithRelationInputObjectSchema } from './objects/EloRatingOrderByWithRelationInput.schema';
import { EloRatingWhereInputObjectSchema as EloRatingWhereInputObjectSchema } from './objects/EloRatingWhereInput.schema';
import { EloRatingWhereUniqueInputObjectSchema as EloRatingWhereUniqueInputObjectSchema } from './objects/EloRatingWhereUniqueInput.schema';
import { EloRatingScalarFieldEnumSchema } from './enums/EloRatingScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EloRatingFindFirstOrThrowSelectSchema: z.ZodType<Prisma.EloRatingSelect> = z.object({
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

export const EloRatingFindFirstOrThrowSelectZodSchema = z.object({
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

export const EloRatingFindFirstOrThrowSchema: z.ZodType<Prisma.EloRatingFindFirstOrThrowArgs> = z.object({ select: EloRatingFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => EloRatingIncludeObjectSchema.optional()), orderBy: z.union([EloRatingOrderByWithRelationInputObjectSchema, EloRatingOrderByWithRelationInputObjectSchema.array()]).optional(), where: EloRatingWhereInputObjectSchema.optional(), cursor: EloRatingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EloRatingScalarFieldEnumSchema, EloRatingScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.EloRatingFindFirstOrThrowArgs>;

export const EloRatingFindFirstOrThrowZodSchema = z.object({ select: EloRatingFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => EloRatingIncludeObjectSchema.optional()), orderBy: z.union([EloRatingOrderByWithRelationInputObjectSchema, EloRatingOrderByWithRelationInputObjectSchema.array()]).optional(), where: EloRatingWhereInputObjectSchema.optional(), cursor: EloRatingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EloRatingScalarFieldEnumSchema, EloRatingScalarFieldEnumSchema.array()]).optional() }).strict();