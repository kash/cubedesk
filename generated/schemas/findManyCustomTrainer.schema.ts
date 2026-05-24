import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerIncludeObjectSchema as CustomTrainerIncludeObjectSchema } from './objects/CustomTrainerInclude.schema';
import { CustomTrainerOrderByWithRelationInputObjectSchema as CustomTrainerOrderByWithRelationInputObjectSchema } from './objects/CustomTrainerOrderByWithRelationInput.schema';
import { CustomTrainerWhereInputObjectSchema as CustomTrainerWhereInputObjectSchema } from './objects/CustomTrainerWhereInput.schema';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './objects/CustomTrainerWhereUniqueInput.schema';
import { CustomTrainerScalarFieldEnumSchema } from './enums/CustomTrainerScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CustomTrainerFindManySelectSchema: z.ZodType<Prisma.CustomTrainerSelect> = z.object({
    id: z.boolean().optional(),
    colors: z.boolean().optional(),
    cube_type: z.boolean().optional(),
    key: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    name: z.boolean().optional(),
    like_count: z.boolean().optional(),
    private: z.boolean().optional(),
    copy_of_id: z.boolean().optional(),
    description: z.boolean().optional(),
    downloaded: z.boolean().optional(),
    group_name: z.boolean().optional(),
    scrambles: z.boolean().optional(),
    solution: z.boolean().optional(),
    alt_solutions: z.boolean().optional(),
    three_d: z.boolean().optional(),
    algo_type: z.boolean().optional(),
    copy_of: z.boolean().optional(),
    copies: z.boolean().optional(),
    user: z.boolean().optional(),
    download_of: z.boolean().optional(),
    downloads: z.boolean().optional(),
    likes: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CustomTrainerSelect>;

export const CustomTrainerFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    colors: z.boolean().optional(),
    cube_type: z.boolean().optional(),
    key: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    name: z.boolean().optional(),
    like_count: z.boolean().optional(),
    private: z.boolean().optional(),
    copy_of_id: z.boolean().optional(),
    description: z.boolean().optional(),
    downloaded: z.boolean().optional(),
    group_name: z.boolean().optional(),
    scrambles: z.boolean().optional(),
    solution: z.boolean().optional(),
    alt_solutions: z.boolean().optional(),
    three_d: z.boolean().optional(),
    algo_type: z.boolean().optional(),
    copy_of: z.boolean().optional(),
    copies: z.boolean().optional(),
    user: z.boolean().optional(),
    download_of: z.boolean().optional(),
    downloads: z.boolean().optional(),
    likes: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CustomTrainerFindManySchema: z.ZodType<Prisma.CustomTrainerFindManyArgs> = z.object({ select: CustomTrainerFindManySelectSchema.optional(), include: z.lazy(() => CustomTrainerIncludeObjectSchema.optional()), orderBy: z.union([CustomTrainerOrderByWithRelationInputObjectSchema, CustomTrainerOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomTrainerWhereInputObjectSchema.optional(), cursor: CustomTrainerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CustomTrainerScalarFieldEnumSchema, CustomTrainerScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CustomTrainerFindManyArgs>;

export const CustomTrainerFindManyZodSchema = z.object({ select: CustomTrainerFindManySelectSchema.optional(), include: z.lazy(() => CustomTrainerIncludeObjectSchema.optional()), orderBy: z.union([CustomTrainerOrderByWithRelationInputObjectSchema, CustomTrainerOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomTrainerWhereInputObjectSchema.optional(), cursor: CustomTrainerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CustomTrainerScalarFieldEnumSchema, CustomTrainerScalarFieldEnumSchema.array()]).optional() }).strict();