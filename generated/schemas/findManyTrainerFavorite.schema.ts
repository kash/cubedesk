import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TrainerFavoriteIncludeObjectSchema as TrainerFavoriteIncludeObjectSchema } from './objects/TrainerFavoriteInclude.schema';
import { TrainerFavoriteOrderByWithRelationInputObjectSchema as TrainerFavoriteOrderByWithRelationInputObjectSchema } from './objects/TrainerFavoriteOrderByWithRelationInput.schema';
import { TrainerFavoriteWhereInputObjectSchema as TrainerFavoriteWhereInputObjectSchema } from './objects/TrainerFavoriteWhereInput.schema';
import { TrainerFavoriteWhereUniqueInputObjectSchema as TrainerFavoriteWhereUniqueInputObjectSchema } from './objects/TrainerFavoriteWhereUniqueInput.schema';
import { TrainerFavoriteScalarFieldEnumSchema } from './enums/TrainerFavoriteScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TrainerFavoriteFindManySelectSchema: z.ZodType<Prisma.TrainerFavoriteSelect> = z.object({
    id: z.boolean().optional(),
    cube_key: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TrainerFavoriteSelect>;

export const TrainerFavoriteFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    cube_key: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const TrainerFavoriteFindManySchema: z.ZodType<Prisma.TrainerFavoriteFindManyArgs> = z.object({ select: TrainerFavoriteFindManySelectSchema.optional(), include: z.lazy(() => TrainerFavoriteIncludeObjectSchema.optional()), orderBy: z.union([TrainerFavoriteOrderByWithRelationInputObjectSchema, TrainerFavoriteOrderByWithRelationInputObjectSchema.array()]).optional(), where: TrainerFavoriteWhereInputObjectSchema.optional(), cursor: TrainerFavoriteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TrainerFavoriteScalarFieldEnumSchema, TrainerFavoriteScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TrainerFavoriteFindManyArgs>;

export const TrainerFavoriteFindManyZodSchema = z.object({ select: TrainerFavoriteFindManySelectSchema.optional(), include: z.lazy(() => TrainerFavoriteIncludeObjectSchema.optional()), orderBy: z.union([TrainerFavoriteOrderByWithRelationInputObjectSchema, TrainerFavoriteOrderByWithRelationInputObjectSchema.array()]).optional(), where: TrainerFavoriteWhereInputObjectSchema.optional(), cursor: TrainerFavoriteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TrainerFavoriteScalarFieldEnumSchema, TrainerFavoriteScalarFieldEnumSchema.array()]).optional() }).strict();