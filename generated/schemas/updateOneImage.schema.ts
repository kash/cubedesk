import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ImageSelectObjectSchema as ImageSelectObjectSchema } from './objects/ImageSelect.schema';
import { ImageIncludeObjectSchema as ImageIncludeObjectSchema } from './objects/ImageInclude.schema';
import { ImageUpdateInputObjectSchema as ImageUpdateInputObjectSchema } from './objects/ImageUpdateInput.schema';
import { ImageUncheckedUpdateInputObjectSchema as ImageUncheckedUpdateInputObjectSchema } from './objects/ImageUncheckedUpdateInput.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './objects/ImageWhereUniqueInput.schema';

export const ImageUpdateOneSchema: z.ZodType<Prisma.ImageUpdateArgs> = z.object({ select: ImageSelectObjectSchema.optional(), include: ImageIncludeObjectSchema.optional(), data: z.union([ImageUpdateInputObjectSchema, ImageUncheckedUpdateInputObjectSchema]), where: ImageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ImageUpdateArgs>;

export const ImageUpdateOneZodSchema = z.object({ select: ImageSelectObjectSchema.optional(), include: ImageIncludeObjectSchema.optional(), data: z.union([ImageUpdateInputObjectSchema, ImageUncheckedUpdateInputObjectSchema]), where: ImageWhereUniqueInputObjectSchema }).strict();