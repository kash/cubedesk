import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ImageSelectObjectSchema as ImageSelectObjectSchema } from './objects/ImageSelect.schema';
import { ImageIncludeObjectSchema as ImageIncludeObjectSchema } from './objects/ImageInclude.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './objects/ImageWhereUniqueInput.schema';
import { ImageCreateInputObjectSchema as ImageCreateInputObjectSchema } from './objects/ImageCreateInput.schema';
import { ImageUncheckedCreateInputObjectSchema as ImageUncheckedCreateInputObjectSchema } from './objects/ImageUncheckedCreateInput.schema';
import { ImageUpdateInputObjectSchema as ImageUpdateInputObjectSchema } from './objects/ImageUpdateInput.schema';
import { ImageUncheckedUpdateInputObjectSchema as ImageUncheckedUpdateInputObjectSchema } from './objects/ImageUncheckedUpdateInput.schema';

export const ImageUpsertOneSchema: z.ZodType<Prisma.ImageUpsertArgs> = z.object({ select: ImageSelectObjectSchema.optional(), include: ImageIncludeObjectSchema.optional(), where: ImageWhereUniqueInputObjectSchema, create: z.union([ ImageCreateInputObjectSchema, ImageUncheckedCreateInputObjectSchema ]), update: z.union([ ImageUpdateInputObjectSchema, ImageUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ImageUpsertArgs>;

export const ImageUpsertOneZodSchema = z.object({ select: ImageSelectObjectSchema.optional(), include: ImageIncludeObjectSchema.optional(), where: ImageWhereUniqueInputObjectSchema, create: z.union([ ImageCreateInputObjectSchema, ImageUncheckedCreateInputObjectSchema ]), update: z.union([ ImageUpdateInputObjectSchema, ImageUncheckedUpdateInputObjectSchema ]) }).strict();