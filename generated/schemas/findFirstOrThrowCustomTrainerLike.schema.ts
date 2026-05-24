import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerLikeIncludeObjectSchema as CustomTrainerLikeIncludeObjectSchema } from './objects/CustomTrainerLikeInclude.schema';
import { CustomTrainerLikeOrderByWithRelationInputObjectSchema as CustomTrainerLikeOrderByWithRelationInputObjectSchema } from './objects/CustomTrainerLikeOrderByWithRelationInput.schema';
import { CustomTrainerLikeWhereInputObjectSchema as CustomTrainerLikeWhereInputObjectSchema } from './objects/CustomTrainerLikeWhereInput.schema';
import { CustomTrainerLikeWhereUniqueInputObjectSchema as CustomTrainerLikeWhereUniqueInputObjectSchema } from './objects/CustomTrainerLikeWhereUniqueInput.schema';
import { CustomTrainerLikeScalarFieldEnumSchema } from './enums/CustomTrainerLikeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CustomTrainerLikeFindFirstOrThrowSelectSchema: z.ZodType<Prisma.CustomTrainerLikeSelect> = z.object({
    id: z.boolean().optional(),
    custom_trainer_id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    creator_id: z.boolean().optional(),
    creator: z.boolean().optional(),
    custom_trainer: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CustomTrainerLikeSelect>;

export const CustomTrainerLikeFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    custom_trainer_id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    creator_id: z.boolean().optional(),
    creator: z.boolean().optional(),
    custom_trainer: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const CustomTrainerLikeFindFirstOrThrowSchema: z.ZodType<Prisma.CustomTrainerLikeFindFirstOrThrowArgs> = z.object({ select: CustomTrainerLikeFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CustomTrainerLikeIncludeObjectSchema.optional()), orderBy: z.union([CustomTrainerLikeOrderByWithRelationInputObjectSchema, CustomTrainerLikeOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomTrainerLikeWhereInputObjectSchema.optional(), cursor: CustomTrainerLikeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CustomTrainerLikeScalarFieldEnumSchema, CustomTrainerLikeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CustomTrainerLikeFindFirstOrThrowArgs>;

export const CustomTrainerLikeFindFirstOrThrowZodSchema = z.object({ select: CustomTrainerLikeFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CustomTrainerLikeIncludeObjectSchema.optional()), orderBy: z.union([CustomTrainerLikeOrderByWithRelationInputObjectSchema, CustomTrainerLikeOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomTrainerLikeWhereInputObjectSchema.optional(), cursor: CustomTrainerLikeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CustomTrainerLikeScalarFieldEnumSchema, CustomTrainerLikeScalarFieldEnumSchema.array()]).optional() }).strict();