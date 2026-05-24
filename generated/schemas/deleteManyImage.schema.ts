import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './objects/ImageWhereInput.schema';

export const ImageDeleteManySchema: z.ZodType<Prisma.ImageDeleteManyArgs> = z.object({ where: ImageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ImageDeleteManyArgs>;

export const ImageDeleteManyZodSchema = z.object({ where: ImageWhereInputObjectSchema.optional() }).strict();