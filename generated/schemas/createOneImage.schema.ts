import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ImageSelectObjectSchema as ImageSelectObjectSchema } from './objects/ImageSelect.schema';
import { ImageIncludeObjectSchema as ImageIncludeObjectSchema } from './objects/ImageInclude.schema';
import { ImageCreateInputObjectSchema as ImageCreateInputObjectSchema } from './objects/ImageCreateInput.schema';
import { ImageUncheckedCreateInputObjectSchema as ImageUncheckedCreateInputObjectSchema } from './objects/ImageUncheckedCreateInput.schema';

export const ImageCreateOneSchema: z.ZodType<Prisma.ImageCreateArgs> = z.object({ select: ImageSelectObjectSchema.optional(), include: ImageIncludeObjectSchema.optional(), data: z.union([ImageCreateInputObjectSchema, ImageUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ImageCreateArgs>;

export const ImageCreateOneZodSchema = z.object({ select: ImageSelectObjectSchema.optional(), include: ImageIncludeObjectSchema.optional(), data: z.union([ImageCreateInputObjectSchema, ImageUncheckedCreateInputObjectSchema]) }).strict();