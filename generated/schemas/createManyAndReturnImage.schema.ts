import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ImageSelectObjectSchema as ImageSelectObjectSchema } from './objects/ImageSelect.schema';
import { ImageCreateManyInputObjectSchema as ImageCreateManyInputObjectSchema } from './objects/ImageCreateManyInput.schema';

export const ImageCreateManyAndReturnSchema: z.ZodType<Prisma.ImageCreateManyAndReturnArgs> = z.object({ select: ImageSelectObjectSchema.optional(), data: z.union([ ImageCreateManyInputObjectSchema, z.array(ImageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ImageCreateManyAndReturnArgs>;

export const ImageCreateManyAndReturnZodSchema = z.object({ select: ImageSelectObjectSchema.optional(), data: z.union([ ImageCreateManyInputObjectSchema, z.array(ImageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();