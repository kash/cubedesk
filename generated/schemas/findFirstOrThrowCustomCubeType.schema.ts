import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomCubeTypeIncludeObjectSchema as CustomCubeTypeIncludeObjectSchema } from './objects/CustomCubeTypeInclude.schema';
import { CustomCubeTypeOrderByWithRelationInputObjectSchema as CustomCubeTypeOrderByWithRelationInputObjectSchema } from './objects/CustomCubeTypeOrderByWithRelationInput.schema';
import { CustomCubeTypeWhereInputObjectSchema as CustomCubeTypeWhereInputObjectSchema } from './objects/CustomCubeTypeWhereInput.schema';
import { CustomCubeTypeWhereUniqueInputObjectSchema as CustomCubeTypeWhereUniqueInputObjectSchema } from './objects/CustomCubeTypeWhereUniqueInput.schema';
import { CustomCubeTypeScalarFieldEnumSchema } from './enums/CustomCubeTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CustomCubeTypeFindFirstOrThrowSelectSchema: z.ZodType<Prisma.CustomCubeTypeSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    name: z.boolean().optional(),
    created_at: z.boolean().optional(),
    scramble: z.boolean().optional(),
    private: z.boolean().optional(),
    setting: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CustomCubeTypeSelect>;

export const CustomCubeTypeFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    name: z.boolean().optional(),
    created_at: z.boolean().optional(),
    scramble: z.boolean().optional(),
    private: z.boolean().optional(),
    setting: z.boolean().optional()
  }).strict();

export const CustomCubeTypeFindFirstOrThrowSchema: z.ZodType<Prisma.CustomCubeTypeFindFirstOrThrowArgs> = z.object({ select: CustomCubeTypeFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CustomCubeTypeIncludeObjectSchema.optional()), orderBy: z.union([CustomCubeTypeOrderByWithRelationInputObjectSchema, CustomCubeTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomCubeTypeWhereInputObjectSchema.optional(), cursor: CustomCubeTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CustomCubeTypeScalarFieldEnumSchema, CustomCubeTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CustomCubeTypeFindFirstOrThrowArgs>;

export const CustomCubeTypeFindFirstOrThrowZodSchema = z.object({ select: CustomCubeTypeFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CustomCubeTypeIncludeObjectSchema.optional()), orderBy: z.union([CustomCubeTypeOrderByWithRelationInputObjectSchema, CustomCubeTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomCubeTypeWhereInputObjectSchema.optional(), cursor: CustomCubeTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CustomCubeTypeScalarFieldEnumSchema, CustomCubeTypeScalarFieldEnumSchema.array()]).optional() }).strict();