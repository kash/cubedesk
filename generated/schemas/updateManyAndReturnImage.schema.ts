import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ImageSelectObjectSchema as ImageSelectObjectSchema } from './objects/ImageSelect.schema';
import { ImageUpdateManyMutationInputObjectSchema as ImageUpdateManyMutationInputObjectSchema } from './objects/ImageUpdateManyMutationInput.schema';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './objects/ImageWhereInput.schema';

export const ImageUpdateManyAndReturnSchema: z.ZodType<Prisma.ImageUpdateManyAndReturnArgs> = z.object({ select: ImageSelectObjectSchema.optional(), data: ImageUpdateManyMutationInputObjectSchema, where: ImageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ImageUpdateManyAndReturnArgs>;

export const ImageUpdateManyAndReturnZodSchema = z.object({ select: ImageSelectObjectSchema.optional(), data: ImageUpdateManyMutationInputObjectSchema, where: ImageWhereInputObjectSchema.optional() }).strict();