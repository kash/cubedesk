import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerDownloadIncludeObjectSchema as CustomTrainerDownloadIncludeObjectSchema } from './objects/CustomTrainerDownloadInclude.schema';
import { CustomTrainerDownloadOrderByWithRelationInputObjectSchema as CustomTrainerDownloadOrderByWithRelationInputObjectSchema } from './objects/CustomTrainerDownloadOrderByWithRelationInput.schema';
import { CustomTrainerDownloadWhereInputObjectSchema as CustomTrainerDownloadWhereInputObjectSchema } from './objects/CustomTrainerDownloadWhereInput.schema';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './objects/CustomTrainerDownloadWhereUniqueInput.schema';
import { CustomTrainerDownloadScalarFieldEnumSchema } from './enums/CustomTrainerDownloadScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CustomTrainerDownloadFindManySelectSchema: z.ZodType<Prisma.CustomTrainerDownloadSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    creator_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    new_trainer_id: z.boolean().optional(),
    source_trainer_id: z.boolean().optional(),
    creator: z.boolean().optional(),
    new_trainer: z.boolean().optional(),
    source_trainer: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CustomTrainerDownloadSelect>;

export const CustomTrainerDownloadFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    creator_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    new_trainer_id: z.boolean().optional(),
    source_trainer_id: z.boolean().optional(),
    creator: z.boolean().optional(),
    new_trainer: z.boolean().optional(),
    source_trainer: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const CustomTrainerDownloadFindManySchema: z.ZodType<Prisma.CustomTrainerDownloadFindManyArgs> = z.object({ select: CustomTrainerDownloadFindManySelectSchema.optional(), include: z.lazy(() => CustomTrainerDownloadIncludeObjectSchema.optional()), orderBy: z.union([CustomTrainerDownloadOrderByWithRelationInputObjectSchema, CustomTrainerDownloadOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomTrainerDownloadWhereInputObjectSchema.optional(), cursor: CustomTrainerDownloadWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CustomTrainerDownloadScalarFieldEnumSchema, CustomTrainerDownloadScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CustomTrainerDownloadFindManyArgs>;

export const CustomTrainerDownloadFindManyZodSchema = z.object({ select: CustomTrainerDownloadFindManySelectSchema.optional(), include: z.lazy(() => CustomTrainerDownloadIncludeObjectSchema.optional()), orderBy: z.union([CustomTrainerDownloadOrderByWithRelationInputObjectSchema, CustomTrainerDownloadOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomTrainerDownloadWhereInputObjectSchema.optional(), cursor: CustomTrainerDownloadWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CustomTrainerDownloadScalarFieldEnumSchema, CustomTrainerDownloadScalarFieldEnumSchema.array()]).optional() }).strict();