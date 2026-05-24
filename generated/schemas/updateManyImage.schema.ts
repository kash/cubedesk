import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ImageUpdateManyMutationInputObjectSchema as ImageUpdateManyMutationInputObjectSchema } from './objects/ImageUpdateManyMutationInput.schema';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './objects/ImageWhereInput.schema';

export const ImageUpdateManySchema: z.ZodType<Prisma.ImageUpdateManyArgs> = z.object({ data: ImageUpdateManyMutationInputObjectSchema, where: ImageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ImageUpdateManyArgs>;

export const ImageUpdateManyZodSchema = z.object({ data: ImageUpdateManyMutationInputObjectSchema, where: ImageWhereInputObjectSchema.optional() }).strict();