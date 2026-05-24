import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ImageCreateManyInputObjectSchema as ImageCreateManyInputObjectSchema } from './objects/ImageCreateManyInput.schema';

export const ImageCreateManySchema: z.ZodType<Prisma.ImageCreateManyArgs> = z.object({ data: z.union([ ImageCreateManyInputObjectSchema, z.array(ImageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ImageCreateManyArgs>;

export const ImageCreateManyZodSchema = z.object({ data: z.union([ ImageCreateManyInputObjectSchema, z.array(ImageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();