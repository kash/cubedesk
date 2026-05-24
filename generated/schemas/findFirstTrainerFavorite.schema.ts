import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TrainerFavoriteIncludeObjectSchema as TrainerFavoriteIncludeObjectSchema } from './objects/TrainerFavoriteInclude.schema';
import { TrainerFavoriteOrderByWithRelationInputObjectSchema as TrainerFavoriteOrderByWithRelationInputObjectSchema } from './objects/TrainerFavoriteOrderByWithRelationInput.schema';
import { TrainerFavoriteWhereInputObjectSchema as TrainerFavoriteWhereInputObjectSchema } from './objects/TrainerFavoriteWhereInput.schema';
import { TrainerFavoriteWhereUniqueInputObjectSchema as TrainerFavoriteWhereUniqueInputObjectSchema } from './objects/TrainerFavoriteWhereUniqueInput.schema';
import { TrainerFavoriteScalarFieldEnumSchema } from './enums/TrainerFavoriteScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TrainerFavoriteFindFirstSelectSchema: z.ZodType<Prisma.TrainerFavoriteSelect> = z.object({
    id: z.boolean().optional(),
    cube_key: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TrainerFavoriteSelect>;

export const TrainerFavoriteFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    cube_key: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const TrainerFavoriteFindFirstSchema: z.ZodType<Prisma.TrainerFavoriteFindFirstArgs> = z.object({ select: TrainerFavoriteFindFirstSelectSchema.optional(), include: z.lazy(() => TrainerFavoriteIncludeObjectSchema.optional()), orderBy: z.union([TrainerFavoriteOrderByWithRelationInputObjectSchema, TrainerFavoriteOrderByWithRelationInputObjectSchema.array()]).optional(), where: TrainerFavoriteWhereInputObjectSchema.optional(), cursor: TrainerFavoriteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TrainerFavoriteScalarFieldEnumSchema, TrainerFavoriteScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TrainerFavoriteFindFirstArgs>;

export const TrainerFavoriteFindFirstZodSchema = z.object({ select: TrainerFavoriteFindFirstSelectSchema.optional(), include: z.lazy(() => TrainerFavoriteIncludeObjectSchema.optional()), orderBy: z.union([TrainerFavoriteOrderByWithRelationInputObjectSchema, TrainerFavoriteOrderByWithRelationInputObjectSchema.array()]).optional(), where: TrainerFavoriteWhereInputObjectSchema.optional(), cursor: TrainerFavoriteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TrainerFavoriteScalarFieldEnumSchema, TrainerFavoriteScalarFieldEnumSchema.array()]).optional() }).strict();