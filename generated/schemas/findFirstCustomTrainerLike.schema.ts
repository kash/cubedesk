import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerLikeIncludeObjectSchema as CustomTrainerLikeIncludeObjectSchema } from './objects/CustomTrainerLikeInclude.schema';
import { CustomTrainerLikeOrderByWithRelationInputObjectSchema as CustomTrainerLikeOrderByWithRelationInputObjectSchema } from './objects/CustomTrainerLikeOrderByWithRelationInput.schema';
import { CustomTrainerLikeWhereInputObjectSchema as CustomTrainerLikeWhereInputObjectSchema } from './objects/CustomTrainerLikeWhereInput.schema';
import { CustomTrainerLikeWhereUniqueInputObjectSchema as CustomTrainerLikeWhereUniqueInputObjectSchema } from './objects/CustomTrainerLikeWhereUniqueInput.schema';
import { CustomTrainerLikeScalarFieldEnumSchema } from './enums/CustomTrainerLikeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CustomTrainerLikeFindFirstSelectSchema: z.ZodType<Prisma.CustomTrainerLikeSelect> = z.object({
    id: z.boolean().optional(),
    custom_trainer_id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    creator_id: z.boolean().optional(),
    creator: z.boolean().optional(),
    custom_trainer: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CustomTrainerLikeSelect>;

export const CustomTrainerLikeFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    custom_trainer_id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    creator_id: z.boolean().optional(),
    creator: z.boolean().optional(),
    custom_trainer: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const CustomTrainerLikeFindFirstSchema: z.ZodType<Prisma.CustomTrainerLikeFindFirstArgs> = z.object({ select: CustomTrainerLikeFindFirstSelectSchema.optional(), include: z.lazy(() => CustomTrainerLikeIncludeObjectSchema.optional()), orderBy: z.union([CustomTrainerLikeOrderByWithRelationInputObjectSchema, CustomTrainerLikeOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomTrainerLikeWhereInputObjectSchema.optional(), cursor: CustomTrainerLikeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CustomTrainerLikeScalarFieldEnumSchema, CustomTrainerLikeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CustomTrainerLikeFindFirstArgs>;

export const CustomTrainerLikeFindFirstZodSchema = z.object({ select: CustomTrainerLikeFindFirstSelectSchema.optional(), include: z.lazy(() => CustomTrainerLikeIncludeObjectSchema.optional()), orderBy: z.union([CustomTrainerLikeOrderByWithRelationInputObjectSchema, CustomTrainerLikeOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomTrainerLikeWhereInputObjectSchema.optional(), cursor: CustomTrainerLikeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CustomTrainerLikeScalarFieldEnumSchema, CustomTrainerLikeScalarFieldEnumSchema.array()]).optional() }).strict();