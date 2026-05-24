import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ImageIncludeObjectSchema as ImageIncludeObjectSchema } from './objects/ImageInclude.schema';
import { ImageOrderByWithRelationInputObjectSchema as ImageOrderByWithRelationInputObjectSchema } from './objects/ImageOrderByWithRelationInput.schema';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './objects/ImageWhereInput.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './objects/ImageWhereUniqueInput.schema';
import { ImageScalarFieldEnumSchema } from './enums/ImageScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ImageFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ImageSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    url: z.boolean().optional(),
    storage_path: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional(),
    profile_header_image: z.boolean().optional(),
    profile_pfp_image: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ImageSelect>;

export const ImageFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    url: z.boolean().optional(),
    storage_path: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.boolean().optional(),
    profile_header_image: z.boolean().optional(),
    profile_pfp_image: z.boolean().optional()
  }).strict();

export const ImageFindFirstOrThrowSchema: z.ZodType<Prisma.ImageFindFirstOrThrowArgs> = z.object({ select: ImageFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ImageIncludeObjectSchema.optional()), orderBy: z.union([ImageOrderByWithRelationInputObjectSchema, ImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: ImageWhereInputObjectSchema.optional(), cursor: ImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ImageScalarFieldEnumSchema, ImageScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ImageFindFirstOrThrowArgs>;

export const ImageFindFirstOrThrowZodSchema = z.object({ select: ImageFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ImageIncludeObjectSchema.optional()), orderBy: z.union([ImageOrderByWithRelationInputObjectSchema, ImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: ImageWhereInputObjectSchema.optional(), cursor: ImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ImageScalarFieldEnumSchema, ImageScalarFieldEnumSchema.array()]).optional() }).strict();