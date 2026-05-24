import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ImageSelectObjectSchema as ImageSelectObjectSchema } from './objects/ImageSelect.schema';
import { ImageIncludeObjectSchema as ImageIncludeObjectSchema } from './objects/ImageInclude.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './objects/ImageWhereUniqueInput.schema';

export const ImageFindUniqueOrThrowSchema: z.ZodType<Prisma.ImageFindUniqueOrThrowArgs> = z.object({ select: ImageSelectObjectSchema.optional(), include: ImageIncludeObjectSchema.optional(), where: ImageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ImageFindUniqueOrThrowArgs>;

export const ImageFindUniqueOrThrowZodSchema = z.object({ select: ImageSelectObjectSchema.optional(), include: ImageIncludeObjectSchema.optional(), where: ImageWhereUniqueInputObjectSchema }).strict();